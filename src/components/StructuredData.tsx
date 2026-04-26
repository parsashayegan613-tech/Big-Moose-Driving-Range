export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.bigmoosedrivingrange.ca/#localbusiness",
        "name": "Big Moose Driving Range",
        "url": "https://www.bigmoosedrivingrange.ca/",
        "description": "Big Moose Driving Range is a golf practice facility in southwest Edmonton with elevated mats, premium practice balls, targets, mini golf, grass range access, and teaching pros.",
        "telephone": "+1-587-594-8874",
        "email": "bigmoosedrivingrange@gmail.com",
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "13415 41 Ave SW",
          "addressLocality": "Edmonton",
          "addressRegion": "AB",
          "postalCode": "T6W 1A7",
          "addressCountry": "CA"
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
          "https://www.instagram.com/bigmoosedrivingrange/",
          "https://www.facebook.com/profile.php?id=61571553647188"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.bigmoosedrivingrange.ca/#website",
        "url": "https://www.bigmoosedrivingrange.ca/",
        "name": "Big Moose Driving Range",
        "publisher": {
          "@id": "https://www.bigmoosedrivingrange.ca/#localbusiness"
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
