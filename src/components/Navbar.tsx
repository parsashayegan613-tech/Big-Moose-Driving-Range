"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <Link href="/" className="logo">
            <Image
              src="/brand/bigmoose-logo-full.png"
              alt="Big Moose Driving Range"
              width={175}
              height={80}
              className="logo-lockup"
              priority
            />
          </Link>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={pathname === link.path ? 'nav-active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link href="/pricing" className="btn btn-primary nav-cta">View Pricing</Link>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close Menu">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="mobile-menu-content">
          <Link href="/" className="mobile-logo" onClick={closeMobileMenu}>
            <Image
              src="/brand/bigmoose-logo-words.png"
              alt="Big Moose Driving Range"
              width={260}
              height={130}
              className="mobile-wordmark"
            />
          </Link>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  onClick={closeMobileMenu}
                  className={pathname === link.path ? 'text-primary' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+15875948874" className="btn btn-primary btn-lg mobile-menu-cta">
            <i className="fa-solid fa-phone"></i> Call Us
          </a>
        </div>
      </div>
    </>
  );
}
