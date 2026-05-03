# Fashion & Apparel Shopify Theme — Implementation Plan

> **Path:** A (Shopify Liquid / OS 2.0)  
> **Theme Name:** *Atelier* (working name — configurable)  
> **Target:** Shopify Theme Store–eligible, premium fashion theme  
> **Estimated timeline:** 6–8 weeks across 6 phases

---

## User Review Required

> [!IMPORTANT]
> **Theme Name** — The working name is "Atelier." Let me know if you have a preferred name.

> [!IMPORTANT]
> **Shopify Partner Account & Dev Store** — To run `shopify theme dev` you need a Shopify Partners account and a development store. Confirm you have these or I'll guide you through setup.

> [!IMPORTANT]
> **Alpine.js** — The brief suggests Alpine.js as an optional lightweight reactivity library. I recommend **including it** for drawers, accordions, mega-menu, and filters — it's 8 KB and avoids reinventing the wheel in vanilla JS. Approve or reject.

---

## Open Questions

1. **Font licensing** — The brief suggests Cormorant Garamond (Google Fonts, free) + DM Sans (Google Fonts, free). Should I use these, or do you have specific brand fonts?
2. **Review app** — Should I build the reviews section with Judge.me placeholder hooks from the start, or leave it as a generic `#reviews` container?
3. **Wishlist** — Build a native localStorage-based wishlist, or just leave hooks for Wishlist Plus app?
4. **Scope for v1** — The brief is extensive. Do you want **all** features in the first release, or should I prioritize the "Critical" and "High" sections and defer "Medium"/"Low" to a v1.1?

---

## Architecture Overview

```
g:\shpifythems\
├── assets/
│   ├── theme.css                 — main stylesheet (CSS custom properties, all styles)
│   ├── theme.js                  — main JS entry (ES module)
│   ├── component-cart-drawer.js  — cart drawer logic
│   ├── component-mega-menu.js    — mega-menu interactions
│   ├── component-predictive-search.js
│   ├── component-product-gallery.js
│   ├── component-quick-view.js
│   ├── component-filters.js      — AJAX collection filtering
│   └── (fonts, images)
├── config/
│   └── settings_schema.json      — global theme editor settings
├── layout/
│   └── theme.liquid              — base HTML shell
├── locales/
│   └── en.default.json           — translation strings
├── sections/
│   ├── header.liquid
│   ├── announcement-bar.liquid
│   ├── hero-banner.liquid
│   ├── featured-collections.liquid
│   ├── new-arrivals.liquid
│   ├── shop-the-look.liquid
│   ├── brand-story.liquid
│   ├── testimonials.liquid
│   ├── instagram-feed.liquid
│   ├── newsletter.liquid
│   ├── recently-viewed.liquid
│   ├── main-collection.liquid
│   ├── main-product.liquid
│   ├── product-recommendations.liquid
│   ├── cart-drawer.liquid
│   ├── footer.liquid
│   └── mobile-bottom-nav.liquid
├── snippets/
│   ├── product-card.liquid
│   ├── color-swatch.liquid
│   ├── size-selector.liquid
│   ├── price.liquid
│   ├── icon.liquid
│   ├── image.liquid              — responsive image helper
│   ├── quick-view-modal.liquid
│   ├── size-guide-modal.liquid
│   └── free-shipping-bar.liquid
├── templates/
│   ├── index.json                — homepage
│   ├── collection.json
│   ├── product.json
│   ├── page.json
│   ├── blog.json
│   ├── article.json
│   ├── cart.json                 — fallback (primary UX is cart drawer)
│   ├── search.json
│   ├── 404.json
│   ├── customers/
│   │   ├── login.json
│   │   ├── register.json
│   │   ├── account.json
│   │   └── order.json
│   └── password.json
└── locales/
    └── en.default.json
```

---

## Proposed Changes — Phased Breakdown

---

### Phase 1 — Project Scaffolding & Design System (Week 1)

Set up the project structure, install Shopify CLI, initialize theme, and build the design token system.

#### [NEW] `config/settings_schema.json`
Global theme settings exposed in the Shopify editor:
- **Color palettes** — 3 presets (Ivory & Black, Bone & Olive, Pure White & Charcoal) + full customization via color pickers for: background, text, accent, button BG, button text, sale badge
- **Typography** — font picker for heading (default: Cormorant Garamond) and body (default: DM Sans), plus size scale settings
- **Shape** — border-radius control (0px sharp → 16px rounded)
- **Logo** — image picker + max-width control
- **Social media** — URLs for Instagram, TikTok, Facebook, Pinterest, Twitter
- **Free shipping** — threshold amount + enable/disable toggle
- **Announcement** — text, link, countdown timer date, enable/disable
- **Favicon** — image picker

#### [NEW] `layout/theme.liquid`
Base HTML document:
- `<!DOCTYPE html>`, `<html>`, responsive viewport meta
- Preload hero fonts (Cormorant Garamond + DM Sans from Google Fonts)
- `font-display: swap` on all custom fonts
- Inline critical CSS above the fold
- CSS custom properties output from `settings_schema.json` selections
- `{{ content_for_header }}` (Shopify required)
- Static section renders: `{% section 'header' %}`, `{% section 'cart-drawer' %}`, `{% section 'mobile-bottom-nav' %}`
- `{{ content_for_layout }}` (page content)
- `{% section 'footer' %}`
- Deferred JS loading at end of `<body>`

#### [NEW] `assets/theme.css`
Complete design system stylesheet:
- **CSS custom properties** for all color tokens, font stacks, spacing scale, border radii
- **Reset/normalize** — minimal modern reset
- **Typography scale** — H1 60–80px desktop / 36–48px mobile, body 16px, meta 13px
- **Grid system** — CSS Grid with configurable column counts
- **Utility classes** — visually-hidden, container widths, aspect-ratio helpers
- **Animation keyframes** — fade-in, slide-in-right, slide-up, crossfade
- **Component base styles** — buttons (primary, secondary, outline), form inputs, badges, pills, accordion

#### [NEW] `locales/en.default.json`
All user-facing strings:
- Navigation labels, button text, filter labels, error messages, accessibility labels
- Structured by namespace: `general`, `products`, `collections`, `cart`, `accessibility`

---

### Phase 2 — Header, Navigation & Search (Week 2)

#### [NEW] `sections/header.liquid`
Sticky header with:
- Logo (left), mega-menu nav (center), icons (right: search, account, wishlist, cart)
- Sticky behavior: full header visible at top → slim bar on scroll down → reappear on scroll up
- Background blur effect on scroll (`backdrop-filter: blur`)
- Cart icon with live item count badge (animated on add-to-cart)
- Schema: logo image, menu handle, sticky toggle, transparent header option

#### [NEW] `sections/announcement-bar.liquid`
- Scrolling ticker or static text
- Countdown timer (configurable end date/time)
- Dismissable (stores dismissed state in `sessionStorage`)
- Background color & text color customizable
- Schema: message text, link URL, countdown date, enable/disable, style

#### [NEW] `assets/component-mega-menu.js`
- Desktop: full-width dropdown with subcategory links + 2–3 featured images
- Mobile: drawer from left, items expand in-place (no sub-screens)
- "New Arrivals" and "Sale" get accent badges
- Keyboard accessible (arrow keys, Escape to close)
- Uses Alpine.js for state management

#### [NEW] `assets/component-predictive-search.js`
- Search overlay (not separate page)
- Predictive results: product image + name + price
- Default state: recent searches + trending
- Debounced API calls to Shopify Predictive Search API
- Keyboard navigation of results

---

### Phase 3 — Homepage Sections (Week 3)

All sections are drag-and-drop in the theme editor with `presets` defined in schema.

#### [NEW] `sections/hero-banner.liquid`
- Full-width hero: video (autoplay, muted, looped) OR static image
- Text overlay: heading, subheading, CTA button
- Mobile: stacked layout with reduced text size
- `fetchpriority="high"` on hero image (LCP optimization)
- Schema: media type toggle, video URL, image picker, heading, subheading, button text, button link, text alignment, overlay opacity

#### [NEW] `sections/featured-collections.liquid`
- 2–4 collection cards with cover image + label overlay
- Hover: subtle zoom effect on image
- Schema: collection picker (×4), heading, layout (2-col or 4-col)

#### [NEW] `sections/new-arrivals.liquid`
- Desktop: 4-column product grid
- Mobile: horizontal scroll carousel
- Uses `snippets/product-card.liquid`
- Schema: collection picker, heading, product count (4/8/12)

#### [NEW] `sections/shop-the-look.liquid`
- Full-width editorial image
- Clickable product hotspots (positioned via % coordinates)
- Hotspot click opens mini product card popup
- Schema: image picker, hotspot blocks (each with x%, y%, product picker)

#### [NEW] `sections/brand-story.liquid`
- Centered editorial text block
- Optional side image
- Schema: heading, body (rich text), image picker, layout (text-only / image-left / image-right)

#### [NEW] `sections/testimonials.liquid`
- Customer reviews with name, optional photo, star rating
- Carousel or grid layout
- Schema: testimonial blocks (name, text, rating, photo)

#### [NEW] `sections/instagram-feed.liquid`
- Grid of social images (6–12 images)
- Links to products where tagged
- Schema: image blocks with optional product/URL link, heading, Instagram handle

#### [NEW] `sections/newsletter.liquid`
- Email capture form with optional discount incentive text
- Integrates with Shopify customer API (or Klaviyo form action)
- Popup variant (time-delay or exit-intent) as a separate section
- Schema: heading, body, button text, success message, popup delay

#### [NEW] `sections/recently-viewed.liquid`
- Products the visitor has viewed (stored in `localStorage`)
- Horizontal scroll on mobile
- Schema: heading, product count

#### [NEW] `snippets/product-card.liquid`
Core reusable component:
- Product image (3:4 aspect ratio)
- Hover: crossfade to second image
- Product name, price, color swatches (mini), quick-add button on hover
- Wishlist icon (top-right)
- "Sold Out" overlay badge for unavailable products
- Responsive image with `srcset` and `loading="lazy"`

#### [NEW] `snippets/color-swatch.liquid`
- Renders variant color as a visual swatch circle
- Strikethrough for OOS colors
- On hover/click: swaps product card image to that variant's image

#### [NEW] `snippets/price.liquid`
- Handles regular price, compare-at (sale) price, sale badge
- Currency formatting via Shopify money filters

---

### Phase 4 — Collection & Product Pages (Week 4–5)

#### [NEW] `sections/main-collection.liquid`
Collection page with:
- **AJAX filtering** — no page reload, URL parameters for shareable filter states
- Filter sidebar: size, color (swatches!), price range, material, availability
- Active filters as removable pills
- Sort: newest, best selling, price asc/desc, most reviewed
- Product grid: configurable 2/3/4 columns
- Infinite scroll or "Load more" button
- Quick view modal trigger on each product card
- Schema: columns (desktop/mobile), products per page, filter toggle, sort options

#### [NEW] `assets/component-filters.js`
- AJAX fetch to collection endpoint with filter params
- URL state management (pushState)
- Smooth height animation on filter panel expand/collapse
- Mobile: full-screen bottom sheet filter panel
- Color filter renders swatches, not text

#### [NEW] `snippets/quick-view-modal.liquid`
- Modal overlay with: main image, variant selection, size guide link, ATC button
- Fetched via AJAX (section rendering API)
- Close on Escape key and backdrop click

#### [NEW] `sections/main-product.liquid`
The highest-impact section — conversion-critical:

**Image gallery:**
- Desktop: large main image + thumbnail strip (left or below), sticky on scroll
- Mobile: full-width swipeable carousel
- 8 image slots, 1 video slot
- Hover-to-zoom (desktop), pinch-to-zoom (mobile)

**Variant selection:**
- Color: visual swatches, click swaps gallery, OOS strikethrough
- Size: button grid (not dropdown), OOS grayed out
- Stock urgency: "Only X left in this size" per variant

**Size & fit:**
- Size guide link → popup modal with measurement table
- Fit description text field (from metafield)

**Add to Cart:**
- Full-width button on mobile
- Sticky ATC on mobile after scrolling past fold
- Slides product into cart drawer (no redirect)

**Info blocks (accordion):**
- Description, Size & fit, Material & care, Shipping & returns, Sustainability
- Collapsible accordion with smooth animation

**Social proof:**
- Star rating display
- `#judge-me-product-reviews` placeholder for reviews app
- Photo reviews section

**Cross-sell:**
- "Complete the look" — manual product picker (lookbook row)
- "You may also like" — Shopify Product Recommendations API
- "Recently viewed" — from localStorage

- Schema: layout options, sticky gallery toggle, accordion blocks, cross-sell settings, metafield keys for fit/material

#### [NEW] `assets/component-product-gallery.js`
- Image carousel (mobile swipe, desktop thumbnail click)
- Zoom functionality (hover on desktop, pinch on mobile)
- Video playback support
- Variant-aware: swap images when color swatch clicked

#### [NEW] `snippets/size-selector.liquid`
- Button grid for sizes
- Grayed-out OOS sizes
- Remembers last selected size in `sessionStorage`

#### [NEW] `snippets/size-guide-modal.liquid`
- Modal with measurement table
- Responsive table layout
- Schema-driven content (or metafield-driven)

#### [NEW] `sections/product-recommendations.liquid`
- Uses Shopify Product Recommendations API
- 4-product row with `product-card.liquid`
- Schema: heading, product count

---

### Phase 5 — Cart, Checkout & Footer (Week 6)

#### [NEW] `sections/cart-drawer.liquid`
- Slide-in from right (desktop), bottom sheet (mobile)
- Product line items: image, name, variant, qty controls, price
- Free shipping progress bar with threshold from global settings
- Upsell slot: 1–2 recommended products
- Trust badges: free returns, secure checkout
- Prominent "Checkout" CTA button
- Swipe-down to dismiss (mobile)

#### [NEW] `assets/component-cart-drawer.js`
- AJAX cart operations: add, update quantity, remove
- Real-time cart state via `/cart.js` API
- Free shipping bar calculation
- Cart icon count animation
- Trap focus within drawer when open (accessibility)

#### [NEW] `snippets/free-shipping-bar.liquid`
- Progress bar showing distance to free shipping threshold
- Animated fill on cart update

#### [NEW] `sections/footer.liquid`
- Multi-column layout: navigation links, newsletter signup, social media icons, payment icons
- Copyright and legal links
- Schema: menu handle, newsletter toggle, social links, payment icons

#### Checkout Customization
- Document how to customize checkout via Shopify Admin → Settings → Checkout:
  - Brand logo, colors, fonts to match storefront
  - Guest checkout enabled
  - Minimal form fields

---

### Phase 6 — Mobile Polish, Performance & QA (Week 7–8)

#### [NEW] `sections/mobile-bottom-nav.liquid`
- Fixed bottom bar: Home, Search, Collections, Wishlist, Account
- Shows only on mobile (`@media` query)
- Active state indicator
- Schema: enable/disable, icon customization

#### [NEW] `snippets/icon.liquid`
- Inline SVG icon system (search, cart, heart, user, menu, close, chevron, star, etc.)
- Single snippet with conditional rendering based on `icon` parameter

#### Performance Optimization Pass
- Audit all images: `loading="lazy"` below fold, `fetchpriority="high"` on LCP
- Responsive `srcset` via `snippets/image.liquid` helper
- Inline critical CSS in `<head>`
- All JS deferred with `type="module"` or `defer`
- `font-display: swap` confirmed
- No jQuery anywhere
- Total JS budget: < 100KB uncompressed
- Run `shopify theme check` for linting
- Test Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

#### Accessibility Audit
- All interactive elements: keyboard navigable
- ARIA labels on icons, drawers, modals
- Focus trapping in modals and drawers
- Color contrast meets WCAG AA
- Skip-to-content link

#### Cross-Browser Testing
- Chrome, Safari, Firefox, Edge (latest)
- iOS Safari, Chrome on Android

#### 3-Click Test
- Verify any product is reachable in ≤ 3 clicks from homepage

---

## Verification Plan

### Automated Checks
```bash
# Lint the theme
shopify theme check

# Start dev server and test locally
shopify theme dev --store=your-store.myshopify.com
```

### Browser Testing
- Navigate every page type: homepage, collection, product, cart, search, 404
- Test all micro-interactions: hover states, cart drawer, mega-menu, filters, quick view
- Test on mobile viewport (375px) and desktop (1440px)
- Verify Core Web Vitals with Chrome Lighthouse

### Manual Verification
- Theme Editor: confirm all sections appear, settings work, drag-and-drop functions
- Test 3-click rule: homepage → collection → product
- Verify cart AJAX operations: add, update qty, remove, upsell
- Test search: predictive results with images
- Verify responsive behavior at 375px, 768px, 1024px, 1440px

### Performance
- Google PageSpeed Insights: target 80+ mobile score
- Chrome DevTools Network: total homepage transfer < 1.5MB
- Hero image: < 200KB WebP

---

## Dependencies & Prerequisites

| Dependency | Version | Purpose |
|---|---|---|
| Node.js | ≥ 18 | Shopify CLI requirement |
| Shopify CLI | ≥ 3.x | Local dev, theme check, deploy |
| Alpine.js | 3.x | Lightweight reactivity (8KB) |
| Cormorant Garamond | Google Fonts | Display / heading typeface |
| DM Sans | Google Fonts | Body / UI typeface |

---

## File Count Summary

| Directory | Files | Status |
|---|---|---|
| `config/` | 1 | New |
| `layout/` | 1 | New |
| `sections/` | 16 | New |
| `snippets/` | 9 | New |
| `templates/` | 12 | New |
| `assets/` (CSS) | 1 | New |
| `assets/` (JS) | 6 | New |
| `locales/` | 1 | New |
| **Total** | **~47 files** | |
