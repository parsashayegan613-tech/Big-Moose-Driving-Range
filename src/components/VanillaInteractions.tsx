/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VanillaInteractions() {
  const pathname = usePathname();

  // ==========================================
  // 1. GLOBAL EVENT LISTENERS (Run Once)
  // ==========================================
  useEffect(() => {
    if (typeof window === "undefined") return;

    // --- Back to Top ---
    const backToTop = document.querySelector(".back-to-top");
    const handleScrollTop = () => {
      if (window.scrollY > 600) backToTop?.classList.add("visible");
      else backToTop?.classList.remove("visible");
    };
    window.addEventListener("scroll", handleScrollTop, { passive: true });
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    backToTop?.addEventListener("click", scrollToTop);

    // --- Mobile CTA bar visibility ---
    const mobileCta = document.querySelector(".mobile-cta-bar") as HTMLElement;
    const handleScrollCta = () => {
        mobileCta?.classList.toggle("visible", window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScrollCta, { passive: true });

    // Cleanup global listeners
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      backToTop?.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScrollCta);
    };
  }, []);

  // ==========================================
  // 2. PAGE-SPECIFIC LISTENERS (Run on route change)
  // ==========================================
  useEffect(() => {
    if (typeof window === "undefined") return;

    let gsapInstance: any = null;
    let ScrollTriggerPlugin: any = null;
    let testimonialInterval: any = null;

    async function initLibraries() {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsapInstance = gsapModule.gsap;
      ScrollTriggerPlugin = scrollTriggerModule.ScrollTrigger;
      gsapInstance.registerPlugin(ScrollTriggerPlugin);

      gsapInstance.ticker.lagSmoothing(0);
      document.documentElement.classList.add("animations-ready");

      initGSAPAnimations();
    }

    function initGSAPAnimations() {
      // --- Scroll reveals ---
      const revealElements = document.querySelectorAll(".reveal:not(.active)");
      revealElements.forEach((el) => {
        gsapInstance.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      // --- Text reveal animations ---
      document.querySelectorAll(".text-reveal").forEach((el) => {
        const text = el.textContent || "";
        const words = text.split(/\s+/).filter(Boolean);
        el.innerHTML = words.map((w) => `<span class="tr-word"><span class="tr-word-inner">${w}</span></span>`).join(" ");

        gsapInstance.fromTo(
          el.querySelectorAll(".tr-word-inner"),
          { yPercent: 55, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.44,
            stagger: 0.025,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      // --- Section heading parallax ---
      document.querySelectorAll(".section-header .heading-lg:not(.text-reveal)").forEach((el) => {
        gsapInstance.fromTo(
          el,
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );
      });

      // --- Horizontal scroll gallery ---
      const galleryWrap = document.querySelector(".gallery-horizontal-wrap");
      const galleryTrack = document.querySelector(".gallery-horizontal-track");
      const galleryProgressBar = document.querySelector(".gallery-h-progress-bar");

      if (galleryWrap && galleryTrack && window.innerWidth > 768) {
        const totalScroll = galleryTrack.scrollWidth - window.innerWidth;

        gsapInstance.to(galleryTrack, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: galleryWrap,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self: any) => {
              if (galleryProgressBar) {
                (galleryProgressBar as HTMLElement).style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        document.querySelectorAll(".gallery-h-item").forEach((item) => {
          gsapInstance.fromTo(
            item,
            { opacity: 0.3, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.28,
              scrollTrigger: {
                trigger: item,
                containerAnimation: gsapInstance.getById?.("galleryScroll"),
                start: "left 80%",
                once: true,
              },
            }
          );
        });
      }

      // --- CTA banner parallax ---
      const ctaBg = document.querySelector(".cta-banner-bg");
      if (ctaBg) {
        gsapInstance.fromTo(
          ctaBg,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".cta-banner", start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );
      }

      // --- Feature cards stagger ---
      const featureCards = document.querySelectorAll(".feature-card");
      if (featureCards.length) {
        gsapInstance.fromTo(
          featureCards,
          { opacity: 0, y: 24, rotateX: 2 },
          {
            opacity: 1, y: 0, rotateX: 0, duration: 0.42, stagger: 0.06, ease: "power2.out",
            scrollTrigger: { trigger: ".features-grid", start: "top 90%", once: true },
          }
        );
      }

      // --- Stats counter ---
      const statNumbers = document.querySelectorAll(".stat-number");
      if (statNumbers.length) {
        ScrollTriggerPlugin.create({
          trigger: ".stats-row",
          start: "top 80%",
          once: true,
          onEnter: () => {
            statNumbers.forEach((counter) => {
              const target = parseInt(counter.getAttribute("data-target") || "0");
              const suffix = counter.getAttribute("data-suffix") || "";
              gsapInstance.to({ val: 0 }, {
                val: target, duration: 0.9, ease: "power2.out",
                onUpdate: function () { counter.textContent = Math.round(this.targets()[0].val) + suffix; },
              });
            });
          },
        });
      }

      // --- Pricing cards stagger ---
      const pricingCards = document.querySelectorAll(".pricing-card");
      if (pricingCards.length) {
        gsapInstance.fromTo(
          pricingCards,
          { opacity: 0, y: 22 },
          {
            opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
            scrollTrigger: { trigger: ".pricing-grid", start: "top 90%", once: true },
          }
        );
      }

      // --- Instagram grid stagger ---
      const instaItems = document.querySelectorAll(".insta-item");
      if (instaItems.length) {
        gsapInstance.fromTo(
          instaItems,
          { opacity: 0, scale: 0.94, rotateZ: 1 },
          {
            opacity: 1, scale: 1, rotateZ: 0, duration: 0.36, stagger: 0.04, ease: "power2.out",
            scrollTrigger: { trigger: ".instagram-grid", start: "top 90%", once: true },
          }
        );
      }
    }

    initLibraries();

    // --- FAQ Accordion ---
    const handleFaqClick = (e) => {
      const item = e.currentTarget.closest('.faq-item');
      if (!item) return;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((o) => {
        o.classList.remove("active");
        o.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });
      if (!isActive) {
        item.classList.add("active");
        e.currentTarget.setAttribute("aria-expanded", "true");
      }
    };
    document.querySelectorAll(".faq-question").forEach((btn) => btn.addEventListener("click", handleFaqClick));

    // --- Hero Parallax & Glass Cards ---
    const glassCard1 = document.querySelector(".glass-card-1") as HTMLElement;
    const glassCard2 = document.querySelector(".glass-card-2") as HTMLElement;
    const heroContent = document.querySelector(".hero-content") as HTMLElement;
    const handleHeroMove = (e: any) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      if (glassCard1) glassCard1.style.transform = `translate(${x}px, ${y}px)`;
      if (glassCard2) glassCard2.style.transform = `translate(${-x}px, ${-y}px)`;
      if (heroContent) heroContent.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
    const heroEl = document.querySelector(".hero");
    heroEl?.addEventListener("mousemove", handleHeroMove);

    // --- Magnetic Buttons ---
    const handleMagneticMove = (e: any) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    };
    const handleMagneticOut = (e: any) => {
      e.currentTarget.style.transform = "translate(0px, 0px) scale(1)";
    };
    document.querySelectorAll(".btn-primary, .btn-accent").forEach((btn) => {
      btn.addEventListener("mousemove", handleMagneticMove);
      btn.addEventListener("mouseout", handleMagneticOut);
    });

    // --- Button Ripple Effect ---
    const handleRipple = (e: any) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    document.querySelectorAll(".btn-primary, .btn-accent, .btn-outline").forEach((btn) => {
      btn.addEventListener("click", handleRipple);
    });

    // --- Card Glow & Tilt ---
    const handleCardMove = (e: any) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--glow-x", `${x}px`);
      card.style.setProperty("--glow-y", `${y}px`);

      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleCardLeave = (e: any) => {
      const card = e.currentTarget;
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.5s ease";
      setTimeout(() => (card.style.transition = ""), 500);
    };
    document.querySelectorAll(".feature-card, .pricing-card, .testimonial-card").forEach((card) => {
      card.addEventListener("mousemove", handleCardMove);
      card.addEventListener("mouseleave", handleCardLeave);
    });

    // --- Testimonial Carousel ---
    const testimonialCards = document.querySelectorAll("[data-testimonial]");
    const testimonialDots = document.querySelectorAll(".testimonial-dot");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    let currentSlide = 0;

    function goToSlide(index: number) {
      currentSlide = ((index % testimonialCards.length) + testimonialCards.length) % testimonialCards.length;
      testimonialCards.forEach((card, i) => {
        card.classList.toggle("active", i === currentSlide);
        card.classList.toggle("prev", i < currentSlide);
        card.classList.toggle("next-slide", i > currentSlide);
      });
      testimonialDots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
    }

    const handlePrev = () => goToSlide(currentSlide - 1);
    const handleNext = () => goToSlide(currentSlide + 1);
    const handleDotClick = (e: any) => goToSlide(parseInt(e.currentTarget.getAttribute("data-index") || "0"));

    if (testimonialCards.length) {
      goToSlide(0);
      prevBtn?.addEventListener("click", handlePrev);
      nextBtn?.addEventListener("click", handleNext);
      testimonialDots.forEach((dot) => dot.addEventListener("click", handleDotClick));

      testimonialInterval = setInterval(() => goToSlide(currentSlide + 1), 6000);

      const carouselEl = document.querySelector(".testimonial-carousel");
      const handleEnter = () => clearInterval(testimonialInterval);
      const handleLeave = () => { testimonialInterval = setInterval(() => goToSlide(currentSlide + 1), 6000); };
      carouselEl?.addEventListener("mouseenter", handleEnter);
      carouselEl?.addEventListener("mouseleave", handleLeave);

      let touchStartX = 0;
      const handleTouchStart = (e: any) => { touchStartX = e.touches[0].clientX; };
      const handleTouchEnd = (e: any) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(currentSlide + 1);
          else goToSlide(currentSlide - 1);
        }
      };
      carouselEl?.addEventListener("touchstart", handleTouchStart, { passive: true });
      carouselEl?.addEventListener("touchend", handleTouchEnd);
    }

    // --- Scroll indicator fade ---
    const scrollIndicator = document.querySelector(".hero-scroll-indicator") as HTMLElement;
    const handleScrollFade = () => {
      if (scrollIndicator) scrollIndicator.style.opacity = window.scrollY > 100 ? "0" : "1";
    };
    if (scrollIndicator) window.addEventListener("scroll", handleScrollFade, { passive: true });

    // --- Gallery Lightbox ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox?.querySelector(".lightbox-img") as HTMLImageElement;
    const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
    const galleryItems = document.querySelectorAll("[data-lightbox]");
    let currentIdx = 0;

    function openLightbox(i: number) {
      currentIdx = i;
      const item = galleryItems[i];
      if(!item) return;
      const img = item.querySelector("img") as HTMLImageElement;
      const label = item.querySelector(".gallery-h-label, .gallery-overlay span");
      if (lightboxImg) { lightboxImg.src = img.src; lightboxImg.alt = img.alt; }
      if (lightboxCaption) lightboxCaption.textContent = label?.textContent || "";
      lightbox?.classList.add("active");
      document.body.style.overflow = "hidden";
    }
    const closeLightbox = () => { lightbox?.classList.remove("active"); document.body.style.overflow = ""; };
    const nextImg = () => { currentIdx = (currentIdx + 1) % galleryItems.length; openLightbox(currentIdx); };
    const prevImg = () => { currentIdx = (currentIdx - 1 + galleryItems.length) % galleryItems.length; openLightbox(currentIdx); };

    // Attach to items
    const handleItemClick = (e: any) => {
      const idx = Array.from(galleryItems).indexOf(e.currentTarget);
      openLightbox(idx);
    };
    galleryItems.forEach((item) => item.addEventListener("click", handleItemClick));

    // Global Lightbox Controls
    const closeBtn = lightbox?.querySelector(".lightbox-close");
    const nextBtnLb = lightbox?.querySelector(".lightbox-next");
    const prevBtnLb = lightbox?.querySelector(".lightbox-prev");
    
    closeBtn?.addEventListener("click", closeLightbox);
    nextBtnLb?.addEventListener("click", nextImg);
    prevBtnLb?.addEventListener("click", prevImg);
    
    const handleLightboxBgClick = (e: any) => { if (e.target === lightbox) closeLightbox(); };
    lightbox?.addEventListener("click", handleLightboxBgClick);
    
    const handleKeydown = (e: any) => {
      if (!lightbox?.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    document.addEventListener("keydown", handleKeydown);

    // ==========================================
    // CLEANUP
    // ==========================================
    return () => {
      ScrollTriggerPlugin?.getAll().forEach((t: any) => t.kill());
      if (testimonialInterval) clearInterval(testimonialInterval);

      // Remove Document/Window specific listeners
      document.documentElement.classList.remove("animations-ready");
      document.removeEventListener("keydown", handleKeydown);
      if (scrollIndicator) window.removeEventListener("scroll", handleScrollFade);

      // Remove Lightbox specific listeners attached to persistent DOM
      closeBtn?.removeEventListener("click", closeLightbox);
      nextBtnLb?.removeEventListener("click", nextImg);
      prevBtnLb?.removeEventListener("click", prevImg);
      lightbox?.removeEventListener("click", handleLightboxBgClick);
    };
  }, [pathname]);

  return null;
}
