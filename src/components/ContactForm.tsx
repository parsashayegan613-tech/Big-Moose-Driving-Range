"use client";

import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { track } from '@vercel/analytics';
import Icon from '@/components/Icon';
import { ctaLinks, ctaTracking } from '@/lib/siteConfig';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = useMemo(() => searchParams.get('subject') || '', [searchParams]);
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
      company: String(formData.get('company') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Message could not be sent.');
      }

      track('Contact Form Submitted', {
        placement: 'contact_form',
        subject: payload.subject || 'Website inquiry',
      });

      form.reset();
      setState('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Message could not be sent.');
      setState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input type="text" id="contact-name" name="name" placeholder="Your name" className="form-input" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input type="email" id="contact-email" name="email" placeholder="you@example.com" className="form-input" autoComplete="email" required />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-phone">Phone</label>
          <input type="tel" id="contact-phone" name="phone" placeholder="Optional" className="form-input" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" id="contact-subject" name="subject" defaultValue={initialSubject} placeholder="e.g. Group booking inquiry" className="form-input" required />
        </div>
      </div>

      <div className="form-field form-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input type="text" id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="How can we help you?" className="form-textarea" required />
      </div>

      {state === 'success' ? (
        <p className="contact-form-status contact-form-status-success" role="status">
          Thanks. Your message has been sent to Big Moose.
        </p>
      ) : null}

      {state === 'error' ? (
        <p className="contact-form-status contact-form-status-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn btn-primary contact-submit"
        disabled={state === 'sending'}
        {...ctaTracking(ctaLinks.email.action, "contact_form")}
      >
        <Icon name="paperPlane" /> {state === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
