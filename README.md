# Avalon Banquet Arena — Luxury Website

[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-silver?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)](https://developer.mozilla.org/)
[![Booking Engine](https://img.shields.io/badge/Booking%20Engine-EventOS-059669?style=for-the-badge)](https://eos.silverfoxdynamics.com/p/avalon-marquees)

> **Avalon Banquet Arena — Truly Festive**  
> Islamabad's premier luxury marriage hall & event marquee venue situated on main G.T. Road, near Builders Mall, Islamabad, Pakistan.

---

## 🌟 Key Features & Architectural Design

- **Bespoke Haute Hospitality Aesthetic**: Engineered with dark midnight obsidian tones (`#0a0b0d`), polished chrome & silver accents (`#E2E8F0`, `#CBD5E1`), frosted glassmorphism cards, and typography powered by *Cormorant Garamond*, *Playfair Display*, and *Plus Jakarta Sans*.
- **Clean Extensionless Routing**: Clean directory indices (`/about/` and `/contact/`) for extensionless URLs on GitHub Pages.
- **Full-Bleed Cinematic Hero Videos**: Ultra-HD background videos hosted on Cloudinary streaming with dark gradients, smooth auto-play, `playsinline` scaling, and accessible pause/play toggle buttons across all pages:
  - `index.html` (Home Hero Video)
  - `about/index.html` (The Arena & Halls Hero Video)
  - `contact/index.html` (Reservations & Contact Hero Video)
- **Continuous Infinite Marquee Scroller**: High-speed ticker showcasing venue USPs (*600+ Guest Capacity • G.T. Road Location • 300+ Car Parking • Climate-Controlled Luxury Marquees • Bespoke Stage Decor • Live Catering & Royal Buffet*).
- **EventOS Booking System Integration**: Native support and CTAs for **EventOS — Event Management Software**, direct linking to `https://eos.silverfoxdynamics.com/p/avalon-marquees`.
- **Masonry Lightbox Gallery**: Fully interactive modal zoom for authentic high-resolution venue photos located in `images/`.

---

## 📁 Repository Structure

```text
F:\avalon-banquets-website/
├── index.html         # Homepage (Serves: https://<domain>/)
├── about/
│   └── index.html     # The Arena & Halls (Serves: https://<domain>/about/)
├── contact/
│   └── index.html     # Reservations & Location (Serves: https://<domain>/contact/)
├── css/
│   └── styles.css     # Luxury CSS Design System & Keyframe Animations
├── js/
│   └── main.js        # Lightbox, Video Controls, EventOS & Form Handlers
├── images/            # Authentic Local Venue Photos
├── favicon.svg        # Branded Vector Favicon
└── README.md          # Setup & Deployment Documentation
```

---

## 🚀 Local Testing & Preview

Since this project requires zero build steps, you can run and view the site locally in any browser:

1. Launch a lightweight HTTP server (e.g. Python HTTP server or VS Code Live Server):

```bash
python -m http.server 8000
```

2. Visit `http://localhost:8000` in your web browser.

---

## 📞 Venue Contact Details

- **Venue Name**: Avalon Banquet Arena
- **Location**: Near Builders Mall, G.T. Road, Islamabad, Pakistan
- **Phone / Reservations**: +92 323 5372222 / +92 322 5003477
- **Visiting Hours**: Daily 11:00 AM – 8:00 PM
- **Management System**: EventOS Venue Booking Platform
