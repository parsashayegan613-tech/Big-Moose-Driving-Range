export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-NHRCH1XJ03";

type GtagCommand = "config" | "event" | "js";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: GtagCommand,
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

export function pageview(url: string) {
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function gaEvent(eventName: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", eventName, params);
}
