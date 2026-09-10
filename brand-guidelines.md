# Contech Mass Timber — Brand Guidelines (website)

Distilled from `Contech_BrandGuidelines-compressed.pdf` (2026, by Ayah Jaber) and the
supplied logo assets. This is the reference for every visual decision on the site.
Where the source PDF presents two options, that is flagged under **Open decisions**.

---

## 1. Brand in one line

> Contech Mass Timber combines the strength and experience of Contech Construction with
> specialized mass timber expertise to deliver innovative, sustainable, and high-performance
> building solutions for the next generation of construction.

A specialized division of Contech Construction Ltd. Values: **Quality, Integrity, Innovation,
Safety, Collaboration, Reliability.** Tone: professional, precise, grounded, warm — not loud,
not trendy.

---

## 2. Colour palette

The palette page of the guidelines is authoritative (three colours only).

| Name | Hex | Pantone | Role on the site |
|------|-----|---------|------------------|
| **Pumpkin** (orange) | `#E4580A` | 166 C | Accent only — primary CTAs, links, active states, the chevron mark, small emphasis. Never large fills. |
| **Seashell** (off-white) | `#FCF7F1` | Cloud Dancer | Default page background. |
| **Nero** (near-black) | `#2E2E2E` | Black C | Body text, headings, dark sections, footer. |

Supporting / derived (not in the PDF — keep minimal, stay in the same family):
- Pure white `#FFFFFF` — cards / raised surfaces on the Seashell background.
- Nero tints for hairlines and muted text, e.g. `#2E2E2E` at 60% / 40% / 12% opacity.
- `#E35205` is the Pantone 166 C print match; `#FE6A17` appears only on the mood board — **do not use either on the web**, standardize on `#E4580A`.

**Rules**
- Three colours carry the whole site. No secondary hues, no gradients, no bright/saturated colour.
- Orange is a spice: target well under ~10% of any screen. If a section looks orange, it's wrong.
- Contrast: Nero on Seashell and Seashell/white on Nero both pass AA. Orange `#E4580A` on
  Seashell is ~4.5:1 — OK for large text, UI, and borders; for orange body-size text or orange
  on white, darken to `#C24A08` or put it on Nero.

### Tailwind v4 theme tokens (replace the scaffold's `globals.css` block)

```css
@theme {
  --color-pumpkin:  #E4580A;
  --color-seashell: #FCF7F1;
  --color-nero:     #2E2E2E;

  --color-background: var(--color-seashell);
  --color-foreground: var(--color-nero);
  --color-accent:     var(--color-pumpkin);
}
```

Delete the `@media (prefers-color-scheme: dark)` override that `create-next-app` generated —
this brand is light-mode only; "dark" is a design choice per-section (Nero background), not a
system theme.

---

## 3. Typography

**Decision: system A.** Fonts supplied and installed (`next/font/local`, files in `src/app/fonts/`,
loader in `src/app/fonts.ts`).

| Slot | Face | CSS role | Weights loaded |
|------|------|----------|----------------|
| Headlines | **Aware Bold** | `font-display` | 700 |
| Subheads / labels / eyebrows | **Neue Haas Grotesk Display Pro**, Medium | `font-body` + `font-medium` | 500 |
| Body | **Neue Haas Grotesk Display Pro**, Roman | `font-body` | 400 (also 300 / 700 loaded) |

System B (ITC Eras Bold / Source Code / Proxima Nova) is not used.

> ⚠️ **Aware is currently the TRIAL file** (`AwareBold-qZo3x.ttf`) — 32 glyphs: `A–Z`, `.`,
> `!`, space. No lowercase, digits, comma, or apostrophe. It can only set **all-caps** headlines
> with minimal punctuation. Get the full licensed Aware Bold before relying on it for the hero
> H1 and other headings. Loader has an `Arial Narrow` fallback so missing glyphs degrade rather
> than tofu.

CSS variables are named by role (`--font-display`, `--font-body`) so a licensed-font swap stays
local to `fonts.ts` + `globals.css`. TTFs are unsubsetted (~100 KB each) — convert to subset
WOFF2 later. The scaffold's Geist / Geist Mono are removed.

### Type scale (recommendation, rem @ 16px base)

| Token | Size / line-height | Use |
|-------|-------------------|-----|
| Display | 3.5–4.5 / 1.05, tracking −0.02em | Page H1 hero |
| H2 | 2.0–2.5 / 1.15 | Section headings |
| H3 | 1.375 / 1.25 | Sub-sections, service names |
| Body-lg | 1.125 / 1.6 | Intro paragraphs |
| Body | 1.0 / 1.65 | Default |
| Label | 0.8125 / 1.4, tracking 0.08em, uppercase | Eyebrows, nav, form labels, "How it works" step tags — this is where the mono/technical face earns its place |

Headlines: sentence case or ALL CAPS for short eyebrows only; avoid all-caps on long headings.

---

## 4. Logo assets

Files live in `public/brand/` (originals: `~/Downloads/ContechMassTimber_Primary_*@300x.png`,
1850px wide, transparent PNG).

| File | Description | Use where |
|------|-------------|-----------|
| `logo-primary-color.png` | Nero "CONTECH", Pumpkin "MASS TIMBER", two-tone chevron | **Default** — header on Seashell/white, About, proposals-style sections |
| `logo-primary-black.png` | Full Nero monochrome | Single-colour contexts, print, faint watermark |
| `logo-primary-white.png` | Full white monochrome | Dark (Nero) sections when the mark should be quiet |
| `logo-primary-white-orange.png` | White wordmark + Pumpkin chevron | Footer and dark hero/CTA bands — keeps the orange accent alive on dark |

**Still needed from client / designer:**
- Vector (SVG) versions of all of the above — ship SVG on the site, not 1850px PNG.
- **Secondary logo** (stacked / compact) — for narrow layouts; PDF references it but no file supplied.
- **Brandmark** (the "C" + chevron icon alone) — required for `favicon`, app icons, OG image mark, and small-scale use. Not yet supplied.
- Tagline lockup and the architectural line **pattern** — referenced in the PDF, not supplied.

**Usage rules**
- Primary logo = main use on website, large/official placements, when there's room to breathe.
- Secondary logo = tight/repeated placements (once supplied).
- Brandmark = favicons, profile images, watermarks, "instant recognition" spots (once supplied).
- Clear space: keep at least the height of the chevron mark clear on all sides. No text or edge inside it.
- Minimum size: ~140px wide (primary) on screen for legibility of "MASS TIMBER"; below that, use the brandmark.
- **Do not** stretch, condense, or rotate. Do not recolour outside the three brand colours.
- **Do not** place on busy photos or low-contrast backgrounds — put it on Seashell, white, Nero,
  or a solid panel over imagery.

---

## 5. Layout & design principles

Straight from the guidelines' Do's, translated to this build:

- **Clean and minimal.** One idea per section. Cut anything that isn't doing work.
- **Generous whitespace / negative space.** Large section padding (e.g. 6–10rem vertical on
  desktop), roomy line-length (max ~68ch for body), don't fill the canvas.
- **Grid systems and structured layouts.** Consistent 12-col grid, consistent gutter, content
  `max-width` ~1200–1280px, aligned edges. Asymmetry is fine if it's on the grid.
- **Geometric shapes and lines inspired by architectural plans.** Thin Nero rules, right angles,
  the chevron motif, dimension-line / drafting details as sparing decoration. No blobs, no
  organic shapes, no drop shadows beyond a whisper.
- **Balance minimalism with warmth** — the Seashell ground and the orange accent are the warmth;
  keep everything else restrained.
- FAQ is an accordion, no background colour (from the copy deck designer notes).

**Don't:** overcomplicate layouts, use loud/trendy effects, mix in off-brand colours or fonts,
clutter compositions.

---

## 6. Imagery

- Real project photography (mass timber structures, site work, connections/details).
- Natural, documentary, on-site — **not** overly staged or artificial stock.
- Muted / natural colour; nothing bright or over-saturated (matches the "no saturated colour" rule).
- Timber tones sit next to Seashell and Nero comfortably; let photos carry the colour so the UI
  doesn't have to.
- Always leave a plain area or use a panel for any logo/text overlay.
- Client still owes: 3 project photo sets (Westshore Potash Shed, St. George's Senior High School,
  BCIT CSC) — see copy deck.

---

## 7. Quick checklist before shipping a page

- [ ] Only Seashell / Nero / white surfaces; orange < ~10% of the view
- [ ] Headings in the display face, labels/eyebrows in the technical face, body in the grotesque
- [ ] Everything on the grid; content within max-width; edges aligned
- [ ] Section padding generous; body measure ≤ ~68ch
- [ ] Logo on a clean background with clear space; SVG (once available), not stretched
- [ ] No shadows/gradients/trendy effects; decoration is thin geometric lines only
- [ ] AA contrast on all text; orange text only large or on Nero
- [ ] FAQ = borderless accordion

---

## 8. Open decisions (need client/designer confirmation)

1. ~~Typography system A vs B.~~ **Resolved: system A** (Aware + Neue Haas Grotesk). Still need
   the **full licensed Aware Bold** — supplied file is the caps-only trial (see §3).
2. **Hero H1 treatment.** Copy is "Mass Timber Installation for BC's Most Demanding Structural
   Projects". Aware (all-caps, no apostrophe) can't set it as written. Options: (a) full Aware
   license + reword to drop the possessive so it can go all-caps; (b) keep exact copy in Neue
   Haas Grotesk Bold (current state); (c) all-caps Aware now, "'S" falls back until full font.
3. **Exact orange.** Standardizing on `#E4580A` (palette page). Confirm vs. `#E35205` / mood-board `#FE6A17`.
4. **Missing assets:** SVG logos, secondary (compact) logo, standalone brandmark/icon, tagline
   lockup, architectural line pattern.
5. **Favicon / OG image** depend on the brandmark being supplied.
