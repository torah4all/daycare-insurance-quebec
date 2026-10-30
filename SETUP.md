# Daycare Insurance starter site

This is a static, bilingual two-page starter site for a daycare insurance business. The contact form uses FormSubmit’s hosted relay and does not display the destination email address in the page content.

## Before launch

The form submits with a normal browser POST to FormSubmit and sends inquiries to the owner’s inbox. This avoids the AJAX/CORS failure that can appear on localhost or static hosting. On the first real submission, FormSubmit may send a one-time activation/confirmation message to the destination inbox. The owner must open that message and confirm the address before visitor inquiries are delivered. Test the form after activation.

The destination address is intentionally not printed as visible page text. Because a static website must name the hosted endpoint somewhere, its relay URL is present in the form configuration/source; this is not a public email link or mailto address. The site cannot verify delivery without sending a real inquiry. A non-sending request can confirm that the endpoint is reachable, but it cannot confirm activation or inbox delivery. For stronger protection, replace FormSubmit with a server-side endpoint or Formspree project endpoint later.

Before publishing, add the final privacy notice, consent wording, and any required licensing disclosure. The site currently uses the neutral label “Daycare Insurance” / “Assurance garderies” until a business name is chosen. The form collects daycare name, contact person, email, phone, preferred language, preferred contact time, and optional notes.

## Remaining owner content questions

1. Is the owner an agent, broker, agency, or another type of insurance professional? What exact license/disclosure wording is required?
2. How quickly should someone expect a response after submitting the form?
3. What privacy notice, consent wording, and legal disclaimers are required?
4. When ready, what business name should replace the neutral label?

## Static upload checklist

Upload the entire folder as a static site, preserving `index.html`, `contact.html`, `styles.css`, `script.js`, `logo.svg`, and any `assets` folder. The local preview URL (`http://127.0.0.1:4173`) only works on this computer; a public URL requires a static host such as GitHub Pages, Netlify, Vercel, or another web host. After publishing, test the contact form on the public URL and complete the FormSubmit activation email if it appears.
