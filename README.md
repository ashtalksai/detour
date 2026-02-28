# Detour — Micro-Retirement Simulator

> Model the career nobody's parents had

Detour is an AI-powered financial planning tool for millennials who want to take career breaks, sabbaticals, or pivot careers without derailing their future.

![Detour](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## Features

- **Timeline Builder**: Drag-and-drop career phases, sabbaticals, and life events
- **Wealth Projections**: Monte Carlo simulations with 10,000+ scenarios
- **Scenario Comparison**: Compare multiple life paths side-by-side
- **AI Recommendations**: Get personalized suggestions for optimal break timing
- **Milestone Tracking**: Track progress toward your micro-retirement goals
- **Mobile Dashboard**: Plan on the go with real-time updates

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Landing page
│   ├── calculator/         # Main calculator tool
│   ├── dashboard/          # User dashboard
│   ├── pricing/            # Pricing page
│   └── api/health/         # Health check endpoint
├── components/
│   ├── calculator/         # Calculator components
│   │   ├── timeline-builder.tsx
│   │   ├── wealth-chart.tsx
│   │   └── scenario-cards.tsx
│   ├── landing/            # Landing page sections
│   └── layout/             # Navbar, footer
└── lib/
    └── utils.ts            # Utility functions
```

## Brand Colors

- **Deep Teal**: `#0F766E` (Primary)
- **Warm Coral**: `#F97316` (Accent/CTA)
- **Teal Light**: `#14B8A6` (Secondary)

## Environment Variables

```env
NEXT_PUBLIC_URL=https://detour.example.com
```

## License

MIT

---

Built with ❤️ by the ChimeStream team
