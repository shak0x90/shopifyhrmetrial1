# Atelier Shopify Theme — UI/UX Design Walkthrough

## Overview

We have completed the **UI/UX design phase** for the "Atelier" premium fashion Shopify theme using Google Stitch MCP. This walkthrough documents all generated screens, the design system, and how they map to the implementation plan.

---

## Design System: "Editorial Minimalism"

The design system was created and applied to enforce consistency across all screens.

| Token | Value |
|-------|-------|
| **Primary Color** | `#1A1A1A` (Deep Charcoal) |
| **Background** | `#FAF8F5` (Warm Ivory) |
| **Border/Divider** | `#E5E2DD` (Refined Stone) |
| **Neutral** | `#757575` (Medium Grey) |
| **Headline Font** | Noto Serif (400) |
| **Body Font** | Inter (400) |
| **Label Font** | Inter (600, uppercase, tracked) |
| **Border Radius** | 0px (Sharp everywhere) |
| **Section Gap** | 120px |
| **Desktop Margins** | 64px |
| **Grid** | 12-column, 24px gutters |
| **Container Max** | 1440px |

### Typography Scale

| Style | Font | Size | Weight | Tracking |
|-------|------|------|--------|----------|
| `display-xl` | Noto Serif | 80px | 400 | -0.02em |
| `display-lg` | Noto Serif | 56px | 400 | -0.01em |
| `headline-md` | Noto Serif | 32px | 400 | 0em |
| `headline-sm` | Noto Serif | 24px | 400 | 0em |
| `body-lg` | Inter | 18px | 400 | -0.01em |
| `body-md` | Inter | 15px | 400 | 0em |
| `nav-item` | Inter | 12px | 500 | 0.15em |
| `label-caps` | Inter | 10px | 600 | 0.2em |

---

## Generated Screens (7 Total)

All screens are stored in **Stitch Project ID: `10973556608325291376`**

### 1. Desktop Homepage
- **Screen ID:** `d88c87c048db421b9ecbeaba0816479d`
- **Resolution:** 2560 × 5704px
- **Device:** Desktop

**Key Sections:**
- Announcement bar with countdown timer
- Centered "ATELIER" logo with sticky nav
- Full-bleed hero with "THE NEW COLLECTION" at 72px serif
- 4-column featured collections grid
- "Just In" new arrivals with product cards (3:4 ratio, color swatches, wishlist hearts)
- Newsletter signup section
- Editorial footer

---

### 2. Desktop Product Detail Page
- **Screen ID:** `7a675a889b9f4302acf30a65312a1409`
- **Resolution:** 2560 × 5660px
- **Device:** Desktop

**Key Sections:**
- 60/40 split layout (sticky image gallery / product info)
- Breadcrumb navigation
- Star rating (4.5/5, 42 reviews)
- Color swatches with sold-out state
- Size button grid with selected/disabled states
- "Only 2 left" urgency indicator
- Full-width "ADD TO CART" CTA
- Accordion sections (Description, Size & Fit, Material & Care, Shipping)
- "Complete the Look" cross-sell section
- "You May Also Like" upsell section

---

### 3. Desktop Collection Page
- **Screen ID:** `2ecec6bb262b4859a7e809b3eea5bad4`
- **Resolution:** 2560 × 4736px
- **Device:** Desktop

**Key Sections:**
- Large serif "WOMEN'S DRESSES" header
- Active filter pills with "Clear All"
- Sort dropdown (Newest)
- 240px left sidebar with filter accordions (Size, Color, Price, Material, Availability)
- 3-column product grid with hover states and "QUICK ADD" buttons
- "SOLD OUT" overlay state
- "LOAD MORE" pagination button

![Collection Page Preview](C:/Users/shaki/.gemini/antigravity/brain/54599f32-b0af-4650-bfd8-9d724a57556c/collection_page_preview_1777867350087.webp)

---

### 4. Mobile Homepage
- **Screen ID:** `917b78ae0bec42fb91a9b3eae460d31f`
- **Resolution:** 390 × 884px
- **Device:** Mobile

**Key Sections:**
- Slim announcement bar
- Hamburger menu + centered logo + cart icon
- Full-width hero with 36px serif heading
- 2-column featured collection grid
- Horizontal scrollable product row
- Fixed bottom navigation bar (Home, Search, Collections, Heart, Account)

---

### 5. Mobile Product Page
- **Screen ID:** `95f0e9f93c46461fad687ee1ee2dd9bd`
- **Resolution:** 390 × 884px
- **Device:** Mobile

**Key Sections:**
- Full-width image carousel with swipe dots
- Product info (rating, name, price, swatches, sizes)
- "Only 2 left" urgency text
- Sticky bottom "ADD TO CART — $285.00" button
- Accordion sections below ATC
- Fixed bottom navigation bar

---

### 6. Desktop Cart Drawer
- **Screen ID:** `919f2373b7b743e7a36e5fe92ba9bf50`
- **Resolution:** 2560 × 4444px
- **Device:** Desktop

**Key Sections:**
- Right-side slide-in drawer (420px wide)
- Dark overlay on background page
- Line items with image, name, variant, quantity controls, price
- Free shipping progress bar
- "You Might Also Like" upsell
- Trust badges (Secure Checkout, Free Returns)
- Full-width "CHECKOUT — $705.00" button

---

### 7. Desktop Mega Menu
- **Screen ID:** Generated in latest batch
- **Resolution:** Desktop
- **Device:** Desktop

**Key Sections:**
- Full-width dropdown below header
- 4-column category link structure (Tops, Dresses, Bottoms, Outerwear)
- 2 featured editorial images with collection CTAs
- Dark overlay on page content below

---

## Design Principles Applied

| Principle | Implementation |
|-----------|---------------|
| **Sharp Corners** | 0px radius on ALL elements — buttons, cards, inputs, images |
| **No-Line Rule** | Structure defined by background color shifts, not 1px borders |
| **Photography-First** | Full-bleed heroes, 3:4 product images, editorial lifestyle shots |
| **Typography Hierarchy** | Serif headlines (Noto Serif) vs Sans-serif UI (Inter) |
| **Conversion-Optimized** | Urgency indicators, sticky CTAs, progress bars, trust badges |
| **Mobile-First** | Bottom nav bar, sticky ATC, swipeable carousels, 44px touch targets |

---

## Stitch Project Link

All screens can be viewed and iterated on in Google Stitch:
- **Project ID:** `10973556608325291376`
- **Design System:** "Editorial Minimalism" (`assets/68ded2b885fc4d4695451ebdfd660a1a`)

---

## Next Steps → Implementation

With the UI/UX design phase complete, the next phase is **code implementation**:

1. **Phase 1:** Scaffold Shopify theme structure (`layout/`, `sections/`, `snippets/`, `assets/`)
2. **Phase 2:** Implement CSS custom properties from the design tokens above
3. **Phase 3:** Build `theme.liquid` base layout + sticky header
4. **Phase 4:** Develop homepage sections (hero, featured collections, new arrivals)
5. **Phase 5:** Build product page with variant selectors + cart drawer
6. **Phase 6:** Build collection page with AJAX filter sidebar

> [!IMPORTANT]
> Refer to `implementation_plan.md` for the complete phased development breakdown and `ui_ux_design_spec.md` for detailed component specifications.
