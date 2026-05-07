import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/siteConfig';

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

let resendClient: Resend | null = null;
const rateLimitMap = new Map<string, RateLimitEntry>();

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

function getString(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitMap.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function buildEmailText(fields: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return [
    `New contact form submission from ${siteConfig.name}`,
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || 'Not provided'}`,
    `Subject: ${fields.subject}`,
    '',
    'Message:',
    fields.message,
  ].join('\n');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const safeMessage = escapeHtml(fields.message).replace(/\n/g, '<br />');

  return `
    <div style="font-family: Arial, sans-serif; color: #1A1A1A; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New Big Moose website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Phone:</strong> ${fields.phone ? escapeHtml(fields.phone) : 'Not provided'}</p>
      <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
      <hr style="border: 0; border-top: 1px solid #E7DED5; margin: 20px 0;" />
      <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages. Please wait a minute and try again.' },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (getString(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = getString(payload.name);
  const email = getString(payload.email);
  const phone = getString(payload.phone);
  const subject = getString(payload.subject) || 'Website inquiry';
  const message = getString(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please provide your name, email, and message.' },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const fields = { name, email, phone, subject, message };
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!fromEmail) {
    return NextResponse.json(
      { error: 'Email sending is not configured yet.' },
      { status: 500 },
    );
  }

  try {
    await getResend().emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Big Moose website inquiry: ${subject}`,
      text: buildEmailText(fields),
      html: buildEmailHtml(fields),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed', error);
    return NextResponse.json(
      { error: 'Message could not be sent. Please call or email us directly.' },
      { status: 500 },
    );
  }
}
