<div align="center">

<br />

# ✨ AI Prompt Gallery

**A premium, modern gallery for discovering and copying powerful AI prompts.**

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Shadcn UI.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

![AI Prompt Gallery Banner](https://placehold.co/1200x600/E9D5FF/4C1D95?text=AI+Prompt+Gallery&font=raleway)

</div>

---

## 📖 Overview

**AI Prompt Gallery** is a beautifully designed web application that lets you browse, search, filter, and copy high-quality AI prompts across multiple categories. From writing and coding to marketing and social media — find the perfect prompt to accelerate your AI workflow.

## ✨ Features

- 🔍 **Live Search** — Instantly filter prompts by title or description as you type
- 🗂️ **Category Filtering** — Browse prompts by category with an animated active-state pill indicator
- 📋 **One-Click Copy** — Copy any prompt directly to your clipboard
- 🔖 **Save Prompts** — Bookmark your favorite prompts for quick access
- 🎨 **Premium Design** — Soft pastel palette (lavender & pink) with glassmorphism card effects
- 🌊 **Smooth Animations** — Powered by Framer Motion with staggered scroll-in effects
- 📱 **Fully Responsive** — Mobile-first layout that works on any screen size

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework |
| **React 19** | UI Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS v4** | Styling |
| **Shadcn UI** | Component Primitives |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-prompt-gallery.git
   cd ai-prompt-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main entry page
│   ├── layout.tsx        # Root layout with font configuration
│   └── globals.css       # Global styles & custom pastel theme
└── components/
    ├── Navbar.tsx         # Top navigation bar
    ├── Hero.tsx           # Hero section with headline & CTA
    ├── Search.tsx         # Search bar component
    ├── CategoryTabs.tsx   # Animated category filter pills
    ├── PromptGallery.tsx  # Gallery grid with search & filter logic
    ├── PromptCard.tsx     # Individual prompt card with clipboard support
    └── ui/                # Shadcn UI primitives (Button, Card, Badge, Input)
```

## 🎨 Design System

The UI uses a custom pastel color palette defined using **OKLCH** color space variables:

| Token | Color | Usage |
|---|---|---|
| `--primary` | Vibrant Lavender | Buttons, active pills, headings |
| `--secondary` | Soft Pink | Accents, backgrounds |
| `--background` | Near White | Page background |
| `--foreground` | Deep Purple-Gray | Body text |

## 🗺️ Roadmap

- [ ] Backend integration (database for real prompts)
- [ ] User authentication & personal collections
- [ ] Prompt rating & community upvotes
- [ ] Dark mode support
- [ ] Submit your own prompts feature
- [ ] Prompt detail/preview page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ using Next.js & Tailwind CSS

</div>
