# 🚀 THE MAHASHA - Training & Development Platform

A modern, high-performance, and fully responsive website built for a premium tech training and software development agency. Inspired by modern SaaS landing pages, featuring dark mode UI, glassmorphism, and smooth scroll animations.

---

## 📸 Previews

### Hero Section
> Animated background glows, gradient text, and animated stat counters.
![Hero Section](./public/screenshots/hero.png)

### Services & Products
> Interactive cards with hover effects, custom SVGs, and glassmorphism.
![Services Section](./public/screenshots/services.png)

*(Note: Add your actual screenshot images to the `public/screenshots/` folder to display them here)*

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** Custom CSS Keyframes & Intersection Observer API
- **Architecture:** Component-based, highly modular

---

## ✨ Key Features

- **🎨 Modern Dark Theme:** Deep dark backgrounds with vibrant purple and pink gradient accents.
- **🪄 Scroll Animations:** Custom `ScrollReveal` component that animates elements as they enter the viewport.
- **🔢 Animated Counters:** Numbers that count up automatically when scrolled into view.
- **📱 Responsive Design:** Flawless experience across Mobile, Tablet, and Desktop.
- **🧭 Interactive Navigation:** Sticky glass-effect navbar with dropdown menus and a mobile hamburger menu.
- **♾️ Infinite Marquee:** Smooth continuous scrolling ticker for technology logos.
- **🧩 Reusable Components:** Clean, maintainable code structure separated into logical components.

---

## 📁 Project Structure

```text
the-mahasha/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Tailwind & Custom CSS variables
│   │   ├── layout.tsx      # Root HTML layout
│   │   ├── page.tsx        # Main Landing Page
│   │   ├── projects/       # Projects Page
│   │   ├── saas/           # SaaS Products Page
│   │   ├── training/       # Training Page
│   │   └── youtube/        # YouTube Page
│   └── components/         # Reusable UI Components
│       ├── AnimatedCounter.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── LogoTicker.tsx
│       ├── Navbar.tsx
│       ├── Newsletter.tsx
│       ├── ProjectsShowcase.tsx
│       ├── SaasProducts.tsx
│       ├── ScrollReveal.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       ├── TrainingPrograms.tsx
│       └── YouTubeSection.tsx
🚀 Getting Started
Follow these instructions to run the project locally on your machine.

Prerequisites
Make sure you have Node.js installed (v18 or higher).

Installation
Clone or Open the Repository

Bash

cd the-mahasha
Install Dependencies

Bash

npm install
Run the Development Server

Bash

npm run dev
View the Website
Open http://localhost:3000 with your browser to see the result.


Copyright © 2026 THE MAHASHA. All rights reserved.
