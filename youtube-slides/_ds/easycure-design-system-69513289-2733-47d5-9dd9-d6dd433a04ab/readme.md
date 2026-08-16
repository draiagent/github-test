# EasyCure 益力康 Design System

## Overview
EasyCure (益力康 — literally "beneficial strength & health") is a Traditional-Chinese health & wellness supplement brand. The only source material provided was the brand mark (`uploads/益力康LOGO-去背.png`): two interlocking "C" rings forming an "E·C" monogram, one yellow (labelled EASY) and one green (labelled CURE), on a transparent background. No codebase, Figma file, or brand guideline document was supplied, so this system was built from-scratch, using the logo's colors and the answers below as the only ground truth. **No other assets exist — nothing here should be read as an official EasyCure brand guideline.**

Context gathered from the user: an e-commerce health/wellness retailer, Traditional Chinese-first copy, warm & approachable tone, green as the primary action color with yellow as accent/highlight.

**Sources referenced:**
- `uploads/益力康LOGO-去背.png` — the brand's only supplied asset (logo, copied to `assets/logo.png`)
- [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) — a curated list of `DESIGN.md` brand references for *other* companies (Stripe, Linear, Notion, etc). It contains no EasyCure content; it was skimmed only as a structural reference for what a complete design system should define. Explore it yourself for more brand-system examples and technique ideas.

## Index
- `styles.css` — root stylesheet, imports all tokens
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shadows.css`
- `assets/logo.png` — brand mark
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand)
- `components/` — reusable UI primitives: `core/` (Button, IconButton, Card), `forms/` (Input, Select, Checkbox, Radio, Switch), `feedback/` (Badge, Tag, Toast, Tooltip), `navigation/` (Tabs), `overlay/` (Dialog)
- `ui_kits/ecommerce/` — interactive storefront recreation (home → product detail → cart)
- `slides/` — sample slide layouts (title, comparison, big quote, section divider)
- `SKILL.md` — portable skill file for reusing this brand elsewhere

## Content fundamentals
- **Language:** Traditional Chinese (繁體中文) first, throughout copy, nav, and UI labels.
- **Address:** speaks to the customer directly and warmly ("陪你顧好每一天") rather than corporate third-person.
- **Casing:** no all-caps shouting; sentence-style Chinese copy. Latin brand name "EasyCure" is mixed-case, never all-caps.
- **Tone:** warm, plainspoken, reassuring — pharmacy-counter friendly, not clinical-cold or hard-sell. E.g. "每日一點好習慣，養出好體力" rather than a stat-heavy claim.
- **Emoji:** not used. Iconography and color communicate energy instead.
- **CTAs:** direct action verbs — 立即購買 (buy now), 加入購物車 (add to cart), 前往結帳 (checkout) — short, imperative, no filler.

## Visual foundations
- **Color:** green (`--green-500` #63b22f) is the primary action/brand color (buttons, links, prices); yellow (`--yellow-500` #ffc800) is a secondary accent reserved for promos, badges, and highlights — never as the dominant field color. Neutrals are warm off-whites/taupes (`--neutral-25…950`), not cool grays, to keep the palette approachable rather than clinical.
- **Type:** Noto Sans TC is the workhorse UI/body font (bold weights for headings, up to 900 for hero display); Noto Serif TC is used sparingly for editorial accent moments (pull-quotes, brand statements) — see `guidelines/type-pairing.html`.
- **Spacing:** 4px-based scale (4→128px); layout gutter 24px, container max-width 1200px.
- **Backgrounds:** flat warm neutrals and soft two-color gradients (green→yellow diagonal wash on hero sections); no photographic full-bleed backgrounds were supplied, so hero/product imagery uses `<image-slot>` placeholders for the user to fill with real photography.
- **Illustration:** none supplied — no hand-drawn illustration or pattern system exists in this system.
- **Animation:** subtle and functional only — 120–320ms ease-standard transitions on hover/press (color shift, small lift), no bounce/playful motion, no page-load animations.
- **Hover states:** buttons darken one step (`--color-primary-hover`); cards lift 2px with a deeper shadow; ghost/text buttons gain a soft tinted background.
- **Press states:** buttons scale to 0.97 briefly; no color-invert press states.
- **Borders:** thin 1px hairlines (`--border-subtle`/`--border-default`) on cards, inputs, dividers — never heavy or colored borders.
- **Shadows:** soft, low-contrast warm-toned shadows (`--shadow-card`, `--shadow-md`, `--shadow-lg`); a colored `--shadow-focus` ring (green, 4px) marks keyboard/interactive focus.
- **Corner radii:** generous and consistent — 12–20px on cards/inputs, full pill radius on all buttons and tags. No sharp/zero-radius elements.
- **Cards:** white surface, 1px subtle border, soft shadow, 20px large radius; `hoverable` cards lift on hover (used for product tiles).
- **Transparency/blur:** none — no glass/blur surfaces are used; the cart drawer uses a plain semi-transparent scrim (45% black) behind it, not blurred.
- **Imagery color vibe:** unknown (no photography supplied) — placeholders assume natural, bright, un-filtered product photography consistent with the brand's warm palette; ask the user for real photography.
- **Layout rules:** sticky header; content constrained to a 1200px container with 24px gutters; 3-column product grid on desktop.

## Iconography
No icon set was supplied with the brand. Icons in the UI kit are sourced live from the [Lucide](https://lucide.dev) icon CDN (`unpkg.com/lucide-static`) as a stroke-icon substitute — flagged here as a **substitution**, not an EasyCure-original icon system. No icon font, custom SVG sprite, or emoji-as-icon convention exists. If EasyCure has (or wants) a proprietary icon style, provide it and this system should be updated to use it instead of the CDN fallback.

## Fonts
No brand font files were supplied. **Noto Sans TC / Noto Serif TC** (Google Fonts) were chosen as the nearest good-quality, redistributable Traditional Chinese webfont pairing and are loaded via `@import` in `tokens/typography.css`. Flagging this substitution — if EasyCure has a licensed brand typeface, please share the font files and this will be swapped in.

## Components
Since no component library, codebase, or Figma file was provided, a standard e-commerce-appropriate primitive set was authored from scratch, sized to this brand: **Button, IconButton, Card** (core); **Input, Select** (exported together as `InputSelect`), **Checkbox, Radio, Switch** (exported together as `ToggleControls`) (forms); **Badge, Tag** (exported together as `BadgeTag`), **Toast, Tooltip** (exported together as `ToastTooltip`) (feedback); **Tabs** (navigation); **Dialog** (overlay). All are visible under the "Components" group in the Design System tab.

## UI kit
`ui_kits/ecommerce/` is an original interactive storefront concept (home with hero + product grid → product detail with tabs/qty stepper → slide-in cart), composed entirely from the components above. This is an *original* screen design (no source UI existed to copy) — not a recreation of any real EasyCure product.

## Caveats & open questions
- **Only a logo was provided.** Every color beyond the two logo hues, every type choice, every layout, and the entire component/UI-kit inventory are original work, not derived from an existing EasyCure product. Please treat this as a strong starting proposal, not a locked brand guideline.
- Fonts are a Google Fonts substitute (see Fonts section above) — send real brand font files if EasyCure has licensed ones.
- Icons are a Lucide CDN substitute — send a real icon set/style if one exists.
- No product photography exists — all product imagery is `<image-slot>` placeholders.

**Ask:** does this color mapping (green-primary / yellow-accent), tone, and e-commerce screen direction feel right for EasyCure? Tell me what to iterate — more product categories, a different industry (clinic/telehealth instead of e-commerce?), a mobile app kit, or real photography/fonts/icons to drop in — and I'll refine this into something closer to a final system.
