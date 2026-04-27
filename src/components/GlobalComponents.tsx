import React from 'react';
import VanillaInteractions from './VanillaInteractions';
import PageLoader from './PageLoader';
import ScrollProgress from './ScrollProgress';
import TrackedCta from './TrackedCta';
import { ctaLinks } from '@/lib/siteConfig';

export default function GlobalComponents() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <VanillaInteractions />
      
      {/* Back to Top Button */}
      <button className="back-to-top" aria-label="Back to top">
          <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Mobile Floating CTA Bar */}
      <div className="mobile-cta-bar">
          <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="mobile_sticky_bar" className="mobile-cta-call">
              <i className="fa-solid fa-phone"></i> Call
          </TrackedCta>
          <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="mobile_sticky_bar" className="mobile-cta-pricing">
              <i className="fa-solid fa-tag"></i> Pricing
          </TrackedCta>
          <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="mobile_sticky_bar" className="mobile-cta-directions">
              <i className="fa-solid fa-diamond-turn-right"></i> Directions
          </TrackedCta>
      </div>

      {/* Gallery Lightbox */}
      <div className="lightbox" id="lightbox">
          <button className="lightbox-close" aria-label="Close lightbox"><i className="fa-solid fa-xmark"></i></button>
          <button className="lightbox-prev" aria-label="Previous image"><i className="fa-solid fa-chevron-left"></i></button>
          <button className="lightbox-next" aria-label="Next image"><i className="fa-solid fa-chevron-right"></i></button>
          <div className="lightbox-content">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="lightbox-img" alt="" />
              <p className="lightbox-caption"></p>
          </div>
      </div>
    </>
  );
}
