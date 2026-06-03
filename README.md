
# Tanisha Verma — Personal Portfolio

A premium, minimal, editorial portfolio designed with a Swiss-style layout, featuring advanced horizontal scrolling, custom micro-animations, and full-stack project showcases.

---

## ✨ Design & Aesthetic Philosophy

This portfolio is inspired by minimalist Swiss design which focuses on readability, structured bento layout grids, and subtle, high-end motion design:
- **Color Palette**: Cream (`hsl(36, 28%, 94%)`) and Ink (`hsl(0, 0%, 6%)`) for a high-contrast editorial look.
- **Typography**: Editorial serif headers (*Instrument Serif*) combined with clean monospace descriptors (*DM Mono*) and sans-serif content text (*Inter*).
- **Motion**: Fluid animations using GSAP and Lenis to create a smooth, unified interactive feel.

---

## 🛠️ Tech Stack & Libraries

- **Core**: React.js 18 & TypeScript
- **Bundler & Tooling**: Vite, ESLint
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**:
  - [GSAP](https://gsap.com/) & ScrollTrigger (For pinning sections and horizontal timeline scrubbing)
  - [Lenis Scroll](https://lenis.darkroom.engineering/) (For global smooth-scrolling and page transition interception)
  - [Framer Motion](https://www.framer.com/motion/) (For interactive micro-interactions)
- **Icons**: Lucide React

---

## 🚀 Key Features

1. **Horizontal Scroll Work Section**: Pinned horizontal viewport track showcasing detailed project cards (Inventory Management, Job Tracker, Quiz Game, etc.) with Live Demo and Source Code links.
2. **Smooth Scroll Interception**: Configured Lenis click handler to animate section jumps smoothly instead of sudden, default browser jumps.
3. **Grouped Bento Capabilities Grid**: Visual categories for Web Dev, Database, DevOps, Authentication, and UI/UX design, featuring a custom highlighted **LeetCode card** showcasing a **1496 rating (Top 10% globally)**.
4. **Custom Interactive Cursor**: Magnetic call-to-actions, hover enlargement states, and custom cursor ring styling.
5. **SEO & Accessibility**: Structured headings, meta tag titles, and semantic HTML elements.

---


## 💻 Getting Started

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your machine. You can use either `npm` or `bun` package managers.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/tanishavermaaa/portfolio-tanisha.git
cd portfolio-tanisha
npm install
```

Running Locally
To launch the local development server:

```bash
npm run dev
```
The application will run on http://localhost:8080/.


Building for Production
To build the production bundle:

```bash
npm run build
```
This compiles TypeScript, bundles files using Vite, and outputs optimized assets to the dist/ folder.


