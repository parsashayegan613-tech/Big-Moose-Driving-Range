"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { gaEvent, pageview } from "@/lib/gtag";

function getLabel(element: HTMLElement) {
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) {
    return ariaLabel;
  }

  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120);
}

function getDestinationType(href: string | undefined) {
  if (!href) {
    return "button";
  }

  if (href.startsWith("tel:")) {
    return "phone";
  }

  if (href.startsWith("mailto:")) {
    return "email";
  }

  try {
    const url = new URL(href);
    return url.origin === window.location.origin ? "internal" : "external";
  } catch {
    return "unknown";
  }
}

export default function AnalyticsEvents() {
  const pathname = usePathname();
  const hasTrackedInitialPageview = useRef(false);

  useEffect(() => {
    const url = `${pathname}${window.location.search}`;

    if (!hasTrackedInitialPageview.current) {
      hasTrackedInitialPageview.current = true;
      return;
    }

    pageview(url);
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>("[data-cta]");
      if (!element) {
        return;
      }

      const label = getLabel(element);
      const href = element instanceof HTMLAnchorElement ? element.href : undefined;

      track("CTA Click", {
        action: element.dataset.cta,
        placement: element.dataset.ctaPlacement,
        label,
        href,
        path: window.location.pathname,
      });

      gaEvent("cta_clicked", {
        cta_action: element.dataset.cta,
        cta_placement: element.dataset.ctaPlacement,
        destination_type: getDestinationType(href),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
