import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TrackedCta from '@/components/TrackedCta';
import { ctaLinks } from '@/lib/siteConfig';

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
                                <div className="feature-icon mx-auto mb-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/junior-camps-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
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
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/icons/field-trip-program-icon.png" alt="" className="feature-card-icon-img" aria-hidden="true" />
                                </div>
                                <h3 className="heading-md">Field Trip Program</h3>
                                <p className="mb-4">A curriculum-aligned Physical Education field trip for Grades 7-12, built around golf fundamentals, safety, and active outdoor learning.</p>
                                <Link href="#field-trips" className="btn btn-primary w-full">View Proposal</Link>
                            </div>
                        </div>
                    </div>
                    <div className="program-interest-panel reveal">
                        <div>
                            <span className="badge premium-badge">School Groups</span>
                            <h3 className="heading-md">Need approval materials for your school?</h3>
                            <p>The field trip proposal below includes curriculum alignment, safety measures, pricing, and the information teachers need to submit for approval.</p>
                        </div>
                        <Link href="#field-trips" className="btn btn-accent">Review Details</Link>
                    </div>
                </div>
            </section>

            {/* Field Trip Proposal */}
            <section id="field-trips" className="section field-trip-section">
                <div className="container">
                    <div className="section-header field-trip-header text-center reveal">
                        <span className="badge premium-badge mb-4">Physical Education</span>
                        <h2 className="heading-lg text-reveal">Field Trip Proposal</h2>
                        <p className="text-lead">A safe, inclusive, and engaging golf program designed to support Alberta Physical Education learning outcomes for Grades 7-12.</p>
                    </div>

                    <div className="field-trip-hero reveal">
                        <div>
                            <span className="cta-badge"><i className="fa-solid fa-flag"></i> Spring-Fall, weather dependent</span>
                            <h3>Big Moose Driving Range Physical Education Field Trip</h3>
                            <p>Students rotate through hitting bays and learn the fundamentals of golf, including grip, stance, balance, coordination, and swing technique. The experience is adaptable for different skill levels and focused on participation, effort, and confidence.</p>
                        </div>
                        <div className="field-trip-price">
                            <span>$15</span>
                            <p>per student</p>
                            <small>Includes one large bucket of balls and shared rental clubs if needed.</small>
                        </div>
                    </div>

                    <div className="field-trip-outcomes stagger-reveal">
                        <div className="field-trip-outcome reveal">
                            <span className="outcome-code" aria-hidden="true">PE</span>
                            <div>
                                <h3>Physical Literacy</h3>
                                <p>Students develop movement skills through grip, stance, posture, balance, hand-eye coordination, spatial awareness, and controlled swing patterns.</p>
                            </div>
                        </div>
                        <div className="field-trip-outcome reveal">
                            <span className="outcome-code" aria-hidden="true">HL</span>
                            <div>
                                <h3>Healthy Active Living</h3>
                                <p>Golf is introduced as a lifelong outdoor activity that supports regular movement, mental focus, and continued participation beyond school.</p>
                            </div>
                        </div>
                        <div className="field-trip-outcome reveal">
                            <span className="outcome-code" aria-hidden="true">ET</span>
                            <div>
                                <h3>Responsibility & Etiquette</h3>
                                <p>Students practice respect for peers, instructors, shared spaces, routines, patience, and safe conduct in a group setting.</p>
                            </div>
                        </div>
                        <div className="field-trip-outcome reveal">
                            <span className="outcome-code" aria-hidden="true">SF</span>
                            <div>
                                <h3>Safety & Risk Awareness</h3>
                                <p>Staff provide clear safety briefings around equipment handling, swing zones, physical boundaries, and supervised activity flow.</p>
                            </div>
                        </div>
                    </div>

                    <div className="field-trip-document reveal">
                        <div className="field-trip-panel">
                            <h3>Facility Information</h3>
                            <ul>
                                <li><strong>Facility:</strong> Big Moose Driving Range</li>
                                <li><strong>Address:</strong> 13415 41 Ave SW, Edmonton</li>
                                <li><strong>Season:</strong> Spring-Fall, weather dependent</li>
                                <li><strong>Supervision:</strong> On-site staff at all times</li>
                            </ul>
                        </div>
                        <div className="field-trip-panel">
                            <h3>Required Inquiry Details</h3>
                            <ul>
                                <li>School name and teacher / PE lead</li>
                                <li>Teacher email and phone number</li>
                                <li>Proposed grades, student count, and supervising staff count</li>
                                <li>Proposed date, arrival time, and departure time</li>
                            </ul>
                        </div>
                    </div>

                    <div className="field-trip-cta reveal">
                        <div>
                            <h3>Ready to plan a field trip?</h3>
                            <p>Contact us with your school details, proposed dates, grade level, group size, and any accessibility or supervision questions.</p>
                        </div>
                        <div className="field-trip-actions">
                            <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="field_trip_cta" className="btn btn-primary">
                                <i className="fa-solid fa-phone"></i> {ctaLinks.call.label}
                            </TrackedCta>
                            <TrackedCta href={ctaLinks.fieldTripEmail.href} action={ctaLinks.fieldTripEmail.action} placement="field_trip_cta" className="btn btn-accent">
                                <i className="fa-solid fa-envelope"></i> {ctaLinks.fieldTripEmail.label}
                            </TrackedCta>
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
                                <a href="https://menorgolf.com" target="_blank" rel="noopener noreferrer" className="btn pro-link-btn"><i className="fa-solid fa-globe"></i> menorgolf.com</a>
                                <a href="tel:+17806601963" className="btn btn-primary"><i className="fa-solid fa-phone"></i> (780) 660-1963</a>
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
                                <a href="https://app.swingmatchgolf.com/my/instructors/cameron-kyle-0103" target="_blank" rel="noopener noreferrer" className="btn pro-link-btn"><i className="fa-solid fa-globe"></i> Swing Match Profile</a>
                                <a href="mailto:cakyle8@gmail.com" className="btn btn-primary pro-email-btn"><i className="fa-solid fa-envelope"></i> cakyle8@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
