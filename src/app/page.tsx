import React from 'react';
import type { Metadata } from 'next';
import HeroBackground from '@/components/HeroBackground';
import RangeIcon from '@/components/RangeIcon';
import TrackedCta from '@/components/TrackedCta';
import { ctaLinks, siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: "Big Moose Driving Range | Edmonton Golf Practice Facility",
    description: "Practice at Big Moose Driving Range in southwest Edmonton with 35 elevated mats, Titleist and Callaway balls, range targets, mini golf, and affordable buckets.",
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    const marqueeItems = [
        "Drive Further",
        "Hit Better",
        "Play More",
        "35 Elevated Mats",
        "Premium Titleist",
        "Open Daily",
    ];
    const reviews = [
        {
            author: "Cory Collins",
            initial: "C",
            time: "Google review",
            text: "Used to go to Golf Canada range but found the golf balls and mats getting pretty run down so tried this option out late last year and a handful of times this year. The owner and other staff are always super friendly and have been impressed with the quality of the range mats and balls.",
        },
        {
            author: "Maeve",
            initial: "M",
            time: "Google review",
            text: "Big Moose Driving Range is honestly a gem. The place is open, the mats are big and brand new, and you get a huge bucket of balls. They are always cleaning up, keeping the balls nice, and the staff are friendly.",
        },
        {
            author: "DDCL Home Improvement",
            initial: "D",
            time: "Google review",
            text: "Well this is a friendly driving range for all ages. There are spare golf clubs for people who do not have any especially for children. The staff is down to earth and willing to help you improve your technique. Great family environment.",
        },
        {
            author: "Ashley Jones",
            initial: "A",
            time: "10 months ago",
            text: "Amazing driving range! I messaged ahead and they said it would be ok for me to bring my pups - they love tagging along to golf courses - so that was a huge bonus for me! A large bucket of balls was super affordable and big enough for my boyfriend and I to share. Balls were high quality, brands like Calloway and Titleist, and in great shape!! Loved the targets to shoot at too! Another highlight was the great music that they played. Very fun vibes!! Overall, 10/10 experience and will be back lots this summer!",
        },
        {
            author: "Zayd Siddiqui",
            initial: "Z",
            time: "11 months ago",
            text: "Loved my experience here! Extremely great price for a large bucket and good-quality mats to swing on. I liked the targets out in the field that you can aim for. Extremely friendly staff who are helpful and knowledgeable - I even got some tips on my swing when I asked one of the staff members, which is not something I've had happen at any other ranges. 100% would recommend this place and will be coming back often!",
        },
        {
            author: "Rachel McFadden",
            initial: "R",
            time: "11 months ago",
            text: "This is THE driving range in south Edmonton! Lots of space, friendly staff, run by a family. Prices for buckets are incredibly fair. Family friendly and zero judgement for beginners and experts alike!",
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <header id="hero" className="hero">
                <HeroBackground />
                <div className="hero-overlay"></div>

                {/* Floating Glass Elements & Particles */}
                <div className="hero-particles">
                    <div className="glass-floating-card glass-card-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/icons/elevated-mats-icon.png" alt="" className="glass-floating-icon-img" aria-hidden="true" />
                        <div>
                            <strong>35 Bays</strong>
                            <span>Open Now</span>
                        </div>
                    </div>
                    <div className="glass-floating-card glass-card-2">
                        <RangeIcon name="balls" />
                        <div>
                            <strong>Premium Balls</strong>
                            <span>Titleist & Callaway</span>
                        </div>
                    </div>
                    <div className="glass-floating-card glass-card-3">
                        <RangeIcon name="target" />
                        <div>
                            <strong>Range Targets</strong>
                            <span>Marked distances</span>
                        </div>
                    </div>
                    <div className="glass-floating-card glass-card-4">
                        <RangeIcon name="miniGolf" />
                        <div>
                            <strong>Mini Golf</strong>
                            <span>Stay & play</span>
                        </div>
                    </div>
                    {/* Ambient Dust Particles */}
                    <div className="ambient-particle p-1"></div>
                    <div className="ambient-particle p-2"></div>
                    <div className="ambient-particle p-3"></div>
                    <div className="ambient-particle p-4"></div>
                    <div className="ambient-particle p-5"></div>
                </div>

                <div className="container hero-content text-center reveal active">
                    <div className="hero-badges">
                        <span className="badge premium-badge">
                            <i className="fa-solid fa-clock"></i> Open today: 10 AM - sunset
                        </span>
                        <span className="badge hero-location-badge">
                            <i className="fa-solid fa-location-dot"></i> Southwest Edmonton
                        </span>
                    </div>

                    <h1 className="heading-xl hero-title split-text-animate">
                        <span className="hero-title-line"><span className="word">Edmonton</span> <span className="word">Driving</span></span> <br />
                        <span className="text-accent word">Range</span> <span className="word">With</span> <span className="word">35</span> <span className="word">Mats</span>
                    </h1>

                    <p className="text-lead hero-subtitle">
                        Practice in southwest Edmonton with elevated mats, premium Titleist and Callaway balls, range targets, mini golf, and a relaxed family-friendly setup.
                    </p>

                    <div className="hero-actions">
                        <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="home_hero" className="btn btn-primary btn-lg">
                            {ctaLinks.pricing.label} <i className="fa-solid fa-arrow-right"></i>
                        </TrackedCta>
                        <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="home_hero" className="btn btn-outline btn-lg">
                            {ctaLinks.directions.label}
                        </TrackedCta>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <div className="scroll-line"></div>
                </div>
            </header>

            <section className="mobile-hero-feature-grid" aria-label="Range highlights">
                <div className="mobile-hero-feature">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/icons/elevated-mats-icon.png" alt="" aria-hidden="true" />
                    <div>
                        <strong>35 Bays</strong>
                        <span>Open now</span>
                    </div>
                </div>
                <div className="mobile-hero-feature">
                    <RangeIcon name="balls" />
                    <div>
                        <strong>Premium Balls</strong>
                        <span>Titleist & Callaway</span>
                    </div>
                </div>
                <div className="mobile-hero-feature">
                    <RangeIcon name="target" />
                    <div>
                        <strong>Targets</strong>
                        <span>Marked distances</span>
                    </div>
                </div>
                <div className="mobile-hero-feature">
                    <RangeIcon name="miniGolf" />
                    <div>
                        <strong>Mini Golf</strong>
                        <span>Stay & play</span>
                    </div>
                </div>
            </section>

            {/* Marquee Ticker */}
            <div className="marquee-section">
                <div className="marquee-track">
                    {[0, 1, 2, 3].map((groupIndex) => (
                        <div className="marquee-content" aria-hidden={groupIndex > 0} key={groupIndex}>
                            {marqueeItems.map((item) => (
                                <React.Fragment key={`${groupIndex}-${item}`}>
                                    <span>{item}</span>
                                    <span className="marquee-dot"></span>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* First Visit Section */}
            <section className="section first-visit-section">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">First Time Here?</h2>
                        <p className="text-lead">Big Moose is built to be simple: show up, grab a bucket, and start swinging.</p>
                    </div>
                    <div className="visit-flow stagger-reveal">
                        <div className="visit-line" aria-hidden="true"></div>
                        <div className="visit-step reveal">
                            <span>01</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/icons/park-check-in-icon.png" alt="" className="visit-step-icon-img" aria-hidden="true" />
                            <h3>Park & Check In</h3>
                            <p>Head to the range shack, pick your bucket size, and ask about rentals if you need clubs.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>02</span>
                            <RangeIcon name="bucket" />
                            <h3>Grab Your Bucket</h3>
                            <p>Choose a small or large bucket, or save with a punch card if you plan to practice often.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>03</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/icons/elevated-mats-icon.png" alt="" className="visit-step-icon-img" aria-hidden="true" />
                            <h3>Pick a Mat</h3>
                            <p>Set up at an elevated mat, aim at the targets, and work through your bag at your pace.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>04</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/icons/stay-play-cornhole-icon.png" alt="" className="visit-step-icon-img" aria-hidden="true" />
                            <h3>Stay & Play</h3>
                            <p>Add mini golf, putting practice, yard games, or a lesson inquiry while you are here.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave Divider */}
            <div className="wave-divider wave-features">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,40 C360,100 720,0 1440,60 L1440,100 L0,100 Z" fill="var(--clr-secondary)" />
                </svg>
            </div>

            {/* Testimonials Section - Carousel */}
            <section id="testimonials" className="section testimonials bg-secondary">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">What Golfers Say</h2>
                        <p className="text-lead">Don&apos;t just take our word for it. Here&apos;s what the community has to say about Big Moose.</p>
                    </div>

                    <div className="testimonial-carousel reveal">
                        <div className="testimonial-carousel-track">
                            {reviews.map((review, index) => (
                                <a
                                    href={siteConfig.googleReviewsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="testimonial-card google-review-card"
                                    data-testimonial={index}
                                    aria-label={`Open Big Moose Driving Range Google reviews: ${review.author}`}
                                    key={review.author}
                                >
                                    <div className="google-review-topline">
                                        <div className="google-reviewer">
                                            <div className="testimonial-avatar">{review.initial}</div>
                                            <div>
                                                <h4>{review.author}</h4>
                                                <p>{review.time}</p>
                                            </div>
                                        </div>
                                        <span className="google-wordmark" aria-label="Google">
                                            <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
                                        </span>
                                    </div>
                                    <div className="testimonial-stars" aria-label="5 star rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="testimonial-text">&ldquo;{review.text}&rdquo;</p>
                                    <div className="google-review-footer">
                                        <span>Open on Google</span>
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="testimonial-controls">
                            <button className="testimonial-prev" aria-label="Previous review"><i className="fa-solid fa-arrow-left"></i></button>
                            <div className="testimonial-dots">
                                {reviews.map((review, index) => (
                                    <button
                                        className={`testimonial-dot${index === 0 ? ' active' : ''}`}
                                        data-index={index}
                                        aria-label={`Review ${index + 1}: ${review.author}`}
                                        key={review.author}
                                    ></button>
                                ))}
                            </div>
                            <button className="testimonial-next" aria-label="Next review"><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave Divider */}
            <div className="wave-divider wave-gallery">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{transform: "scaleY(-1)"}}>
                    <path d="M0,60 C480,0 960,100 1440,40 L1440,100 L0,100 Z" fill="var(--clr-secondary)" />
                </svg>
            </div>

            {/* Local SEO Section */}
            <section className="section local-seo-section">
                <div className="container">
                    <div className="local-seo-layout reveal">
                        <div className="local-copy">
                            <span className="badge premium-badge">Southwest Edmonton</span>
                            <h2 className="heading-lg text-reveal">Golf Practice Close to Home</h2>
                            <p className="text-lead">Big Moose serves golfers from Heritage Valley, Windermere, Jagare Ridge, Chappelle, Paisley, and nearby south Edmonton communities.</p>
                            <div className="neighborhood-chips" aria-label="Nearby communities">
                                <span>Heritage Valley</span>
                                <span>Windermere</span>
                                <span>Jagare Ridge</span>
                                <span>Chappelle</span>
                                <span>Paisley</span>
                            </div>
                            <div className="local-cta-actions">
                                <TrackedCta href={ctaLinks.directions.href} action={ctaLinks.directions.action} placement="home_local_section" className="btn btn-primary">
                                    <i className="fa-solid fa-diamond-turn-right"></i> {ctaLinks.directions.label}
                                </TrackedCta>
                                <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="home_local_section" className="btn btn-outline">
                                    <i className="fa-solid fa-phone"></i> {ctaLinks.call.label}
                                </TrackedCta>
                            </div>
                        </div>
                        <div className="local-highlights">
                            <div>
                                <RangeIcon name="bucket" />
                                <div>
                                    <h3>Driving Range Near Windermere</h3>
                                    <p>Stop by for a quick bucket after work or make it a full practice session with premium balls, targets, and elevated hitting mats.</p>
                                </div>
                            </div>
                            <div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/mini-golf-family-icon.png" alt="" className="local-highlight-icon" aria-hidden="true" />
                                <div>
                                    <h3>Mini Golf & Family Practice</h3>
                                    <p>Bring family or friends for mini golf, yard games, club rentals, and space for beginners to get comfortable.</p>
                                </div>
                            </div>
                            <div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/icons/teaching-pros-icon.png" alt="" className="local-highlight-icon" aria-hidden="true" />
                                <div>
                                    <h3>Golf Lessons & Teaching Pros</h3>
                                    <p>Connect with experienced instructors for swing help, private lessons, junior development, and structured practice support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram / Social Section */}
            <section className="section instagram-section">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">Follow the Moose</h2>
                        <p className="text-lead">Tag us <strong>@bigmoosedrivingrange</strong> and show us your best shots.</p>
                    </div>
                    <div className="instagram-grid reveal">
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/range-bays.jpg" alt="Elevated hitting bays at Big Moose Driving Range" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/yard-games-mini-golf.jpg" alt="Yard games and mini golf area at Big Moose" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/putting-green.jpg" alt="Putting green at Big Moose Driving Range" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/range-targets.jpg" alt="Marked range targets at Big Moose" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/golden-hour-range.jpg" alt="Big Moose driving range at golden hour" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href={siteConfig.social.instagram} className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/range/entrance-sign.jpg" alt="Big Moose Driving Range entrance sign" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
