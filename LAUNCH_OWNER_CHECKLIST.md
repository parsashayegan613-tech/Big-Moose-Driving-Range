# Launch Owner Checklist

These are the final launch and account-access tasks that cannot be completed only from the codebase. They require domain, Google, Vercel, analytics, social, or business-owner access.

## Domain And Vercel

- [ ] Confirm who controls `bigmoosedrivingrange.ca`.
- [ ] Add `bigmoosedrivingrange.ca` and `www.bigmoosedrivingrange.ca` to the Vercel project.
- [ ] Update DNS records with the domain provider using the values Vercel provides.
- [ ] Confirm HTTPS is active for both apex and `www`.
- [ ] Choose the preferred canonical domain, currently `https://www.bigmoosedrivingrange.ca`.
- [ ] Confirm the non-preferred domain redirects to the preferred domain.
- [ ] Confirm the temporary Vercel URL is not being used in public marketing once the domain is live.

## Google Search Console

- [ ] Log in with the Google account that should own the site property.
- [ ] Add a property for `https://www.bigmoosedrivingrange.ca` or a domain property for `bigmoosedrivingrange.ca`.
- [ ] Verify ownership through DNS, HTML tag, or another Google-approved method.
- [ ] Submit the sitemap: `https://www.bigmoosedrivingrange.ca/sitemap.xml`.
- [ ] Use URL Inspection to request indexing for:
  - `https://www.bigmoosedrivingrange.ca`
  - `https://www.bigmoosedrivingrange.ca/facilities`
  - `https://www.bigmoosedrivingrange.ca/pricing`
  - `https://www.bigmoosedrivingrange.ca/programs`
  - `https://www.bigmoosedrivingrange.ca/contact`
- [ ] Check Coverage / Pages after Google processes the sitemap.

## Google Business Profile

- [ ] Confirm the business profile is claimed by the owner.
- [ ] Set the website URL to `https://www.bigmoosedrivingrange.ca`.
- [ ] Confirm the name is exactly `Big Moose Driving Range`.
- [ ] Confirm address: `13415 41 Ave SW, Edmonton, AB T6Y 0H4`.
- [ ] Confirm phone: `(587) 594-8874`.
- [ ] Confirm email, if shown publicly: `bigmoosedrivingrange@gmail.com`.
- [ ] Confirm hours: open daily from `10:00 AM` to sunset, or update if Google requires fixed seasonal hours.
- [ ] Confirm primary category is appropriate, such as `Golf driving range`.
- [ ] Upload/approve final photos and logo.
- [ ] Confirm Google Maps opens the actual Big Moose listing after the website URL is updated.

## Analytics And Tracking

- [x] Use Vercel Analytics for pageview tracking and key click tracking.
- [x] Add code-side tracking for Pricing, Directions, Call, Email, Google Maps, Google review, contact-form email, and instructor-link clicks.
- [ ] Enable/confirm Vercel Analytics on the production Vercel project if the dashboard requires owner approval.
- [ ] Verify key click tracking after launch:
  - Pricing clicks
  - Directions clicks
  - Call clicks
  - Email clicks
  - Google review clicks
  - Instructor links
- [ ] Confirm analytics data is being received after the site goes live.

## Social Profiles

- [ ] Confirm Instagram profile access: `https://www.instagram.com/bigmoosedrivingrange/`.
- [ ] Confirm Facebook profile/page access: `https://www.facebook.com/profile.php?id=61571553647188`.
- [ ] Update both profiles with the final website URL.
- [ ] Confirm profile names, bios, logo/photo, address, phone, and email match the website.

## Business Details To Reconfirm Before Launch

- [ ] Confirm all pricing is final.
- [ ] Confirm senior discount is final.
- [ ] Confirm punch-card pricing is final.
- [ ] Confirm hours and seasonal opening details.
- [ ] Confirm food cart availability.
- [ ] Confirm grass range availability.
- [ ] Confirm instructor details:
  - Aaron Menor website and phone
  - Cam Kyle Swing Match profile and email
- [ ] Confirm all photos and icons are approved for public use.

## Post-Launch Manual QA

- [ ] Open the live domain on a real iPhone.
- [ ] Open the live domain on a real Android phone if available.
- [ ] Test Call, Pricing, Directions, Email, Google Maps, Google reviews, Instagram, and Facebook from the live domain.
- [ ] Search Google for `Big Moose Driving Range` after indexing and confirm the live domain appears correctly.
- [ ] Check Google Search Console for crawl/indexing errors after a few days.
