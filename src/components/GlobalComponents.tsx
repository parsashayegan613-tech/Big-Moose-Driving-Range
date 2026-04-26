import React from 'react';
import VanillaInteractions from './VanillaInteractions';
import PageLoader from './PageLoader';
import ScrollProgress from './ScrollProgress';

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
          <a href="tel:+15875948874" className="mobile-cta-call">
              <i className="fa-solid fa-phone"></i> Call
          </a>
          <a href="/pricing" className="mobile-cta-pricing">
              <i className="fa-solid fa-tag"></i> Pricing
          </a>
          <a href="https://maps.google.com/?q=13415+41+Ave+SW+Edmonton+AB" target="_blank" rel="noopener noreferrer" className="mobile-cta-directions">
              <i className="fa-solid fa-diamond-turn-right"></i> Directions
          </a>
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
