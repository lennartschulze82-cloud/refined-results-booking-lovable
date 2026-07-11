
## Cavendish Aesthetics — one-page clinic site

Physician-led, calm-authority tone. Cream/taupe base, deep bordeaux accent. Mobile-first, fast, no forms.

### Design system (src/styles.css)
- Fonts (via `<link>` in `__root.tsx` head, referenced in `@theme`):
  - Display serif: **Cormorant Garamond** (weights 400/500/600)
  - Body sans: **Inter Tight** (weights 400/500)
- Tokens (oklch):
  - `--background` cream `#F6F1E9`
  - `--foreground` deep ink `#1F1B17`
  - `--muted` taupe `#E7DFD3`
  - `--muted-foreground` warm stone `#7A6F63`
  - `--primary` deep bordeaux `#5A1A2B`
  - `--primary-foreground` cream
  - `--accent` soft bordeaux tint for hover
  - `--border` warm taupe hairline
- Radius: `0.25rem` (restrained, editorial)
- Utilities: `.hairline` (1px border-bottom in border color), generous section padding, max content width ~1200px.

### Route structure
Single page. Everything lives in `src/routes/index.tsx` composed from small components under `src/components/site/`:
- `Nav.tsx` — clinic wordmark left, "Book a Consultation" bordeaux button right.
- `Hero.tsx` — H1 "Refined Results, Naturally You". Eyebrow: "Physician-led · Harley Street, London". One supporting line. Primary CTA button + secondary text link "View Treatments" (anchors to `#treatments`).
- `Treatments.tsx` — 3 treatment cards in a grid (1 col mobile, 3 col ≥md). Each card:
  - Category chip (Preventative / Corrective / Rejuvenating)
  - Treatment name (serif)
  - Meta row: Duration · Harley Street Clinic
  - Price line only for Fillers ("from £450") and Skin Rejuvenation ("from £300"); omitted for Botox
  - "Book" bordeaux CTA (placeholder link `#book`)
  - Feels functional/scheduler-like: hairline dividers, availability dot (bordeaux) "Next availability this week"
- `Trust.tsx` — Two-column ≥md: portrait left, copy right. Name "Dr. Amara Whitfield, MBBS · GMC-registered". 3 bullets (experience, clinical approach, consistency). Below: 2 clinic/treatment-room images side-by-side.
- `Testimonials.tsx` — 3 short cards; each with 1–2 line quote + "Elena, 38 · Barrister" style attribution. One tasteful result image accompanying the row.
- `Footer.tsx` — Clinic name, Harley Street address line, GMC line, © year. Minimal.

### Booking action (placeholder)
All CTAs point to `href="#book"` for now. Add a `TODO` comment noting the future swap (external booking URL / Calendly). No modal, no form.

### Imagery (AI-generated, saved to `src/assets/`)
Generate at build time via the agent's `generate_image` tool (premium tier for portrait, standard for interiors):
1. `hero.jpg` — soft-focus close-up of clinician's hands in nitrile gloves preparing an instrument, warm cream/taupe light, shallow depth. 1600×1100.
2. `dr-whitfield.jpg` — editorial portrait, mid-40s British woman physician, dark hair pulled back, white clinical coat, neutral cream backdrop, natural window light, calm expression. 1000×1200.
3. `clinic-interior.jpg` — minimal Harley Street consultation room, cream walls, brass details, single orchid, no people. 1200×900.
4. `treatment-room.jpg` — clean treatment chair, soft daylight, taupe cabinetry, sterile tray. 1200×900.
5. `result-1.jpg` — tasteful close-up of a woman's refined skin (cheekbone/jawline), soft light, no before/after framing. 900×900.

Import as ES6, use `<img loading="lazy" decoding="async">` (hero eager). Provide meaningful `alt`.

### SEO / head
Update `__root.tsx` head defaults:
- title: "Cavendish Aesthetics — Physician-led Aesthetics, Harley Street"
- description: "Refined, natural aesthetic results from Dr. Amara Whitfield, GMC-registered physician. Harley Street, London. Book a consultation."
- og:title / og:description mirror above; og:type website; twitter summary_large_image.
- Add leaf-route `head()` in `index.tsx` with `og:image` pointing to hero absolute URL (imported asset URL).

### Responsive & performance
- Mobile-first. Sticky top nav with persistent "Book" button so booking is one tap away.
- Grid pattern per responsive-layout rule: `grid-cols-[minmax(0,1fr)_auto]` on mobile nav row, `sm:flex` up.
- Lazy-load non-hero images; preload hero.
- No client JS beyond what shadcn/router already ships.

### Files to create/modify
- Modify: `src/styles.css`, `src/routes/__root.tsx`, `src/routes/index.tsx`
- Create: `src/components/site/Nav.tsx`, `Hero.tsx`, `Treatments.tsx`, `Trust.tsx`, `Testimonials.tsx`, `Footer.tsx`
- Create: `src/assets/hero.jpg`, `dr-whitfield.jpg`, `clinic-interior.jpg`, `treatment-room.jpg`, `result-1.jpg`

### Exclusions honored
No pricing on Botox, no lead forms, no email capture, no blog, no motivational copy, no long explanations.
