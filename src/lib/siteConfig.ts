export const siteConfig = {
  name: "Big Moose Driving Range",
  siteUrl: "https://www.bigmoosedrivingrange.ca",
  phoneDisplay: "(587) 594-8874",
  phoneE164: "+1-587-594-8874",
  phoneHref: "tel:+15875948874",
  email: "bigmoosedrivingrange@gmail.com",
  emailHref: "mailto:bigmoosedrivingrange@gmail.com",
  address: "13415 41 Ave SW, Edmonton, AB T6Y 0H4",
  streetAddress: "13415 41 Ave SW",
  city: "Edmonton",
  region: "AB",
  postalCode: "T6Y 0H4",
  country: "CA",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Big%20Moose%20Driving%20Range%20Edmonton%20AB",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Big+Moose+Driving+Range+Edmonton+AB&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleReviewsUrl: "https://www.google.com/search?q=Big+Moose+Driving+Range+Edmonton&ludocid=5294932129446520832#lrd=0x53a01d00212498d3:0x497b60b7cd766800,1,,,,",
  social: {
    instagram: "https://www.instagram.com/bigmoosedrivingrange/",
    facebook: "https://www.facebook.com/profile.php?id=61571553647188",
  },
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
    href: siteConfig.locationPath,
    label: "Get Directions",
    action: "get_directions",
  },
  googleDirections: {
    href: siteConfig.directionsUrl,
    label: "Open in Google Maps",
    action: "open_google_maps",
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
