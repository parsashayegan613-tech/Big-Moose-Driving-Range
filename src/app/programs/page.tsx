import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Icon from '@/components/Icon';
import TrackedCta from '@/components/TrackedCta';
import { ctaLinks } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: "Programs & Teaching Pros",
    description: "Explore junior camp inquiries, school field trips, and teaching pros at Big Moose Driving Range in southwest Edmonton.",
    alternates: {
        canonical: "/programs",
    },
};

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
                                <span className="program-status-badge">Dates coming soon</span>
                                <div className="feature-icon mx-auto mb-4">
                                    <Image src="/images/icons/junior-camps-icon.png" alt="" width={96} height={96} className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md">Junior Camps</h3>
                                <p className="mb-4">Junior camps and youth practice sessions are being planned. Tell us you are interested and we will help route the inquiry.</p>
                                <TrackedCta href={ctaLinks.campInquiry.href} action={ctaLinks.campInquiry.action} placement="programs_junior_card" className="btn btn-primary w-full">
                                    {ctaLinks.campInquiry.label}
                                </TrackedCta>
                            </div>
                        </div>
                        <div className="feature-card reveal glass-card">
                            <div className="feature-card-body text-center py-10 w-full col-span-1">
                                <div className="feature-icon mx-auto mb-4">
                                    <Image src="/images/icons/field-trip-program-icon.png" alt="" width={96} height={96} className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md">Field Trip Program</h3>
                                <p className="mb-4">A curriculum-aligned Physical Education field trip for Grades 7-12, built around golf fundamentals, safety, and active outdoor learning.</p>
                                <TrackedCta href={ctaLinks.fieldTripEmail.href} action={ctaLinks.fieldTripEmail.action} placement="programs_field_trip_card" className="btn btn-primary w-full">
                                    {ctaLinks.fieldTripEmail.label}
                                </TrackedCta>
                            </div>
                        </div>
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

                    <div className="teaching-pro-grid">
                        <div className="teaching-pro-card reveal">
                            <div className="pro-photo-frame">
                                <Image src="/images/team/aaron-menor-headshot-square.png" alt="Aaron Menor" width={1000} height={1000} className="pro-photo-image" />
                            </div>
                            <div className="pro-card-body">
                                <span className="pro-role">Professional Golf Instructor</span>
                                <h3 className="heading-md">Aaron Menor</h3>
                                <p>Book one-on-one instruction for swing work, fundamentals, and structured practice support.</p>
                            </div>
                            <div className="pro-actions">
                                <TrackedCta href={ctaLinks.aaronMenorWebsite.href} action={ctaLinks.aaronMenorWebsite.action} placement="programs_teaching_pros" target="_blank" rel="noopener noreferrer" className="btn pro-link-btn">
                                    <Icon name="globe" /> {ctaLinks.aaronMenorWebsite.label}
                                </TrackedCta>
                                <TrackedCta href={ctaLinks.aaronMenorCall.href} action={ctaLinks.aaronMenorCall.action} placement="programs_teaching_pros" className="btn btn-primary">
                                    <Icon name="phone" /> {ctaLinks.aaronMenorCall.label}
                                </TrackedCta>
                            </div>
                        </div>

                        <div className="teaching-pro-card reveal">
                            <div className="pro-photo-frame">
                                <Image src="/images/team/cam-kyle-headshot-square.png" alt="Cam Kyle" width={1000} height={1000} className="pro-photo-image" />
                            </div>
                            <div className="pro-card-body">
                                <span className="pro-role">Swing Match Instructor</span>
                                <h3 className="heading-md">Cam Kyle</h3>
                                <p>Reach out for lesson availability, swing feedback, and practice planning.</p>
                            </div>
                            <div className="pro-actions">
                                <TrackedCta href={ctaLinks.camKyleSwingMatch.href} action={ctaLinks.camKyleSwingMatch.action} placement="programs_teaching_pros" target="_blank" rel="noopener noreferrer" className="btn pro-link-btn">
                                    <Icon name="globe" /> {ctaLinks.camKyleSwingMatch.label}
                                </TrackedCta>
                                <TrackedCta href={ctaLinks.camKyleEmail.href} action={ctaLinks.camKyleEmail.action} placement="programs_teaching_pros" className="btn btn-primary pro-email-btn">
                                    <Icon name="mail" /> {ctaLinks.camKyleEmail.label}
                                </TrackedCta>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="field-trips" className="section field-trip-section">
                <div className="container">
                    <div className="field-trip-cta reveal">
                        <div>
                            <h3>Ready to plan a field trip?</h3>
                            <p>Contact us with your school details, proposed dates, grade level, group size, and any accessibility or supervision questions.</p>
                        </div>
                        <div className="field-trip-actions">
                            <TrackedCta href={ctaLinks.fieldTripEmail.href} action={ctaLinks.fieldTripEmail.action} placement="field_trip_cta" className="btn btn-accent">
                                <Icon name="mail" /> {ctaLinks.fieldTripEmail.label}
                            </TrackedCta>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
