export const siteConfig = {
  name: "Big Moose Driving Range",
  phoneDisplay: "(587) 594-8874",
  phoneHref: "tel:+15875948874",
  email: "bigmoosedrivingrange@gmail.com",
  emailHref: "mailto:bigmoosedrivingrange@gmail.com",
  address: "13415 41 Ave SW, Edmonton, AB T6W 1A7",
  directionsUrl: "https://maps.google.com/?q=13415+41+Ave+SW+Edmonton+AB",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Big+Moose+Driving+Range+Edmonton+AB&t=&z=15&ie=UTF8&iwloc=&output=embed",
  pricingPath: "/pricing",
  contactPath: "/contact",
  locationPath: "/contact#location",
};

export const ctaLinks = {
  pricing: {
    href: siteConfig.pricingPath,
    label: "View Pricing",
    action: "view_pricing",
  },
  directions: {
    href: siteConfig.directionsUrl,
    label: "Get Directions",
    action: "get_directions",
  },
  call: {
    href: siteConfig.phoneHref,
    label: "Call Us",
    action: "call_us",
  },
  email: {
    href: siteConfig.emailHref,
    label: "Email Us",
    action: "email_us",
  },
  fieldTripEmail: {
    href: `${siteConfig.emailHref}?subject=Field%20Trip%20Inquiry%20-%20Big%20Moose%20Driving%20Range`,
    label: "Email Inquiry",
    action: "email_field_trip_inquiry",
  },
  campInquiry: {
    href: `${siteConfig.contactPath}?subject=Junior%20Camp%20Inquiry#contact`,
    label: "Ask About Camps",
    action: "ask_about_camps",
  },
};

export type CtaAction = typeof ctaLinks[keyof typeof ctaLinks]["action"];

export function ctaTracking(action: CtaAction, placement: string) {
  return {
    "data-cta": action,
    "data-cta-placement": placement,
  };
}
