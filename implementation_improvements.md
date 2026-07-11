# Cavendish Aesthetics — Frontend Implementation Plan

> **Scope:** Frontend only. No backend to be coded at this stage.  
> **Last updated:** 2026-07-11  
> **Status legend:** `[ ]` todo · `[~]` in progress · `[x]` done · `[-]` skipped/deferred

---

## Progress overview

| Phase | Focus | Items | Done |
|-------|-------|-------|------|
| 0 | Critical trust & conversion blockers | 8 | 0 |
| 1 | Navigation & wayfinding | 7 | 0 |
| 2 | New sections (trust + conversion) | 18 | 0 |
| 3 | Section refinements | 24 | 0 |
| 4 | Visual identity & polish | 14 | 0 |
| 5 | Accessibility | 9 | 0 |
| 6 | Performance & SEO (frontend) | 10 | 0 |
| **Total** | | **90** | **0** |

_Update the Done column as checkboxes are completed._

---

## Phase 0 — Critical trust & conversion blockers

> Do these first. Nothing else matters if trust is broken or booking goes nowhere.

### 0.1 Physician image / name mismatch

- [ ] Replace `src/assets/dr-whitfield.jpg` with an image that matches **Dr. Amara Whitfield** (or retouch/remove "Dr. A. Sharma" embroidery)
- [ ] Verify all copy references the same physician name consistently (`Trust.tsx`, `Treatments.tsx`, `Footer.tsx`, meta tags in `__root.tsx`)
- [ ] Re-check alt text on physician portrait after asset swap

### 0.2 Booking dead-end fix

- [ ] Redesign `#book` footer section as the primary conversion endpoint (not a self-referencing anchor)
- [ ] Add booking embed placeholder area (Calendly / Jane / Doctly iframe or styled container ready for URL)
- [ ] Add visible fallback contact: phone number, email, clinic hours
- [ ] Update all `#book` links across `Nav.tsx`, `Hero.tsx`, `Treatments.tsx`, `Footer.tsx` to scroll to the new booking block (or open embed)
- [ ] Remove circular `href="#book"` on the footer CTA button itself — point to embed, `tel:`, or `mailto:` instead
- [ ] Add per-treatment anchor/query pattern (e.g. `#book?service=fillers`) as optional deep-link scroll — frontend only, no backend

**Files:** `Footer.tsx`, `Nav.tsx`, `Hero.tsx`, `Treatments.tsx`

---

## Phase 1 — Navigation & wayfinding

### 1.1 Desktop navigation

- [ ] Add section links to `Nav.tsx`: Treatments · Physician · Patients (matching `#treatments`, `#physician`, `#patients`)
- [ ] Keep persistent **Book a Consultation** CTA on the right
- [ ] Style nav links to match existing micro-type / underline hover pattern

### 1.2 Mobile navigation

- [ ] Add mobile menu (hamburger → sheet/drawer using existing `sheet.tsx` or `drawer.tsx`)
- [ ] Include all section anchors + Book CTA in mobile menu
- [ ] Ensure menu closes on anchor click
- [ ] Test on narrow viewports (320px–480px)

### 1.3 Scroll behaviour

- [ ] Add `scroll-margin-top` to all anchored sections (`#top`, `#treatments`, `#physician`, `#patients`, `#book`) to account for sticky header height
- [ ] Verify smooth scroll (`html { scroll-behavior: smooth }` already in `styles.css`) feels correct with offset
- [ ] Add optional sticky **mobile book bar** after ~400px scroll (Phase 3.5 — can be deferred but track here)

**Files:** `Nav.tsx`, `styles.css`, new `MobileBookBar.tsx` (optional)

---

## Phase 2 — New sections (trust + conversion)

### 2.1 FAQ section

- [ ] Create `src/components/site/FAQ.tsx`
- [ ] Use `accordion.tsx` for expandable Q&A
- [ ] Draft 6–8 questions covering: downtime, pain, longevity, "will I look frozen?", consultation cost, cancellation policy
- [ ] Add section to `index.tsx` (suggested placement: after Testimonials, before Footer)
- [ ] Add `id="faq"` and nav link if desired

### 2.2 Consultation process section

- [ ] Create `src/components/site/Process.tsx`
- [ ] 3-step horizontal strip: **Assess → Plan → Treat** (with short copy per step)
- [ ] Responsive: stack vertically on mobile
- [ ] Add to `index.tsx` (suggested placement: after Treatments or after Trust)

### 2.3 Trust badges / credentials strip

- [ ] Create `src/components/site/Credentials.tsx` (or inline in `Trust.tsx`)
- [ ] Display static trust elements: GMC registration number, Harley Street W1 address, professional memberships (Save Face, BAAPS, etc. — confirm which apply)
- [ ] Style as a horizontal badge row or compact grid
- [ ] Consider placing below Hero or above Footer

### 2.4 Location & hours

- [ ] Create `src/components/site/Location.tsx` or extend `Footer.tsx`
- [ ] Static Google Maps embed or styled map image
- [ ] Weekday + Saturday hours
- [ ] Click-to-call phone link (`tel:`)
- [ ] Click-to-email link (`mailto:`)

### 2.5 Legal footer links

- [ ] Add Privacy Policy link (placeholder page or external URL)
- [ ] Add Cookie notice / policy link (UK GDPR expectation)
- [ ] Add Terms of service link if applicable
- [ ] Style as subtle footer secondary links

**Files:** new components + `index.tsx`, `Footer.tsx`

---

## Phase 3 — Section refinements

### 3.1 Hero (`Hero.tsx`)

- [ ] Add trust line under subhead (e.g. `GMC XXXXXXX · 15 years · Harley Street W1`)
- [ ] Add subtle scroll cue (thin line + "Explore" or chevron)
- [ ] Evaluate hero image A/B: current instruments shot vs. physician portrait (document decision)
- [ ] Review headline sizing on 320px devices (`text-7xl` may overflow)

### 3.2 Treatments (`Treatments.tsx`)

- [ ] Add treatment imagery per card (new assets or shared clinic photos)
- [ ] Show pricing consistently on all cards (add "from £X" to Anti-Wrinkle or "Price on consultation")
- [ ] Add "Learn more" expand or drawer per treatment (areas treated, downtime, what to expect)
- [ ] Convert availability text into styled status badges (available / limited)
- [ ] Add 2–3 more treatments OR a "View full treatment menu" link
- [ ] Optional: category filter tabs (Preventative / Corrective / Rejuvenating) if treatment count grows

### 3.3 Trust / Physician (`Trust.tsx`)

- [ ] Add short bio paragraph (2–3 sentences) below credentials line
- [ ] Add pull-quote from Dr. Whitfield
- [ ] Add captions to clinic interior photos ("Consultation suite", "Private treatment room")
- [ ] Optional: image lightbox on clinic photos (dialog or carousel)

### 3.4 Testimonials (`Testimonials.tsx`)

- [ ] Revisit `result-1.jpg` — replace if too abstract/spa-like for "results" narrative
- [ ] Add static Google rating strip (e.g. `4.9 · 120+ reviews`) — no API needed
- [ ] Mobile: convert stacked quotes to carousel (`carousel.tsx`) or show 1 quote + expand
- [ ] Optional: add review source attribution (Google, Doctify, etc.)

### 3.5 Footer & mobile CTA (`Footer.tsx` + new component)

- [ ] Expand footer booking block: headline, subcopy, embed area, phone, email, address, hours
- [ ] Create sticky mobile book bar component (appears after scroll, dismissible)
- [ ] Ensure bar doesn't overlap cookie banner if added later

**Files:** `Hero.tsx`, `Treatments.tsx`, `Trust.tsx`, `Testimonials.tsx`, `Footer.tsx`

---

## Phase 4 — Visual identity & polish

### 4.1 Design system consistency

- [ ] Extract repeated CTA styles into shared `BookButton` component (or extend `button.tsx` variant)
- [ ] Extract section label pattern (11px uppercase tracking) into reusable `SectionLabel` component
- [ ] Unify spacing rhythm across sections (audit `py-20` / `py-28` / `gap` values)

### 4.2 Editorial details

- [ ] Add section index labels (`01 — Consultations`, `02 — The Physician`, etc.)
- [ ] Use `hairline` utility more deliberately between major blocks
- [ ] Introduce subtle asymmetric grid on one section (e.g. testimonials image bleed)
- [ ] Review bordeaux accent usage — ensure it marks actions and emphasis only

### 4.3 Typography & colour

- [ ] Clarify Hero `<em className="not-italic text-primary">` — rename or use `<span>` for clarity
- [ ] Audit muted-foreground contrast on 11px labels
- [ ] Remove unused `.dark` theme block from `styles.css` OR implement toggle (recommend remove for clinic brand)
- [ ] Confirm font weights loaded match actual usage (trim Google Fonts request if possible)

### 4.4 Error & empty states

- [ ] Restyle `NotFoundComponent` in `__root.tsx` to match serif headline + cream palette
- [ ] Restyle `ErrorComponent` in `__root.tsx` to match brand

**Files:** `styles.css`, `__root.tsx`, new shared components in `src/components/site/`

---

## Phase 5 — Accessibility

- [ ] Add skip-to-main-content link (visible on focus) in `__root.tsx` or `index.tsx`
- [ ] Verify visible focus rings on all links and buttons (especially custom `<a>` CTAs)
- [ ] Confirm heading hierarchy: one `h1` (Hero), logical `h2`/`h3` per section
- [ ] Add `aria-label` to mobile menu toggle
- [ ] FAQ accordion: ensure keyboard navigation and `aria-expanded` states
- [ ] Testimonials: confirm blockquote / figcaption semantics (already good — re-verify after carousel change)
- [ ] Booking embed: add accessible title on iframe
- [ ] Run quick contrast check on primary button text and muted labels
- [ ] Test full page with keyboard-only navigation

**Files:** `__root.tsx`, `index.tsx`, `Nav.tsx`, `FAQ.tsx`

---

## Phase 6 — Performance & SEO (frontend-only)

### 6.1 Meta & social

- [ ] Add `og:image` meta tag pointing to hero or physician image
- [ ] Add `og:url` and `og:locale` (`en_GB`)
- [ ] Add Twitter image meta to match `og:image`
- [ ] Verify page title and description remain accurate after content changes

### 6.2 Structured data

- [ ] Add JSON-LD `MedicalBusiness` schema in `__root.tsx` head
- [ ] Add `Physician` schema for Dr. Amara Whitfield
- [ ] Include address, telephone, opening hours, price range in schema

### 6.3 Images

- [ ] Add `sizes` attribute to responsive images
- [ ] Generate or configure responsive `srcset` for hero and physician images
- [ ] Confirm `loading="lazy"` on below-fold images (already on most — audit all)
- [ ] Compress/replace assets if any file exceeds ~200KB

### 6.4 Fonts & assets

- [ ] Preload critical fonts (Cormorant Garamond 500, Inter Tight 400/500)
- [ ] Remove unused font weights from Google Fonts link
- [ ] Add favicon/apple-touch-icon audit (favicon.ico exists — confirm quality)

**Files:** `__root.tsx`, image assets in `src/assets/`

---

## Suggested implementation order

```
Week 1 — Unblock trust & conversion
  Phase 0 (all) → Phase 1.1–1.3 → Phase 3.5 footer booking expansion

Week 2 — Build credibility
  Phase 2.3 Credentials → Phase 2.2 Process → Phase 2.1 FAQ → Phase 2.4 Location

Week 3 — Refine sections
  Phase 3.1–3.4 → Phase 4.1–4.2

Week 4 — Ship quality
  Phase 4.3–4.4 → Phase 5 (all) → Phase 6 (all) → Phase 2.5 Legal links
```

_Adjust timeline to your pace. Phases 0–1 should not be skipped._

---

## File map (new & modified)

| File | Action |
|------|--------|
| `src/components/site/Nav.tsx` | Modify — desktop + mobile nav |
| `src/components/site/Hero.tsx` | Modify — trust line, scroll cue |
| `src/components/site/Treatments.tsx` | Modify — cards, pricing, learn more |
| `src/components/site/Trust.tsx` | Modify — bio, captions, credentials |
| `src/components/site/Testimonials.tsx` | Modify — carousel, rating strip |
| `src/components/site/Footer.tsx` | Modify — booking block, legal links |
| `src/components/site/FAQ.tsx` | **New** |
| `src/components/site/Process.tsx` | **New** |
| `src/components/site/Credentials.tsx` | **New** (optional — can live in Trust) |
| `src/components/site/Location.tsx` | **New** (optional — can live in Footer) |
| `src/components/site/MobileBookBar.tsx` | **New** |
| `src/components/site/BookButton.tsx` | **New** |
| `src/components/site/SectionLabel.tsx` | **New** |
| `src/routes/index.tsx` | Modify — compose new sections |
| `src/routes/__root.tsx` | Modify — meta, schema, error pages, skip link |
| `src/styles.css` | Modify — scroll-margin, remove dark mode, polish |
| `src/assets/dr-whitfield.jpg` | **Replace** |

---

## Content needed before coding (gather from client / brief)

- [ ] Confirmed GMC registration number
- [ ] Real phone number and email
- [ ] Clinic opening hours (weekday + Saturday)
- [ ] Booking tool URL (Calendly, Jane, Doctify, etc.)
- [ ] Professional memberships to display
- [ ] Final physician portrait image
- [ ] Privacy policy URL or draft text
- [ ] Treatment pricing for all services
- [ ] FAQ answers approved by physician
- [ ] Google review count / rating (if showing static strip)

---

## Testing checklist (run before marking phases complete)

### Visual

- [ ] Desktop (1280px, 1440px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 320px)
- [ ] Sticky nav does not obscure section headings on anchor jump
- [ ] All images load with no layout shift

### Functional

- [ ] Every nav link scrolls to correct section
- [ ] Mobile menu opens, navigates, closes
- [ ] All Book CTAs reach booking block or external URL
- [ ] Phone and email links work on mobile
- [ ] FAQ accordions open/close correctly

### Quality

- [ ] No physician name / image mismatch
- [ ] No placeholder `TODO` comments left in production components
- [ ] Lighthouse: Accessibility ≥ 90
- [ ] Lighthouse: SEO ≥ 90
- [ ] Lighthouse: Performance ≥ 85 (frontend-only target)

---

## Session log

_Use this table to track progress across sessions._

| Date | Session focus | Items completed | Notes |
|------|---------------|-----------------|-------|
| 2026-07-11 | Plan created | 0 / 90 | Frontend brainstorm consolidated into this doc |
| | | | |
| | | | |

---

## Deferred / out of scope (for now)

These were considered but explicitly excluded per current scope:

- Backend booking API or form submission
- Live Google Reviews API integration
- User accounts / patient portal
- Before/after gallery with CMS
- Multi-page routing (treatment detail pages as separate routes)
- Analytics / GTM setup (can add later as script tags only)
- Cookie consent banner logic (link only for now; banner = separate task)

---

*Update checkboxes and the Progress overview table as work completes. Commit this file with feature work so history tracks what shipped.*
