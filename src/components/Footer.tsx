import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <Image
                    src="/brand/bigmoose-logo-full.png"
                    alt="Big Moose Driving Range"
                    width={320}
                    height={146}
                    className="footer-logo"
                />
                <p>The premier golf practice destination. Whether you&apos;re a seasoned pro or picking up a club for the first time, we have everything you need to improve your game.</p>
            </div>

            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/facilities">Facility Features</Link></li>
                    <li><Link href="/facilities#gallery">Gallery</Link></li>
                    <li><Link href="/contact#faq">FAQ</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="footer-social">
                <h4>Connect</h4>
                <div className="social-icons">
                    <a href="https://www.instagram.com/bigmoosedrivingrange/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61571553647188" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div className="container footer-bottom">
            <p>&copy; 2026 Big Moose Driving Range. All rights reserved.</p>
            <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
  );
}
