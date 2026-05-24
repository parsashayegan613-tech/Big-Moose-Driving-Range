"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TrackedCta from './TrackedCta';
import Icon from './Icon';
import { ctaLinks } from '@/lib/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const menu = mobileMenuRef.current;
    const menuButton = menuButtonRef.current;
    const previousActiveElement = document.activeElement;
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");
    const backgroundElements = Array.from(document.body.children).filter(
      (element) => element !== menu,
    );
    const focusCloseButton = () => {
      closeButtonRef.current?.focus({ preventScroll: true });
    };
    const focusFrame = window.requestAnimationFrame(focusCloseButton);
    const focusTimer = window.setTimeout(focusCloseButton, 100);

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.setAttribute("aria-hidden", "true");
      element.setAttribute("inert", "");
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) {
        return;
      }

      const focusableElements = Array.from(
        menu.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.offsetParent !== null);

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!menu.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
      window.clearTimeout(focusTimer);
      backgroundElements.forEach((element) => {
        element.removeAttribute("aria-hidden");
        element.removeAttribute("inert");
      });

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      } else {
        menuButton?.focus();
      }
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((isOpen) => !isOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          <Link href="/" prefetch={false} className="logo" aria-label="Big Moose Driving Range home">
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
                  prefetch={false}
                  className={pathname === link.path ? 'nav-active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <TrackedCta href={ctaLinks.pricing.href} action={ctaLinks.pricing.action} placement="nav_desktop" className="btn btn-primary nav-cta">
              {ctaLinks.pricing.label}
            </TrackedCta>
          </div>

          <button
            ref={menuButtonRef}
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name="menu" />
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={mobileMenuOpen ? undefined : true}
      >
        <button ref={closeButtonRef} className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close Menu">
          <Icon name="x" />
        </button>
        <div className="mobile-menu-content">
          <Link href="/" prefetch={false} className="mobile-logo" onClick={closeMobileMenu} aria-label="Big Moose Driving Range home">
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
                  prefetch={false}
                  onClick={closeMobileMenu}
                  className={pathname === link.path ? 'text-primary' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <TrackedCta href={ctaLinks.call.href} action={ctaLinks.call.action} placement="mobile_menu" className="btn btn-primary btn-lg mobile-menu-cta">
            <Icon name="phone" /> {ctaLinks.call.label}
          </TrackedCta>
        </div>
      </div>
    </>
  );
}
