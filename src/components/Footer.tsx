import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TrackedCta from './TrackedCta';
import Icon from './Icon';
import { ctaLinks, siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container footer-cta">
            <div>
                <span className="cta-badge"><Icon name="golfBall" /> Ready to hit a bucket?</span>
                <h2 className="heading-lg text-white">Plan your next practice session.</h2>
                <p>Check pricing, get directions, or call before you head over.</p>
            </div>
            <div className="footer-cta-actions">
                <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="footer_cta" className="btn btn-accent">
                    {ctaLinks.pricing.label}
                </TrackedCta>
                <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="footer_cta" className="btn btn-outline">
                    {ctaLinks.directions.label}
                </TrackedCta>
                <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="footer_cta" className="btn btn-primary">
                    Call Now
                </TrackedCta>
            </div>
        </div>
        <div className="container footer-grid">
            <div className="footer-brand">
                <Image
                    src="/brand/bigmoose-logo-full.png"
                    alt="Big Moose Driving Range"
                    width={320}
                    height={146}
                    className="footer-logo"
                />
                <p>The premier golf practice destination. Whether you&apos;re a seasoned pro or picking up a club for the first time, we have everything you need to improve your game.</p>
            </div>

            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link href="/pricing" prefetch={false}>Pricing</Link></li>
                    <li><Link href="/facilities" prefetch={false}>Facility Features</Link></li>
                    <li><Link href="/facilities#gallery" prefetch={false}>Gallery</Link></li>
                    <li><Link href="/contact#faq" prefetch={false}>FAQ</Link></li>
                    <li><Link href="/contact" prefetch={false}>Contact</Link></li>
                </ul>
            </div>

            <div className="footer-social">
                <h4>Connect</h4>
                <div className="social-icons">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
                </div>
            </div>
        </div>
        <div className="container footer-bottom">
            <p>&copy; 2026 Big Moose Driving Range. All rights reserved.</p>
        </div>
    </footer>
  );
}
