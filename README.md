<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Oswald&size=40&pause=1000&color=FF6B35&center=true&vCenter=true&width=700&lines=ZOOM+%E2%80%94+Digital+Agency;Built+with+Next.js+%26+React;Creative+%7C+Fast+%7C+Modern" alt="Typing SVG" />

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-10.x-black?logo=next.js&logoColor=white&style=for-the-badge)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.1.0-brightgreen?style=for-the-badge)](#)

<br/>

> ✨ A **modern, high-performance digital agency website** built with Next.js — featuring 3 unique home layouts, animated counters, sliders, video popups, and a full-featured blog & portfolio system.

<br/>

[🚀 Live Demo](#) · [📖 Documentation](#getting-started) · [🐛 Report Bug](https://github.com/omalloud/digital-agency-zoom/issues) · [💡 Request Feature](https://github.com/omalloud/digital-agency-zoom/issues)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📄 Pages & Layouts](#-pages--layouts)
- [🚀 Getting Started](#-getting-started)
- [🧩 Key Components](#-key-components)
- [🤝 Contributing](#-contributing)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **3 Home Layouts** | Three distinct homepage designs to suit different styles |
| 🎠 **Swiper Sliders** | Smooth, touch-friendly hero & testimonial carousels |
| 🔢 **Animated Counters** | Fun-facts section with scroll-triggered number animations |
| 🎬 **Video Popup** | Embedded modal video player with one click |
| 📱 **Fully Responsive** | Mobile-first design with Bootstrap 4 grid |
| 📝 **Blog System** | 3 blog layouts + single post view with sidebar |
| 🗂 **Portfolio** | Showcase grid + detailed project view |
| 📬 **Contact Form** | Integrated contact form with Google Maps embed |
| 🔍 **Search Popup** | Site-wide search overlay |
| 🌙 **Dual Logo** | Light & dark logo support for different headers |

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| ⚛️ **Framework** | [Next.js 10](https://nextjs.org/) — SSR & Static Generation |
| 🖼 **UI Library** | [React 17](https://reactjs.org/) |
| 🎨 **Styling** | [Bootstrap 4](https://getbootstrap.com/) + Custom CSS |
| 🃏 **Carousel** | [Swiper 6](https://swiperjs.com/) |
| 🔢 **Counters** | [react-countup](https://github.com/glennreyes/react-countup) + [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) |
| 🎥 **Video** | [react-modal-video](https://github.com/appleple/react-modal-video) |
| 🔗 **Scroll** | [react-scroll](https://github.com/fisshy/react-scroll) |
| 🔤 **Font** | [Oswald](https://fonts.google.com/specimen/Oswald) |
| 🖼 **Image** | [next-images](https://github.com/twopluszero/next-images) |

</div>

---

## 📁 Project Structure

```
digital-agency-zoom/
├── 📂 assets/
│   ├── 🎨 css/          # Global stylesheets
│   ├── 🔤 fonts/        # Custom fonts
│   └── 🖼  images/      # All static image assets
│
├── 📂 components/       # 55+ reusable UI components
│   ├── slider-one.js    # Hero slider variant 1
│   ├── slider-two.js    # Hero slider variant 2
│   ├── slider-three.js  # Hero slider variant 3
│   ├── service-*.js     # Service section components
│   ├── blog-*.js        # Blog listing components
│   ├── portfolio-*.js   # Portfolio grid components
│   ├── header-*.js      # Header variants
│   ├── footer.js        # Site footer
│   └── ...              # Many more!
│
├── 📂 context/          # React context providers
├── 📂 data/
│   └── index.js         # Centralised site data & navigation
│
├── 📂 pages/            # Next.js file-based routing
│   ├── index.js         # Home layout 1
│   ├── index-2.js       # Home layout 2
│   ├── index-3.js       # Home layout 3
│   ├── about.js
│   ├── service.js / service-details.js
│   ├── portfolio.js / portfolio-details.js
│   ├── blog.js / blog-2.js / blog-3.js / blog-single.js
│   └── contact.js
│
├── 📂 public/           # Static assets served directly
├── next.config.js       # Next.js configuration
└── package.json         # Project dependencies
```

---

## 📄 Pages & Layouts

```
┌─────────────────────────────────────────────────────┐
│                     ZOOM Website                    │
├───────────────┬──────────────────┬──────────────────┤
│   Home 01     │    Home 02       │    Home 03       │
│  (index.js)   │  (index-2.js)    │  (index-3.js)   │
├───────────────┴──────────────────┴──────────────────┤
│  About   │  Services  │  Portfolio  │  Blog  │ Contact │
└──────────┴────────────┴─────────────┴────────┴─────────┘
                              │
          ┌───────────────────┼────────────────────┐
          │                   │                    │
    Blog Layout 1       Blog Layout 2        Blog Layout 3
    + Single Post       + Sidebar            + Grid View
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 12.x` — [Download](https://nodejs.org/)
- **npm** `>= 6.x` or **Yarn** `>= 1.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/omalloud/digital-agency-zoom.git
cd digital-agency-zoom

# 2. Install dependencies
npm install
# or
yarn install
```

### Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Production Build

```bash
# Build optimised production bundle
npm run build

# Start production server
npm run start
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| 🔧 Dev | `npm run dev` | Start hot-reloading dev server |
| 🏗 Build | `npm run build` | Create optimised production build |
| 🚀 Start | `npm run start` | Run production server |

---

## 🧩 Key Components

<details>
<summary>🎠 <strong>Sliders</strong></summary>

Three hero slider variants powered by **Swiper.js** with autoplay, pagination bullets, and navigation arrows. Each pairs with a matching homepage layout (`index.js`, `index-2.js`, `index-3.js`).

</details>

<details>
<summary>🔢 <strong>Fun Facts / Counters</strong></summary>

Uses `react-countup` combined with `react-visibility-sensor` to trigger animated number counts only when the section scrolls into view — no wasted animation time!

</details>

<details>
<summary>🎬 <strong>Video Popup</strong></summary>

`react-modal-video` provides an accessible, keyboard-dismissible modal that embeds a YouTube/Vimeo video without a third-party iframe loaded until the user clicks play.

</details>

<details>
<summary>📬 <strong>Contact & Map</strong></summary>

`contact-form.js` handles client-side form state while `google-map.js` renders an embedded Google Maps iframe. Contact information lives in `data/index.js` for easy updates.

</details>

<details>
<summary>🗂 <strong>Portfolio</strong></summary>

`portfolio-home.js` renders the homepage teaser grid; `portfolio-one.js` is the full listing page; `protfolio-details.js` shows a single project with `related-portfolio.js` for cross-links.

</details>

<details>
<summary>📝 <strong>Blog</strong></summary>

Three listing styles (`blog-one.js`, `blog-two.js`, `blog-three.js`) feed into a rich single-post page (`blog-details.js`) complete with sidebar, comments, and author card.

</details>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

<div align="center">

Made with ❤️ by [omalloud](https://github.com/omalloud)

⭐ If you find this project useful, please give it a star!

</div>
