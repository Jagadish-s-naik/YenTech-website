<div align="center">

  <img src="./public/icon.svg" alt="YenTech Logo" width="120" height="120" />

  # ⚡ YenTech Official Website

  **The Official Digital Platform for YenTech — Technical Club of Yenepoya (Deemed to be University)**

  [![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
  [![pnpm](https://img.shields.io/badge/pnpm-Package_Manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

  [Explore Website](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Club Domains](#-technical-domains) • [Core Team](#-leadership--core-team)

</div>

---

## 📌 About YenTech

**YenTech** is the flagship student-run technical club of **Yenepoya (Deemed to be University)** and **Yenepoya School of Engineering and Technology (YSET)**. We foster an innovative, hands-on learning ecosystem where students collaborate on real-world projects, compete in national hackathons, explore emerging technologies, and build impactful software solutions.

This repository powers the **official portal of YenTech**, designed to provide students, faculty, and industry partners with access to club events, student projects, technical blogs, and membership initiatives.

---

## 🌟 Key Features

- 🚀 **Interactive Landing Page**: Modern UI featuring GSAP smooth-scroll animation contexts, custom brand gradients (`#0CBAA6` primary teal & `#D9FB02` secondary lime), and hero highlights.
- 🏆 **Flagship Events & Hackathons**: Portals for major events such as **OpenLoop National Hackathon** and **Project Sankalp Code4Change**, complete with video embeds, press coverage, and registration details.
- 💻 **Student Project Portfolio**: Showcasing web applications, AI models, cybersecurity toolkits, and open-source contributions built by YenTech members.
- 📚 **Tech Blog & Knowledge Hub**: Technical articles, tutorials, and event write-ups authored by student domain leads.
- 👥 **Team & Domain Directory**: Showcasing the core leadership team, domain leads (Web Dev, AI/ML, Cyber Security, Design), and organizing committee.
- 🌓 **Dynamic Theme Toggling**: Seamless light/dark mode experience built with `next-themes`.
- ⚡ **Lightning Fast Performance**: Next.js 16 App Router optimized with Turbopack for instant page transitions and server-side performance.

---

## 🌐 Technical Domains

YenTech operates across key technology verticals:

| Domain | Focus Areas |
| :--- | :--- |
| 🌐 **Web Development** | Full-stack web apps, Next.js, React, modern UI/UX design, cloud deployment |
| 🤖 **Artificial Intelligence & ML** | Data science, machine learning models, computer vision, NLP, AI solutions |
| 🛡️ **Cyber Security** | Network security, ethical hacking, CTF challenges, secure coding practices |
| 🎨 **Graphic Design & Media** | UI/UX prototyping, event branding, digital graphics, promotional media |

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` |
| **Animations** | [GSAP 3.15](https://greensock.com/gsap/) (GreenSock Animation Platform) |
| **Icons & UI Primitives** | [Lucide React](https://lucide.dev/), `@base-ui/react`, Shadcn UI primitives |
| **Theme System** | `next-themes` |
| **Package Manager** | `pnpm` |

---

## 📂 Project Architecture

```text
YenTech-website/
├── app/                  # Next.js App Router
│   ├── about/            # About YenTech & mission statement
│   ├── blog/             # Technical blogs & articles
│   ├── events/           # Hackathons, workshops & tech talks
│   ├── projects/         # Student project showcase
│   ├── layout.tsx        # Root layout & providers
│   ├── page.tsx          # Homepage with interactive components
│   └── globals.css       # Global styles & Tailwind v4 config
├── components/           # UI Components
│   ├── icons/            # Brand & UI SVG icons
│   ├── layout/           # Navbar, Footer, Section containers
│   ├── shared/           # Reusable UI widgets & cards
│   ├── ui/               # Base component primitives
│   └── theme-toggle.tsx  # Dark/Light mode theme switch
├── data/                 # Data Layer
│   ├── events.ts         # Hackathon & event catalog data
│   ├── projects.ts       # Member project repository data
│   └── team.ts           # Core team & domain leads registry
├── lib/                  # Utility functions & helpers
├── types/                # TypeScript interfaces
├── public/               # Static graphics, logos & media
├── AGENTS.md             # Developer conventions & guidelines
└── package.json          # Project manifest & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: `v18.x` or higher
- **pnpm**: `v8.x` or higher (`npm i -g pnpm`)

### Installation & Setup

1. **Clone the official repository**:
   ```bash
   git clone https://github.com/Jagadish-s-naik/YenTech-website.git
   cd YenTech-website
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Launch the development server**:
   ```bash
   pnpm dev
   ```

4. **Access the platform**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📜 Available Development Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `pnpm dev` | Starts local server with Turbopack fast refresh |
| **Build** | `pnpm build` | Compiles optimized production build |
| **Start** | `pnpm start` | Runs the compiled production server |
| **Lint** | `pnpm lint` | Runs ESLint across the codebase |
| **Format** | `pnpm format` | Formats all source files with Prettier |

> ⚠️ **Developer Note:** Run `pnpm lint` and `pnpm format` before opening pull requests to ensure strict adherence to project standards.

---

## 👥 Leadership & Core Team

The YenTech initiative is led by dedicated student leaders and mentors at Yenepoya:

- **President**: Radhesh Pai
- **Vice President**: Muhammed Shameer
- **Secretary**: Keerthana
- **Media Head**: Safwan M
- **Program Manager**: Rinu Manoj
- **Web Development Leads**: Jagadish Naik, Ashwin Nethan
- **AI / ML Leads**: Dhanush Shenoy, Ashwin R
- **Cyber Security Lead**: Fadi Subair
- **Design Leads**: Anand M, Sana Zainaba

---

## 🤝 Contributing to YenTech

We welcome contributions from YenTech members, students, and open-source enthusiasts!

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes adhering to conventional commit messages (`git commit -m 'feat: add event registration card'`).
4. Run `pnpm format && pnpm lint` to pass all checks.
5. Push to your branch (`git push origin feature/AmazingFeature`).
6. Submit a Pull Request for review by the Web Dev team.

---

## 📄 License & Ownership

Copyright © 2026 **YenTech Technical Club**, Yenepoya (Deemed to be University).  
All rights reserved. Designed & built with ❤️ by the **YenTech Web Development Team**.
