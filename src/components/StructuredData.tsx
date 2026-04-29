import { siteConfig } from "@/lib/siteConfig";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.siteUrl}/#localbusiness`,
        "name": siteConfig.name,
        "url": `${siteConfig.siteUrl}/`,
        "description": "Big Moose Driving Range is a golf practice facility in southwest Edmonton with elevated mats, premium practice balls, targets, mini golf, grass range access, and teaching pros.",
        "telephone": siteConfig.phoneE164,
        "email": siteConfig.email,
        "hasMap": siteConfig.directionsUrl,
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.streetAddress,
          "addressLocality": siteConfig.city,
          "addressRegion": siteConfig.region,
          "postalCode": siteConfig.postalCode,
          "addressCountry": siteConfig.country
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "description": "Open daily from 10:00 AM until sunset, weather permitting."
          }
        ],
        "sameAs": [
          siteConfig.social.instagram,
          siteConfig.social.facebook
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        "url": `${siteConfig.siteUrl}/`,
        "name": siteConfig.name,
        "publisher": {
          "@id": `${siteConfig.siteUrl}/#localbusiness`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
