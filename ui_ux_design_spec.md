# Atelier — UI/UX Design Specification

> **Theme Category:** Fashion & Apparel  
> **Design Philosophy:** Strategic Minimalism — every element earns its place  
> **Target:** Premium editorial aesthetic competing with Prestige, Impulse, and Symmetry themes

---

## 1. Visual Direction & Mood

The overall feel is **quiet luxury** — the kind of aesthetic you see on COS, The Row, Aritzia, and Everlane. Not loud, not trendy. Clean, confident, and timeless.

### Key Visual Principles

| Principle | What it means in practice |
|---|---|
| **White space is a feature** | Generous margins, no cramped layouts. Let products breathe. |
| **Photography is the hero** | The theme is a frame — product images do the selling. |
| **Typography carries the brand** | The serif/sans pairing IS the brand identity. |
| **Color is restrained** | Neutral palette. The products provide the color. |
| **Motion is subtle** | No flashy animations. Smooth, purposeful transitions only. |

---

## 2. Design System — Tokens

### Color Palettes (3 presets, all fully customizable)

#### Palette 1: Ivory & Black (Default)
```
Background:     #FAF8F5  (warm ivory)
Surface:        #FFFFFF  (cards, modals)
Text Primary:   #1A1A1A  (near-black)
Text Secondary: #6B6B6B  (muted gray)
Accent:         #1A1A1A  (black — CTAs, links)
Border:         #E8E4DF  (warm gray)
Sale:           #9B2C2C  (muted burgundy — not loud red)
Success:        #2D6A4F  (forest green)
Overlay:        rgba(0,0,0,0.4)
```

#### Palette 2: Bone & Olive
```
Background:     #F5F0EA  (warm bone)
Surface:        #FAFAF7
Text Primary:   #2C2C2C
Text Secondary: #7A7A6E
Accent:         #4A5D3A  (deep olive)
Border:         #DDD8CE
Sale:           #8B3A3A
```

#### Palette 3: Pure White & Charcoal
```
Background:     #FFFFFF
Surface:        #F8F8F8
Text Primary:   #333333  (charcoal)
Text Secondary: #888888
Accent:         #555555  (stone)
Border:         #EBEBEB
Sale:           #A63D3D
```

### Typography

| Role | Font | Weight | Size (Desktop) | Size (Mobile) |
|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 500 | 64–80px | 36–44px |
| H2 | Cormorant Garamond | 500 | 44–52px | 28–36px |
| H3 | Cormorant Garamond | 500 | 28–32px | 22–26px |
| Body | DM Sans | 400 | 16px | 15px |
| Body Bold | DM Sans | 500 | 16px | 15px |
| Small / Meta | DM Sans | 400 | 13px | 12px |
| Button | DM Sans | 500 | 14px uppercase | 14px uppercase |
| Price | DM Sans | 500 | 18px | 16px |
| Nav Links | DM Sans | 400 | 14px uppercase | 15px |

**Letter spacing:** Headings: 0.02em | Uppercase elements: 0.12em | Body: normal

### Spacing Scale
```
--space-xs:   4px
--space-sm:   8px
--space-md:   16px
--space-lg:   24px
--space-xl:   40px
--space-2xl:  64px
--space-3xl:  96px
--space-4xl:  128px
```

### Border Radius
```
--radius-none:  0px      (sharp — default for fashion)
--radius-sm:    4px      (buttons, badges)
--radius-md:    8px      (cards, inputs)
--radius-lg:    12px     (modals)
--radius-full:  9999px   (swatches, pills)
```

### Shadows
```
--shadow-sm:    0 1px 3px rgba(0,0,0,0.06)
--shadow-md:    0 4px 12px rgba(0,0,0,0.08)
--shadow-lg:    0 12px 40px rgba(0,0,0,0.12)
--shadow-drawer: -8px 0 30px rgba(0,0,0,0.15)
```

---

## 3. Page Designs

### 3.1 Homepage

![Homepage desktop layout — hero with editorial image, announcement bar, navigation, and product grid below](C:\Users\shaki\.gemini\antigravity\brain\fc41b5ea-ee08-456f-9dfa-d3f65b89465c\homepage_desktop_1777807531722.png)

**Layout flow (top to bottom):**

```
┌─────────────────────────────────────────────────────────┐
│  ANNOUNCEMENT BAR — "Free shipping over $150" + timer   │
├─────────────────────────────────────────────────────────┤
│  HEADER — Logo (center) | Nav | Search, Account, Cart   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO — Full-bleed image/video                          │
│  "THE NEW COLLECTION"  (compressed serif, 80px)         │
│  "Discover timeless pieces..." (sans, 18px)             │
│  [ SHOP NOW ]  (black button)                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FEATURED COLLECTIONS — 2 or 4 column grid              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │  IMAGE   │ │  IMAGE   │ │  IMAGE   │ │  IMAGE   │   │
│  │ "DRESSES"│ │ "TOPS"   │ │ "OUTER"  │ │  "SALE"  │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  NEW ARRIVALS — "Just In" heading                       │
│  4-col product card grid (horizontal scroll on mobile)  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SHOP THE LOOK — Full-width editorial image             │
│  Clickable hotspot dots → product mini-cards            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  BRAND STORY — Centered text block + optional image     │
├─────────────────────────────────────────────────────────┤
│  TESTIMONIALS — 3-col cards with photo + stars + quote  │
├─────────────────────────────────────────────────────────┤
│  NEWSLETTER — "Join the list" + email input + CTA       │
├─────────────────────────────────────────────────────────┤
│  FOOTER — Nav columns, social, payment icons, legal     │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Product Page (Conversion-Critical)

![Product page desktop layout — image gallery left, product info right, accordion sections, cross-sell below](C:\Users\shaki\.gemini\antigravity\brain\fc41b5ea-ee08-456f-9dfa-d3f65b89465c\product_page_desktop_1777807547608.png)

**Desktop layout — two-column split:**

```
┌────────────────────────────────────────────────────────────┐
│  BREADCRUMB: Home / Dresses / Silk Wrap Dress              │
├────────────────────────┬───────────────────────────────────┤
│                        │                                   │
│  MAIN IMAGE            │  ★★★★½  (42 reviews)             │
│  (sticky on scroll)    │                                   │
│                        │  SILK WRAP DRESS                  │
│  ┌──────────────────┐  │  $285.00                          │
│  │                  │  │                                   │
│  │   Product Photo  │  │  Color: Ivory                     │
│  │   (hover zoom)   │  │  ● ● ● ◍  (swatches, 1 OOS)     │
│  │                  │  │                                   │
│  └──────────────────┘  │  Size:                            │
│                        │  [XS] [S] [M̲] [L] [X̲L̲]           │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐  │  ↑selected  ↑grayed-out           │
│  │t1│ │t2│ │t3│ │▶ │  │                                   │
│  └──┘ └──┘ └──┘ └──┘  │  ⚠ Only 2 left in this size      │
│  thumbnails + video    │                                   │
│                        │  ┌───────────────────────────┐    │
│                        │  │      ADD TO CART           │    │
│                        │  └───────────────────────────┘    │
│                        │                                   │
│                        │  ▸ Description            ─────   │
│                        │  ▸ Size & Fit             ─────   │
│                        │  ▸ Material & Care        ─────   │
│                        │  ▸ Shipping & Returns     ─────   │
├────────────────────────┴───────────────────────────────────┤
│                                                            │
│  COMPLETE THE LOOK — 3 styled products in a row            │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  YOU MAY ALSO LIKE — 4-col product grid (API-driven)       │
├────────────────────────────────────────────────────────────┤
│  REVIEWS — Photo reviews, filter by rating/size/photos     │
├────────────────────────────────────────────────────────────┤
│  RECENTLY VIEWED — Horizontal scroll                       │
└────────────────────────────────────────────────────────────┘
```

### 3.3 Collection Page

![Collection page desktop layout — filter sidebar, product grid, sort controls](C:\Users\shaki\.gemini\antigravity\brain\fc41b5ea-ee08-456f-9dfa-d3f65b89465c\collection_page_desktop_1777807561167.png)

**Layout structure:**

```
┌────────────────────────────────────────────────────────┐
│  COLLECTION HEADER                                     │
│  "WOMEN'S DRESSES"  (serif, 52px)                      │
│  Optional: lifestyle banner image behind text           │
├────────────────────────────────────────────────────────┤
│  Active filters: [Black ✕] [Size M ✕]  |  Sort: Newest │
├──────────┬─────────────────────────────────────────────┤
│          │                                             │
│ FILTERS  │  PRODUCT GRID (3 columns)                   │
│          │  ┌────┐ ┌────┐ ┌────┐                       │
│ Size     │  │    │ │    │ │ ♡  │ ← wishlist icon       │
│ [XS][S]  │  │    │ │    │ │    │                       │
│ [M][L]   │  │    │ │    │ │    │                       │
│          │  └────┘ └────┘ └────┘                       │
│ Color    │  Name     Name    Name                      │
│ ●●●●●   │  $185    $220    SOLD OUT                   │
│          │  ●●●     ●●      ●●●●                      │
│ Price    │                                             │
│ ○────●   │  ┌────┐ ┌────┐ ┌────┐                      │
│ $0-$500  │  │    │ │hov │ │    │                       │
│          │  │    │ │ er │ │    │                       │
│ Material │  │    │ │stat│ │    │                       │
│ ☐ Cotton │  └────┘ └────┘ └────┘                       │
│ ☐ Silk   │                                             │
│ ☐ Linen  │  [ LOAD MORE ]                              │
│          │                                             │
└──────────┴─────────────────────────────────────────────┘
```

### 3.4 Mobile Screens

![Mobile screens — homepage, product page, and cart drawer on iPhone](C:\Users\shaki\.gemini\antigravity\brain\fc41b5ea-ee08-456f-9dfa-d3f65b89465c\mobile_screens_1777807577885.png)

**Mobile-specific layout decisions:**

| Element | Mobile Behavior |
|---|---|
| **Navigation** | Hamburger menu (top) + **bottom nav bar** (Home, Search, Collections, ♡, Account) |
| **Hero** | Full-width, reduced heading size (36–44px), CTA stacks below |
| **Product grid** | 2 columns, no hover states (tap to view) |
| **Product images** | Full-width swipeable carousel with dot indicators |
| **ATC button** | Sticky at bottom of viewport after scrolling past fold |
| **Cart** | Bottom sheet (slides up), not sidebar |
| **Filters** | Full-screen bottom sheet overlay |
| **Size/color selectors** | Minimum 44×44px tap targets with 8px gaps |
| **Announcements** | Single-line ticker, smaller font, dismissable |

---

## 4. Component Design Details

![UI component system — navigation, product cards, swatches, size selectors, cart drawer, buttons](C:\Users\shaki\.gemini\antigravity\brain\fc41b5ea-ee08-456f-9dfa-d3f65b89465c\ui_components_1777807592758.png)

### 4.1 Product Card

The most-repeated component in the theme. Must be pixel-perfect.

```
┌──────────────────┐
│ ♡ (wishlist)     │  ← top-right, 32px icon
│                  │
│   Product Image  │  ← 3:4 aspect ratio, ALWAYS
│   (hover → img2) │  ← crossfade 300ms ease
│                  │
│   [QUICK ADD]    │  ← appears on hover, bottom overlay
│                  │
├──────────────────┤
│ Product Name     │  ← DM Sans 14px, 1 line, ellipsis
│ $185.00          │  ← DM Sans 500, 15px
│ ● ● ●           │  ← mini color swatches (12px circles)
└──────────────────┘

SOLD OUT state:
- Image gets 20% opacity overlay
- "SOLD OUT" badge centered on image
- Price still visible, no strikethrough
```

### 4.2 Color Swatches

```
NORMAL:     ●  (24px circle, actual color fill, 1px border matching color)
SELECTED:   ◉  (24px circle + 2px black outer ring with 2px gap)
SOLD OUT:   ◍  (24px circle + diagonal line through it, 40% opacity)
HOVER:      ●  (slight scale 1.1 + shadow)
```

### 4.3 Size Selector

```
AVAILABLE:      [  M  ]    (48px height, 1px black border, transparent BG)
SELECTED:       [  M  ]    (48px height, black BG, white text)
SOLD OUT:       [  M  ]    (48px height, #E5E5E5 BG, #B0B0B0 text, no pointer)
HOVER:          [  M  ]    (48px height, #F5F5F0 BG, black border)
```

### 4.4 Buttons

```
PRIMARY:        Black BG, white text, 48px height, 0px radius (sharp), uppercase 14px
                Hover: #333 BG, subtle lift shadow
                
SECONDARY:      Transparent BG, 1px black border, black text, 48px height
                Hover: black BG, white text (invert)
                
TEXT LINK:       Underline on hover, no BG, inline
```

### 4.5 Header States

```
TOP OF PAGE:     Full height (80px), transparent or ivory BG, full logo
SCROLLED DOWN:   Collapsed (56px), slight background blur, slim logo
SCROLL UP:       Re-appears with slide-down animation (200ms)
MEGA-MENU OPEN:  Full-width dropdown panel, overlay on page content
```

### 4.6 Cart Drawer

```
Desktop:  Slides in from RIGHT, 420px wide, dark overlay behind
Mobile:   Slides up from BOTTOM, full-width, 85vh max-height

CONTENTS:
┌──────────────────────────────────────┐
│  YOUR CART (2)                    ✕  │
├──────────────────────────────────────┤
│  ┌────┐  Silk Wrap Dress             │
│  │ img│  Ivory / Size M              │
│  └────┘  [-] 1 [+]         $285.00   │
├──────────────────────────────────────┤
│  ████████████░░░░  $125 away from    │
│                    free shipping!     │
├──────────────────────────────────────┤
│  YOU MIGHT LIKE:                     │
│  ┌──────┐ ┌──────┐                   │
│  │upsell│ │upsell│                   │
│  └──────┘ └──────┘                   │
├──────────────────────────────────────┤
│  🔒 Secure checkout  📦 Free returns │
├──────────────────────────────────────┤
│  ┌──────────────────────────────┐    │
│  │        CHECKOUT — $285.00    │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

---

## 5. Micro-Interactions & Motion Design

Every animation must feel **purposeful and elegant**, never flashy.

| Interaction | Animation | Duration | Easing |
|---|---|---|---|
| **Page load** | Content fades in section by section | 400ms stagger 100ms | ease-out |
| **Product card hover** | Image crossfade to 2nd photo | 300ms | ease |
| **Product card hover** | Quick-add button slides up from bottom | 200ms | ease-out |
| **Wishlist heart** | Scale pulse (1 → 1.3 → 1) + fill | 300ms | ease-in-out |
| **Add to cart** | Cart icon count bumps (scale 1.2 then back) | 250ms | spring |
| **Cart drawer open** | Slide in from right + overlay fade | 300ms | ease-out |
| **Cart drawer close** | Slide out + overlay fade | 200ms | ease-in |
| **Mega-menu open** | Height expand + fade in content | 250ms | ease-out |
| **Filter expand** | Smooth height transition | 200ms | ease |
| **Accordion open** | Height auto + content fade | 250ms | ease-out |
| **Sticky header** | Slide down on scroll-up | 200ms | ease-out |
| **Header blur** | Background blur transitions in | 150ms | linear |
| **Swatch hover** | Scale 1.1 + subtle shadow | 150ms | ease |
| **Color swatch click** | Gallery crossfade to variant images | 300ms | ease |
| **Free shipping bar** | Width fills with transition | 500ms | ease-out |
| **Modal open** | Fade in + slight scale (0.95 → 1) | 250ms | ease-out |
| **Mobile bottom sheet** | Slide up from bottom | 300ms | cubic-bezier(.32,.72,0,1) |

### Motion Principles

1. **Nothing teleports** — every state change has a transition
2. **Fast in, slow out** — elements appear quickly, leave gently
3. **No jank** — only animate `transform` and `opacity` (GPU-composited)
4. **Respect `prefers-reduced-motion`** — disable all animations if user requests

---

## 6. Responsive Breakpoints

```css
/* Mobile-first approach */
--bp-sm:   375px    /* small phone */
--bp-md:   768px    /* tablet portrait */
--bp-lg:   1024px   /* tablet landscape / small desktop */
--bp-xl:   1280px   /* desktop */
--bp-2xl:  1440px   /* large desktop */
```

| Element | Mobile (< 768) | Tablet (768–1024) | Desktop (> 1024) |
|---|---|---|---|
| Container max-width | 100% - 32px | 100% - 64px | 1280px centered |
| Product grid | 2 col | 3 col | 3–4 col |
| Header height | 56px | 64px | 80px |
| Hero heading | 36px | 48px | 72px |
| Bottom nav | Visible | Hidden | Hidden |
| Filter panel | Bottom sheet | Sidebar collapsible | Sidebar visible |
| Cart drawer | Bottom sheet | Side drawer | Side drawer |
| Product gallery | Swipe carousel | 2-col grid | Main + thumbs |

---

## 7. Accessibility Standards

| Requirement | Implementation |
|---|---|
| **Contrast** | All text passes WCAG AA (4.5:1 minimum) |
| **Focus states** | Visible 2px outline on all interactive elements |
| **Keyboard nav** | Full tab order through all interactive elements |
| **Screen readers** | ARIA labels on icons, live regions for cart updates |
| **Focus trapping** | Modals, drawers, mega-menu trap focus when open |
| **Skip link** | "Skip to content" link as first focusable element |
| **Alt text** | All product images require alt text (from Shopify product data) |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables all animations |
| **Touch targets** | Minimum 44×44px on all buttons, links, swatches |

---

## 8. UX Flow: Critical User Journeys

### Journey 1: Browse → Purchase (3 clicks max)

```
Homepage → Click "Dresses" collection → Click product → Add to Cart → Checkout
   1              2                          3           (in drawer)    (Shopify)
```

### Journey 2: Search → Purchase

```
Click search icon → Type "silk dress" → Click result → Add to Cart → Checkout
                                            1               2          (Shopify)
```

### Journey 3: Mobile Impulse Buy (Instagram traffic)

```
Land on product page (from IG link) → Select size → Sticky ATC → Cart sheet → Checkout
                                         1             2           (auto)      (Shopify)
```

### Journey 4: Browse with Filters

```
Homepage → Collections (bottom nav) → Apply "Dresses" + "Size M" filters → Click product
   1              2                              (same page)                      3
```

---

## 9. Theme Editor Experience (Merchant UX)

The theme editor experience is equally important — merchants need to customize without code.

### What merchants can customize:

| Category | Settings |
|---|---|
| **Colors** | Pick preset (3 options) OR customize each color token individually |
| **Fonts** | Heading font (from Shopify font library), body font, sizes |
| **Logo** | Upload + max-width slider |
| **Layout** | Container width, product grid columns, section spacing |
| **Hero** | Image/video, text, CTA, overlay opacity, text position |
| **Collections** | Grid columns, filter options, sort options |
| **Product page** | Gallery layout, accordion blocks (reorderable), cross-sell |
| **Cart** | Free shipping threshold, upsell enable/disable, trust badges |
| **Announcement** | Text, link, countdown, colors, dismiss behavior |
| **Footer** | Menu, newsletter, social links, payment icons |
| **Mobile** | Bottom nav enable/disable, icon selection |

### Drag-and-drop sections on homepage:
Every homepage section has a `preset` in its schema — merchants can add, remove, and reorder all sections without touching code.
