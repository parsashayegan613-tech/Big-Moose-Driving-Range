import React from 'react';
import Link from 'next/link';

export default function ProgramsPage() {
    return (
        <main className="subpage-main">
            <div className="container subpage-header text-center">
                <span className="badge premium-badge mb-4">Learn & Play</span>
                <h1 className="heading-xl subpage-title text-reveal">Programs & Teaching Pros</h1>
                <p className="text-lead max-w-2xl mx-auto mt-6">Join us for special events, structured learning programs, and connect with our experienced PGA certified instructors.</p>
            </div>

            {/* Programs & Events Section */}
            <section id="programs" className="section programs pt-0">
                <div className="container">
                    <h2 className="heading-lg text-center mb-12">Programs & Events</h2>
                    <div className="features-grid stagger-reveal">
                        <div className="feature-card reveal glass-card">
                            <div className="feature-card-body text-center py-10 w-full col-span-1">
                                <div className="feature-icon mx-auto mb-4"><i className="fa-solid fa-children"></i></div>
                                <h3 className="heading-md">Junior Camps</h3>
                                <p className="mb-4">Junior camps and youth practice sessions are being planned. Tell us you are interested and we will help route the inquiry.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Ask About Camps</Link>
                            </div>
                        </div>
                        <div className="feature-card reveal glass-card">
                            <div className="feature-card-body text-center py-10 w-full col-span-1">
                                <div className="feature-icon mx-auto mb-4"><i className="fa-solid fa-school"></i></div>
                                <h3 className="heading-md">Field Trip Inquiries</h3>
                                <p className="mb-4">Planning a school group, team outing, or community event? Send the date, group size, and what you need.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Start an Inquiry</Link>
                            </div>
                        </div>
                    </div>
                    <div className="program-interest-panel reveal">
                        <div>
                            <span className="badge premium-badge">Coming Soon</span>
                            <h3 className="heading-md">Want updates when programs open?</h3>
                            <p>We can use the contact form for early interest until the full registration flow is ready.</p>
                        </div>
                        <Link href="/contact" className="btn btn-accent">Contact the Range</Link>
                    </div>
                </div>
            </section>

            {/* Teaching Pros Section */}
            <section id="teaching-pros" className="section teaching-pros bg-secondary">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2 className="heading-lg text-reveal">Teaching Pros</h2>
                        <p className="text-lead">Connect with our experienced instructors for personalized golf lessons.</p>
                    </div>

                    <div className="pricing-grid">
                        <div className="pricing-card reveal text-center">
                            <div className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl mx-auto mb-4">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <h3 className="heading-md">Aaron Menor</h3>
                            <p className="mb-4">Professional Golf Instructor</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href="https://menorgolf.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full"><i className="fa-solid fa-globe"></i> menorgolf.com</a>
                                <a href="tel:+17806601963" className="btn btn-primary w-full"><i className="fa-solid fa-phone"></i> (780) 660-1963</a>
                            </div>
                        </div>

                        <div className="pricing-card reveal text-center">
                            <div className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl mx-auto mb-4">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <h3 className="heading-md">Cam Kyle</h3>
                            <p className="mb-4">Swing Match Instructor</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href="mailto:cakyle8@gmail.com" className="btn btn-primary w-full mt-auto pro-email-btn"><i className="fa-solid fa-envelope"></i> cakyle8@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
