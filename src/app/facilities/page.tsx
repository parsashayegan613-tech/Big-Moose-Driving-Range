import React from 'react';
import Image from 'next/image';
import RangeIcon from '@/components/RangeIcon';
import TrackedCta from '@/components/TrackedCta';
import { ctaLinks } from '@/lib/siteConfig';

export default function FacilitiesPage() {
    return (
        <main className="subpage-main">
            <div className="container subpage-header text-center">
                <span className="badge premium-badge mb-4">Premium Amenities</span>
                <h1 className="heading-xl subpage-title text-reveal">Everything You Need <br /> To Improve Your Game</h1>
                <p className="text-lead max-w-2xl mx-auto mt-6">From our pristine turf to our top-tier practice greens, Big Moose is designed for golfers who take their practice seriously.</p>
            </div>

            <section className="section features pb-24">
                <div className="container">
                    {/* Stats Counter Row */}
                    <div className="stats-row reveal mb-20">
                        <div className="stat-item">
                            <span className="stat-number" data-target="35">0</span>
                            <span className="stat-label">Elevated Mats</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number" data-target="110">0</span>
                            <span className="stat-label">Balls Per Large Bucket</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number" data-target="30" data-suffix="%">0</span>
                            <span className="stat-label">Senior Discount</span>
                        </div>
                    </div>

                    <div className="features-grid stagger-reveal">
                        {/* Feature 1 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/range-bays.jpg" alt="Elevated hitting mats at Big Moose Driving Range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon"><RangeIcon name="bays" /></div>
                                <h3 className="heading-md mt-4">35 Elevated Mats</h3>
                                <p>Spacious elevated hitting stations that simulate real fairway conditions for a true-to-course experience.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/feature-balls.svg" alt="Titleist and Callaway golf balls" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon"><RangeIcon name="balls" /></div>
                                <h3 className="heading-md mt-4">Titleist & Callaway Balls</h3>
                                <p>Practice with the same quality balls the pros use. Every bucket is loaded with premium non-restricting Titleist and Callaway balls.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/range-targets.jpg" alt="Distance targets on the driving range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon"><RangeIcon name="target" /></div>
                                <h3 className="heading-md mt-4">On-Range Targets</h3>
                                <p>Dial in your distances with clearly marked targets spread across the range to sharpen your accuracy.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/feature-food.svg" alt="Hotdog cart at the driving range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/hotdog-cart-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md mt-4">Hotdog Cart</h3>
                                <p>Grab a bite from our on-site hotdog cart. Available Friday-Sunday to fuel up your practice session.</p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/yard-games-mini-golf.jpg" alt="Mini golf and yard games at Big Moose Driving Range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/mini-golf-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md mt-4">Mini Golf</h3>
                                <p>Fun for the whole family! Tee off on our brand new mini golf course for just $5 per person. Putters and balls supplied.</p>
                            </div>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/golden-hour-range.jpg" alt="Grass hitting area at Big Moose Driving Range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon"><RangeIcon name="grass" /></div>
                                <h3 className="heading-md mt-4">Grass Range</h3>
                                <p>Hit off real grass on our dedicated grass range. Over 8 bays available, open Friday through Sunday.</p>
                            </div>
                        </div>

                        {/* Feature 7 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/putting-green.jpg" alt="Chipping and putting green at Big Moose Driving Range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/chipping-putting-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md mt-4">Chipping & Putting</h3>
                                <p>Dial in your short game at our dedicated chipping and putting area designed for all skill levels.</p>
                            </div>
                        </div>

                        {/* Feature 8 */}
                        <div className="feature-card reveal">
                            <div className="feature-card-img">
                                <Image src="/images/range/yard-games-mini-golf.jpg" alt="Yard games at Big Moose Driving Range" width={900} height={675} />
                            </div>
                            <div className="feature-card-body">
                                <div className="feature-icon">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/yard-games-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md mt-4">Yard Games</h3>
                                <p>Take a break from swinging and enjoy our complimentary yard games, free to play for all visitors.</p>
                            </div>
                        </div>
                    </div>

                    <div className="decision-cta reveal">
                        <div>
                            <h3>Want to try the range?</h3>
                            <p>Check bucket pricing first, then open directions when you are ready to head over.</p>
                        </div>
                        <div className="decision-cta-actions">
                            <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="facilities_after_features" className="btn btn-primary">
                                {ctaLinks.pricing.label}
                            </TrackedCta>
                            <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="facilities_after_features" className="btn btn-outline">
                                <i className="fa-solid fa-diamond-turn-right"></i> {ctaLinks.directions.label}
                            </TrackedCta>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Horizontal Scroll */}
            <section id="gallery" className="section gallery bg-secondary">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">The Range</h2>
                        <p className="text-lead">Take a look at our facility and see what makes Big Moose the go-to driving range in Edmonton.</p>
                    </div>
                </div>

                <div className="gallery-horizontal-wrap">
                    <div className="gallery-horizontal-track">
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/range-bays.jpg" alt="Range overview with hitting mats" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">01</span>
                                <span className="gallery-h-label">The Range</span>
                            </div>
                        </div>
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/putting-green.jpg" alt="Practice putting green" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">02</span>
                                <span className="gallery-h-label">Hitting Bays</span>
                            </div>
                        </div>
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/range-targets.jpg" alt="Open range with distance targets" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">03</span>
                                <span className="gallery-h-label">In Action</span>
                            </div>
                        </div>
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/yard-games-mini-golf.jpg" alt="Mini golf and yard games area" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">04</span>
                                <span className="gallery-h-label">Equipment</span>
                            </div>
                        </div>
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/golden-hour-range.jpg" alt="Golden hour view across the driving range" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">05</span>
                                <span className="gallery-h-label">Golden Hour</span>
                            </div>
                        </div>
                        <div className="gallery-h-item" data-lightbox>
                            <Image src="/images/range/entrance-sign.jpg" alt="Big Moose Driving Range entrance signage" width={1200} height={900} />
                            <div className="gallery-h-overlay">
                                <span className="gallery-h-number">06</span>
                                <span className="gallery-h-label">Entrance Sign</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-h-progress">
                        <div className="gallery-h-progress-bar"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
