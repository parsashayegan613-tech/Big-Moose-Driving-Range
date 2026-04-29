import React from 'react';
import type { Metadata } from 'next';
import RangeIcon from '@/components/RangeIcon';
import TrackedCta from '@/components/TrackedCta';
import { ctaLinks } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: "Pricing & Packages",
    description: "View Big Moose Driving Range pricing for small and large buckets, punch cards, club rentals, and the 30% senior discount in southwest Edmonton.",
    alternates: {
        canonical: "/pricing",
    },
};

export default function PricingPage() {
    return (
        <main className="subpage-main">
            <section className="section pricing pt-0">
                <div className="container">
                    <div className="section-header subpage-header text-center reveal">
                        <span className="badge premium-badge mb-4">Affordable Practice</span>
                        <h1 className="heading-xl subpage-title text-reveal">Pricing & Packages</h1>
                        <p className="text-lead max-w-2xl mx-auto mt-6">Simple, affordable pricing. Grab a bucket and start swinging. Seniors get 30% off all buckets!</p>
                    </div>

                    <div className="pricing-summary reveal" aria-label="Pricing summary">
                        <div className="pricing-summary-row pricing-summary-head">
                            <span>Item</span>
                            <span>Includes</span>
                            <span>Price</span>
                        </div>
                        <div className="pricing-summary-row">
                            <span>Small Bucket</span>
                            <span>45 balls</span>
                            <strong>$10.50</strong>
                        </div>
                        <div className="pricing-summary-row">
                            <span>Large Bucket</span>
                            <span>110 balls</span>
                            <strong>$15.50</strong>
                        </div>
                        <div className="pricing-summary-row">
                            <span>Best Punch Card</span>
                            <span>20 large buckets</span>
                            <strong>$200</strong>
                        </div>
                        <div className="pricing-summary-row">
                            <span>Club Rental</span>
                            <span>Per visit</span>
                            <strong>$7</strong>
                        </div>
                        <div className="pricing-summary-row pricing-summary-highlight">
                            <span>Senior Discount</span>
                            <span>All buckets</span>
                            <strong>30% off</strong>
                        </div>
                    </div>

                    {/* Bucket Pricing */}
                    <h2 className="heading-md text-center mb-pricing-sub reveal">Range Buckets</h2>
                    <div className="pricing-grid">
                        {/* Small Bucket */}
                        <div className="pricing-card reveal">
                            <h3 className="heading-md">Small Bucket</h3>
                            <p className="balls-count">45 Balls</p>
                            <div className="price">$10<span className="price-cents">.50</span></div>
                            <ul className="pricing-features">
                                <li><span className="price-bullet"><RangeIcon name="balls" /></span> Titleist & Callaway balls</li>
                                <li><span className="price-bullet"><RangeIcon name="mat" /></span> Elevated mats</li>
                                <li><span className="price-bullet"><RangeIcon name="target" /></span> Targets on range</li>
                            </ul>
                        </div>

                        {/* Large Bucket */}
                        <div className="pricing-card popular reveal">
                            <div className="popular-badge">BEST VALUE</div>
                            <h3 className="heading-md">Large Bucket</h3>
                            <p className="balls-count">110 Balls</p>
                            <div className="price">$15<span className="price-cents">.50</span></div>
                            <ul className="pricing-features">
                                <li><span className="price-bullet"><RangeIcon name="balls" /></span> Titleist & Callaway balls</li>
                                <li><span className="price-bullet"><RangeIcon name="mat" /></span> Elevated mats</li>
                                <li><span className="price-bullet"><RangeIcon name="target" /></span> Targets on range</li>
                            </ul>
                        </div>
                    </div>

                    <div className="decision-cta reveal">
                        <div>
                            <h3>Ready to hit a bucket?</h3>
                            <p>Walk up during open hours, or call before you head over if weather looks uncertain.</p>
                        </div>
                        <div className="decision-cta-actions">
                            <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="pricing_after_buckets" className="btn btn-primary">
                                <i className="fa-solid fa-diamond-turn-right"></i> {ctaLinks.directions.label}
                            </TrackedCta>
                            <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="pricing_after_buckets" className="btn btn-outline">
                                <i className="fa-solid fa-phone"></i> {ctaLinks.call.label}
                            </TrackedCta>
                        </div>
                    </div>

                    {/* Punch Cards */}
                    <div id="punch-cards"></div>
                    <h2 className="heading-md text-center mb-pricing-sub mt-pricing-section reveal">Punch Cards</h2>
                    <div className="pricing-grid punch-grid">
                        <div className="pricing-card punch-card reveal">
                            <div className="punch-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/punch-card-icon.png" alt="" className="pricing-punch-icon-img" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md">10 Small Buckets</h3>
                            <div className="price">$70</div>
                            <p className="punch-savings">Save $35</p>
                        </div>

                        <div className="pricing-card punch-card reveal">
                            <div className="punch-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/punch-card-icon.png" alt="" className="pricing-punch-icon-img" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md">10 Large Buckets</h3>
                            <div className="price">$125</div>
                            <p className="punch-savings">Save $30</p>
                        </div>

                        <div className="pricing-card punch-card popular reveal">
                            <div className="popular-badge">MOST POPULAR</div>
                            <div className="punch-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/punch-card-icon.png" alt="" className="pricing-punch-icon-img" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md">20 Large Buckets</h3>
                            <div className="price">$200</div>
                            <p className="punch-savings">Save $110</p>
                        </div>
                    </div>

                    {/* Extras */}
                    <h2 className="heading-md text-center mb-pricing-sub mt-pricing-section reveal">Rentals & Extras</h2>
                    <div className="extras-grid reveal">
                        <div className="extra-item">
                            <div className="extra-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/club-rental-icon.png" alt="" className="pricing-extra-icon-img" aria-hidden="true" />
                            </div>
                            <div>
                                <h4>Club Rental</h4>
                                <p>$7.00</p>
                            </div>
                        </div>

                        <div className="extra-item">
                            <div className="extra-icon">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/senior-discount-icon.png" alt="" className="pricing-extra-icon-img" aria-hidden="true" />
                            </div>
                            <div>
                                <h4>Senior Discount</h4>
                                <p>30% off all buckets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional CTA Banner */}
            <section className="cta-banner">
                <div className="cta-banner-bg"></div>
                <div className="container cta-banner-content reveal">
                    <div className="cta-text">
                        <span className="cta-badge"><i className="fa-solid fa-fire"></i> Best Deal</span>
                        <h2 className="heading-lg text-white">Save up to $110 with Punch Cards</h2>
                        <p>The more you play, the more you save. Grab a 20-large-bucket punch card and pay just $10 per session.</p>
                    </div>
                    <a href="#punch-cards" className="btn btn-accent btn-lg">See Punch Cards <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </section>
        </main>
    );
}
