"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function getLabel(element: HTMLElement) {
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) {
    return ariaLabel;
  }

  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120);
}

export default function AnalyticsEvents() {
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

      track("CTA Click", {
        action: element.dataset.cta,
        placement: element.dataset.ctaPlacement,
        label: getLabel(element),
        href: element instanceof HTMLAnchorElement ? element.href : undefined,
        path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
