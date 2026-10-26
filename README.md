# Glow Beauty Parlour — React + Vite

A responsive, frontend-only beauty parlour website built with React, Vite, CSS and Lucide React. It has Home, Services, Gallery, Booking, About and Contact pages.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Extract the ZIP and open the `glow-beauty-parlour` folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

To test a production build:

```bash
npm run build
npm run preview
```

## Included features

- Responsive desktop, tablet and mobile layout.
- Hash-based page navigation (no extra routing library).
- Service cards, category filters, service search and sample prices.
- Gallery category filters.
- Appointment form with required-field validation and date validation.
- Saves appointment requests to browser `localStorage` under `glowAppointments`.
- Appointment summary and pre-filled WhatsApp request link.
- Contact form validation and WhatsApp message preparation.
- Reusable header, footer, page banner, service card, form field and testimonial components.

## Important configuration before publishing

Open `src/App.jsx` and update these sample details near the top:

```js
const salonPhone = "919876543210"; // country code + real WhatsApp number, digits only
const salonEmail = "hello@glowbeauty.example";
```

Also replace the sample phone, address, opening hours, prices, reviews and social links in the Contact and Footer components with your real business details.

### Frontend-only limitations

- Appointments saved to `localStorage` exist only in that browser on that device. They are not sent to a shared database and there is no salon admin dashboard.
- WhatsApp links open a pre-filled message. The customer must press Send in WhatsApp; the website cannot confirm that the message was delivered.
- The contact form does not email or store messages on a server. It validates the fields and can be continued in WhatsApp.
- The images and Google Fonts are loaded from external URLs, so an internet connection is needed for those assets.
- Sample reviews, offers, prices, phone number and address are placeholders. Update them before public use.

## Stack

- React
- Vite
- CSS
- Lucide React icons

No custom backend or database is included.
