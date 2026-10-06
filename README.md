# Avalon Banquet Arena — Luxury Website

[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-gold?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)](https://developer.mozilla.org/)
[![Booking Engine](https://img.shields.io/badge/Booking%20Engine-EventOS-0ea5e9?style=for-the-badge)](https://eventos.pk/)

> **Avalon Banquet Arena — Truly Festive**  
> Islamabad's premier luxury marriage hall & event marquee venue situated on main G.T. Road, near Builders Mall, Islamabad, Pakistan.

---

## 🌟 Key Features & Architectural Design

- **Bespoke Haute Hospitality Aesthetic**: Engineered with dark midnight charcoal tones (`#0b0d11`), burnished gold hairline accents (`rgba(212, 175, 55, 0.25)`), glassmorphism cards, and typography powered by *Cormorant Garamond*, *Playfair Display*, and *Plus Jakarta Sans*.
- **Full-Bleed Cinematic Hero Videos**: Ultra-HD background videos hosted on Cloudinary streaming with dark gradients, smooth auto-play, `playsinline` scaling, and accessible pause/play toggle buttons across all pages:
  - `index.html` (Home Hero Video)
  - `about.html` (The Arena & Halls Hero Video)
  - `contact.html` (Reservations & Contact Hero Video)
- **Continuous Infinite Marquee Scroller**: High-speed ticker showcasing venue USPs (*600+ Guest Capacity • G.T. Road Location • 300+ Car Parking • Climate-Controlled Luxury Marquees • Bespoke Stage Decor • Live Catering & Royal Buffet*).
- **EventOS Booking System Integration**: Native support and CTAs for **EventOS — Event Management Software for Marriage Halls, Marquees & Banquet Venues in Pakistan**, featuring an interactive availability drawer widget and footer badges.
- **Masonry Lightbox Gallery**: Fully interactive modal zoom for authentic high-resolution venue photos located in `images/`.
- **Zero-Build Stack**: 100% clean relative paths (`href="about.html"`, `src="images/..."`) ensuring instant local preview and flawless GitHub Pages deployment with zero build tools or dependencies.

---

## 📁 Repository Structure

```text
F:\avalon-banquets-website/
├── index.html         # Homepage (Hero Video, USPs, Experience, EventOS Banner)
├── about.html         # The Arena & Halls (Architectural Specs, Royal Catering, Gallery)
├── contact.html       # Reservations & Location (EventOS Booking, Direct Form, Maps Embed)
├── css/
│   └── styles.css     # Luxury CSS Design System & Keyframe Animations
├── js/
│   └── main.js        # Lightbox, Video Controls, EventOS Drawer & Form Handlers
├── images/            # Authentic Local Venue Photos (Semantic & Original Filenames)
├── .gitignore         # Git ignore rules
└── README.md          # Setup & Deployment Documentation
```

---

## 🚀 Local Testing & Preview

Since this project requires zero build steps, you can run and view the site locally in any browser:

1. Open `index.html` directly in your browser or launch a lightweight HTTP server (e.g. VS Code Live Server or Python HTTP server):

```bash
# Using Python builtin server
python -m http.server 8000
```

2. Visit `http://localhost:8000` in your web browser.

---

## 📤 Step-by-Step GitHub Pages Deployment Guide

Follow these exact terminal steps to deploy the repository to GitHub Pages:

### 1. Initialize Git Repository & Commit Files

Open your terminal (PowerShell, Command Prompt, or Git Bash) inside `F:\avalon-banquets-website`:

```bash
cd F:\avalon-banquets-website

# Initialize Git (if not already initialized)
git init

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Avalon Banquet Arena luxury website with EventOS integration"
```

### 2. Create GitHub Repository & Link Remote

1. Go to [GitHub New Repository](https://github.com/new).
2. Set Repository Name to `avalon-banquets-website`.
3. Set Visibility to **Public** (required for free GitHub Pages).
4. Do **NOT** initialize with README or .gitignore (as we already have them).
5. Click **Create repository**.
6. Run the following commands in your local terminal (replace `YOUR-USERNAME` with your GitHub username):

```bash
# Rename default branch to main
git branch -M main

# Add remote origin
git remote add origin https://github.com/YOUR-USERNAME/avalon-banquets-website.git

# Push code to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Navigate to your GitHub Repository Settings (`https://github.com/YOUR-USERNAME/avalon-banquets-website/settings`).
2. Click on **Pages** in the left sidebar menu (under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and `/ (root)`.
4. Click **Save**.
5. GitHub will deploy your site in ~1–2 minutes. Your live site URL will be:
   `https://YOUR-USERNAME.github.io/avalon-banquets-website/`

---

## 📞 Venue Contact Details

- **Venue Name**: Avalon Banquet Arena
- **Location**: Near Builders Mall, G.T. Road, Islamabad, Pakistan
- **Phone / Reservations**: +92 323 5372222 / +92 322 5003477
- **Visiting Hours**: Daily 11:00 AM – 8:00 PM
- **Management System**: EventOS Venue Booking Platform
