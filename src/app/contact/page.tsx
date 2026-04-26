import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <main className="subpage-main">
            <div className="container subpage-header text-center">
                <span className="badge premium-badge mb-4">Get in Touch</span>
                <h1 className="heading-xl subpage-title text-reveal">Contact & Location</h1>
                <p className="text-lead max-w-2xl mx-auto mt-6">Have questions or want to inquire about the range? Send us a message or visit us in southwest Edmonton.</p>
            </div>

            {/* Contact Inquiry Section */}
            <section id="contact" className="section contact pt-0">
                <div className="container">
                    <div className="contact-form-card reveal">
                        <form action="mailto:bigmoosedrivingrange@gmail.com" method="GET" encType="text/plain" className="contact-form">
                            <div className="form-field">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="e.g. Group booking inquiry" className="form-input" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="body">Message</label>
                                <textarea id="body" name="body" rows={5} placeholder="How can we help you?" className="form-textarea" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary contact-submit"><i className="fa-solid fa-paper-plane"></i> Send via Email Client</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="location" className="section location bg-secondary">
                <div className="container">
                    <div className="location-wrapper">
                        {/* Info */}
                        <div className="location-info reveal">
                            <h2 className="heading-lg text-reveal">Visit Big Moose</h2>
                            <p className="text-lead mb-6">Conveniently located in southwest Edmonton with plenty of parking. Open daily from 10 AM until sunset.</p>

                            <div className="info-group">
                                <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                                <div>
                                    <h4>Hours of Operation</h4>
                                    <p>Open Daily: 10:00 AM &ndash; Sunset</p>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="info-icon"><i className="fa-solid fa-map-pin"></i></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>13415 41 Ave SW</p>
                                    <p>Edmonton, AB T6Y 0H4</p>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p><a href="tel:+15875948874">(587) 594-8874</a></p>
                                </div>
                            </div>

                            <div className="info-group">
                                <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p><a href="mailto:bigmoosedrivingrange@gmail.com">bigmoosedrivingrange@gmail.com</a></p>
                                </div>
                            </div>

                            <a href="https://maps.google.com/?q=13415+41+Ave+SW+Edmonton+AB" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                <i className="fa-solid fa-diamond-turn-right"></i> Get Directions
                            </a>
                        </div>

                        <div className="location-media reveal">
                            <div className="location-sign-photo">
                                <Image src="/images/range/entrance-sign.jpg" alt="Big Moose Driving Range entrance signage" width={900} height={675} />
                                <div className="location-sign-caption">
                                    <span>Look for the sign on 41 Ave SW</span>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="location-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=Big+Moose+Driving+Range+Edmonton+AB&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: 'inherit' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Big Moose Driving Range Location">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section faq">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">Frequently Asked</h2>
                        <p className="text-lead">Got questions? We&apos;ve got answers.</p>
                    </div>

                    <div className="faq-list reveal">
                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>What are your hours of operation?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>We are open daily from 10:00 AM until sunset, weather permitting. Hours may vary seasonally as sunset times change.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>Do you offer club rentals?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>Yes! We offer club rentals for $7.00. Please note that any broken rental clubs will be charged at $30.00.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>What&apos;s the senior discount?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>Seniors receive 30% off all bucket sizes. This discount applies at the point of sale — just let us know when purchasing your bucket.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>How do punch cards work?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>Punch cards are prepaid packages available for purchase at the range. Choose from 10 small buckets ($70), 10 large buckets ($125), or 20 large buckets ($200). Each visit, we punch your card — no expiry.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>Do you accept cash and card?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>We accept both! Paying with cash gets you a small discount — $10.00 for a small bucket (vs. $10.50) and $15.00 for a large bucket (vs. $15.50).</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <button className="faq-question" aria-expanded="false">
                                <span>Are you open when it rains?</span>
                                <span className="faq-icon" aria-hidden="true"></span>
                            </button>
                            <div className="faq-answer">
                                <p>We are generally open rain or shine, but may close during severe weather for safety. Check our socials or give us a call at (587) 594-8874 for real-time updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
