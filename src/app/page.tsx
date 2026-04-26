import React from 'react';
import HeroBackground from '@/components/HeroBackground';
import Link from 'next/link';

export default function Home() {
    const marqueeItems = [
        "Drive Further",
        "Hit Better",
        "Play More",
        "35 Elevated Mats",
        "Premium Titleist",
        "Open Daily",
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
                        <span className="range-mark mark-bays" aria-hidden="true"></span>
                        <div>
                            <strong>35 Bays</strong>
                            <span>Open Now</span>
                        </div>
                    </div>
                    <div className="glass-floating-card glass-card-2">
                        <span className="range-mark mark-balls" aria-hidden="true"></span>
                        <div>
                            <strong>Premium</strong>
                            <span>Titleist Balls</span>
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
                        <span className="word">Edmonton</span> <span className="word">Driving</span> <br />
                        <span className="text-accent word">Range</span> <span className="word">With</span> <span className="word">35</span> <span className="word">Mats</span>
                    </h1>

                    <p className="text-lead hero-subtitle">
                        Practice in southwest Edmonton with elevated mats, premium Titleist and Callaway balls, range targets, mini golf, and a relaxed family-friendly setup.
                    </p>

                    <div className="hero-actions">
                        <Link href="/pricing" className="btn btn-primary btn-lg">View Pricing <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link href="/contact" className="btn btn-outline btn-lg">Get Directions</Link>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <div className="scroll-line"></div>
                </div>
            </header>

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
                            <span className="range-mark mark-sign" aria-hidden="true"></span>
                            <h3>Park & Check In</h3>
                            <p>Head to the range shack, pick your bucket size, and ask about rentals if you need clubs.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>02</span>
                            <span className="range-mark mark-bucket" aria-hidden="true"></span>
                            <h3>Grab Your Bucket</h3>
                            <p>Choose a small or large bucket, or save with a punch card if you plan to practice often.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>03</span>
                            <span className="range-mark mark-mat" aria-hidden="true"></span>
                            <h3>Pick a Mat</h3>
                            <p>Set up at an elevated mat, aim at the targets, and work through your bag at your pace.</p>
                        </div>
                        <div className="visit-step reveal">
                            <span>04</span>
                            <span className="range-mark mark-flag" aria-hidden="true"></span>
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
                            <div className="testimonial-card" data-testimonial="0">
                                <div className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                <div className="testimonial-stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">&ldquo;Used to go to Golf Canada range but found the golf balls and mats getting pretty run down so tried this option out late last year and a handful of times this year. The owner and other staff are always super friendly and have been impressed with the quality of the range mats and balls.&rdquo;</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar"><i className="fa-solid fa-user"></i></div>
                                    <div>
                                        <h4>Cory Collins</h4>
                                        <p>Google Review</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card" data-testimonial="1">
                                <div className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                <div className="testimonial-stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">&ldquo;Big Moose Driving Range is honestly a gem. The place is open, the mats are big and brand new, and you get a huge bucket of balls. I came in the morning and saw the owner checking every mat and tee. They&apos;re always cleaning up, keeping the balls nice, and the staff are friendly... If you come often, the punch card is such a good deal.&rdquo;</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar"><i className="fa-solid fa-user"></i></div>
                                    <div>
                                        <h4>Maeve</h4>
                                        <p>Google Review</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card" data-testimonial="2">
                                <div className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                                <div className="testimonial-stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">&ldquo;Well this is a friendly driving range for all ages. There are spare golf clubs for people who do not have any especially for children. The staff is down to earth and willing to help to you improve your technique. Great family environment.&rdquo;</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar"><i className="fa-solid fa-user"></i></div>
                                    <div>
                                        <h4>DDCL Home Improvement</h4>
                                        <p>Google Review</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-controls">
                            <button className="testimonial-prev" aria-label="Previous review"><i className="fa-solid fa-arrow-left"></i></button>
                            <div className="testimonial-dots">
                                <button className="testimonial-dot active" data-index="0" aria-label="Review 1"></button>
                                <button className="testimonial-dot" data-index="1" aria-label="Review 2"></button>
                                <button className="testimonial-dot" data-index="2" aria-label="Review 3"></button>
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
                        </div>
                        <div className="local-highlights">
                            <div>
                                <span className="range-mark mark-bucket" aria-hidden="true"></span>
                                <div>
                                    <h3>Driving Range Near Windermere</h3>
                                    <p>Stop by for a quick bucket after work or make it a full practice session with premium balls, targets, and elevated hitting mats.</p>
                                </div>
                            </div>
                            <div>
                                <span className="range-mark mark-mini-golf" aria-hidden="true"></span>
                                <div>
                                    <h3>Mini Golf & Family Practice</h3>
                                    <p>Bring family or friends for mini golf, yard games, club rentals, and space for beginners to get comfortable.</p>
                                </div>
                            </div>
                            <div>
                                <span className="range-mark mark-swing" aria-hidden="true"></span>
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
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-1.svg" alt="Instagram post 1" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-2.svg" alt="Instagram post 2" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-3.svg" alt="Instagram post 3" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-4.svg" alt="Instagram post 4" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-5.svg" alt="Instagram post 5" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                        <a href="https://www.instagram.com/bigmoosedrivingrange/" className="insta-item" target="_blank" rel="noopener noreferrer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/insta-6.svg" alt="Instagram post 6" />
                            <div className="insta-overlay"><i className="fa-brands fa-instagram"></i></div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
