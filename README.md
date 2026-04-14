# Routinely

A personal habit and routine tracker — mobile-first, installable as a PWA on iPhone.

Build streaks, stay consistent, and track your habits with a clean, fast interface designed for daily use.

## Stack

- **React + Vite + TypeScript**
- **Tailwind CSS** — dark theme, mobile-first
- **Supabase** — auth + Postgres (RLS per user)
- **TanStack Query** — server state & caching
- **Zustand** — global client state
- **Vercel** — hosting

## Getting started

1. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
2. `npm install`
3. `npm run dev` → http://localhost:5173

## Features

- **Today View** — see habits due today, tap to complete, track daily progress
- **All Habits** — manage habits grouped by category, with streaks
- **Add / Edit Habit** — name, icon, color, frequency (daily / weekly / specific days)
- **Categories** — organise habits with emoji + color labels
- **Progress & Stats** — streaks, completion rates, weekly overview, calendar heatmap
- **Settings** — account management, data export
- **PWA** — installable from Safari on iPhone via Add to Home Screen

## Architecture

```
src/
  features/         # One folder per feature (today, habits, categories, stats, settings, auth)
  components/
    ui/             # Shared primitives (Button, Input, Modal, etc.)
    layout/         # App shell, BottomNav
  lib/              # Supabase client, React Query config, shared hooks
  types/            # Shared TypeScript types and enums
  styles/           # Global CSS (Tailwind + CSS vars)
```

All Supabase queries live in `src/lib/` as reusable hooks — never inline in components.
All feature code is self-contained under `src/features/[feature-name]/`.

## Database

| Table | Purpose |
|---|---|
| `habits` | User-defined habits with frequency, icon, color, category |
| `habit_categories` | Custom categories (name, color, emoji) |
| `habit_logs` | Completion records per habit per day |
| `streaks` | Cached current + longest streak per habit |

All tables use RLS — users only see their own data. Soft deletes via `deleted_at`.

## Build phases

- [x] Phase 1 — Project setup (Vite, React, Supabase, Tailwind, PWA config)
- [x] Phase 2 — Rename to Routinely, new type system, folder structure
- [ ] Phase 3 — Database setup (Supabase tables + RLS policies)
- [ ] Phase 4 — Today View
- [ ] Phase 5 — All Habits + Add/Edit Habit
- [ ] Phase 6 — Categories
- [ ] Phase 7 — Progress & Stats
- [ ] Phase 8 — Settings
- [ ] Phase 9 — PWA polish, empty states, animations
