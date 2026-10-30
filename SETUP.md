# Daycare Insurance starter site

This is a static, bilingual two-page starter site for a daycare insurance business. The contact form UI is present, but message delivery is intentionally paused until a working backend/provider is configured.

## Before launch

The previously configured FormSubmit relay is currently showing a Cloudflare host error. The site no longer claims that inquiries can be delivered: submitting the form is blocked with an explicit bilingual unavailable message.

A static site cannot deliver email by itself. To restore delivery, connect a working provider (for example a verified Formspree form or a small server-side endpoint) and configure the private destination inbox there. This requires an account/provider setup step and should be tested with a real inquiry after activation. Do not re-enable a provider until its service status and delivery are confirmed.

Before publishing, add the final privacy notice, consent wording, and any required licensing disclosure. The site currently uses the neutral label “Daycare Insurance” / “Assurance garderies” until a business name is chosen. The form collects daycare name, contact person, email, phone, preferred language, preferred contact time, and optional notes.

## Remaining owner content questions

1. Is the owner an agent, broker, agency, or another type of insurance professional? What exact license/disclosure wording is required?
2. How quickly should someone expect a response after submitting the form?
3. What privacy notice, consent wording, and legal disclaimers are required?
4. When ready, what business name should replace the neutral label?

## Static upload checklist

Upload the entire folder as a static site, preserving `index.html`, `contact.html`, `styles.css`, `script.js`, `logo.svg`, and any `assets` folder. The local preview URL (`http://127.0.0.1:4173`) only works on this computer; a public URL requires a static host such as GitHub Pages, Netlify, Vercel, or another web host. After a backend/provider is configured, test the contact form on the public URL with a controlled real inquiry.
