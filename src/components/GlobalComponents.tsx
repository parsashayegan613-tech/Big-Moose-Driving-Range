import React from 'react';
import VanillaInteractions from './VanillaInteractions';
import ScrollProgress from './ScrollProgress';
import TrackedCta from './TrackedCta';
import Icon from './Icon';
import { ctaLinks } from '@/lib/siteConfig';

export default function GlobalComponents() {
  return (
    <>
      <ScrollProgress />
      <VanillaInteractions />
      
      {/* Back to Top Button */}
      <button className="back-to-top" aria-label="Back to top">
          <Icon name="arrowUp" />
      </button>

      {/* Mobile Floating CTA Bar */}
      <div className="mobile-cta-bar">
          <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="mobile_sticky_bar" className="mobile-cta-call">
              <Icon name="phone" /> Call
          </TrackedCta>
          <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="mobile_sticky_bar" className="mobile-cta-pricing">
              <Icon name="tag" /> Pricing
          </TrackedCta>
          <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="mobile_sticky_bar" className="mobile-cta-directions">
              <Icon name="diamondTurnRight" /> Directions
          </TrackedCta>
      </div>

      {/* Gallery Lightbox */}
      <div className="lightbox" id="lightbox">
          <button className="lightbox-close" aria-label="Close lightbox"><Icon name="x" /></button>
          <button className="lightbox-prev" aria-label="Previous image"><Icon name="chevronLeft" /></button>
          <button className="lightbox-next" aria-label="Next image"><Icon name="chevronRight" /></button>
          <div className="lightbox-content">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="lightbox-img" alt="" />
              <p className="lightbox-caption"></p>
          </div>
      </div>
    </>
  );
}
