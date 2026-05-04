# ATELIER — TODO & Remaining Work
### What Needs to Be Done Next

> **Last Updated:** May 4, 2026  
> **Current Status:** Core theme built (38 files) — needs testing, enhancements, and polish

---

## 🔴 Critical — Must Do Before Launch

### 1. Shopify CLI Setup & Testing
- [ ] Install Shopify CLI (`npm install -g @shopify/cli`)
- [ ] Connect to development store (`shopify theme dev --store your-store.myshopify.com`)
- [ ] Fix any Liquid syntax errors flagged during preview
- [ ] Run `shopify theme check` for linting & best practices
- [ ] Upload sample products, collections, and images to dev store
- [ ] Verify all JSON templates load correctly

### 2. Missing Section Stubs
These sections are referenced in templates but don't have `.liquid` files yet:
- [ ] `sections/main-page.liquid` — generic static page content
- [ ] `sections/main-cart.liquid` — fallback cart page (non-drawer)
- [ ] `sections/main-blog.liquid` — blog listing grid
- [ ] `sections/main-article.liquid` — single blog post
- [ ] `sections/main-search.liquid` — search results page
- [ ] `sections/main-404.liquid` — 404 error page
- [ ] `sections/main-password.liquid` — password/coming-soon page
- [ ] `sections/main-login.liquid` — customer login form
- [ ] `sections/main-register.liquid` — customer registration
- [ ] `sections/main-account.liquid` — customer account dashboard
- [ ] `sections/main-order.liquid` — customer order details

### 3. Variant Switching Logic
- [ ] Complete variant JS — when color/size is selected, update:
  - Hidden `[data-variant-id]` input to correct variant ID
  - Product price display
  - Add-to-Cart button text (price + availability)
  - Product gallery images (swap to variant's featured image)
  - Urgency text (stock count for selected variant)
- [ ] Handle URL update with `?variant=ID` for deep linking

### 4. `snippets/meta-tags.liquid`
- [ ] Create this snippet (referenced in `theme.liquid`) for:
  - Open Graph tags (og:title, og:image, og:description)
  - Twitter Card meta tags
  - Structured data (JSON-LD for Product, BreadcrumbList)

---

## 🟡 High Priority — Should Do Before Launch

### 5. AJAX Collection Filtering
- [ ] Create `assets/component-filters.js`
  - Fetch filtered products via Section Rendering API
  - Update product grid without page reload
  - Update URL with `pushState` for shareable filter URLs
  - Animate grid transition (fade out → swap → fade in)
  - Mobile: full-screen filter sheet (slide up from bottom)

### 6. Predictive Search
- [ ] Create `assets/component-predictive-search.js`
  - Search overlay/modal triggered by search icon
  - Debounced API calls to Shopify Predictive Search API
  - Show product image + name + price in results
  - Default state: trending searches
  - Keyboard navigation (arrow keys, Enter, Escape)

### 7. Product Image Gallery
- [ ] Create `assets/component-product-gallery.js`
  - Desktop: hover-to-zoom on main image
  - Mobile: swipeable carousel with touch gestures
  - Thumbnail click syncs with main image
  - Video playback support (play/pause)
  - Pinch-to-zoom on mobile

### 8. Quick View Modal
- [ ] Create `snippets/quick-view-modal.liquid`
  - Modal with main image, variant pickers, ATC button
  - Fetched via AJAX (Section Rendering API)
  - Accessible: focus trap, Escape to close, backdrop click close

### 9. Size Guide Modal
- [ ] Create `snippets/size-guide-modal.liquid`
  - Responsive measurement table
  - Triggered from product page link
  - Content from metafield or section block

---

## 🟢 Medium Priority — Nice to Have for v1

### 10. Additional Homepage Sections
- [ ] `sections/shop-the-look.liquid` — Full-width editorial image with clickable product hotspots (positioned via % coordinates)
- [ ] `sections/instagram-feed.liquid` — 6–12 image grid with optional product links
- [ ] `sections/recently-viewed.liquid` — localStorage-based product carousel

### 11. Cart Drawer Enhancements
- [ ] Upsell product row at bottom of cart drawer (from a selected collection)
- [ ] Cart note field (gift message / special instructions)
- [ ] Live cart count animation on the header icon (bounce effect on add)
- [ ] Swipe-down to dismiss on mobile

### 12. Accessibility Audit
- [ ] Test with screen reader (NVDA / VoiceOver)
- [ ] Verify all interactive elements have ARIA labels
- [ ] Check focus management in drawers/modals (focus trap)
- [ ] Ensure color contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] Keyboard-only navigation test for mega menu
- [ ] Skip-to-content link verified working

### 13. Performance Optimization
- [ ] Inline critical CSS above the fold in `<head>`
- [ ] Verify all below-fold images use `loading="lazy"`
- [ ] Confirm hero image uses `fetchpriority="high"`
- [ ] All JS deferred with `type="module"` or `defer`
- [ ] Check `font-display: swap` on all font loads
- [ ] Run Lighthouse audit — target 90+ score
- [ ] Verify total JS < 100KB uncompressed
- [ ] No jQuery anywhere

---

## 🔵 Low Priority — v1.1 / Post-Launch

### 14. Additional Features
- [ ] Wishlist system (localStorage-based with page at `/pages/wishlist`)
- [ ] Back-in-stock notification form (email capture on sold-out variants)
- [ ] Product reviews integration (Judge.me placeholder hooks)
- [ ] Exit-intent newsletter popup (time-delay or exit detection)
- [ ] Loyalty points / rewards badge display
- [ ] Multi-currency / multi-language support
- [ ] Cookie consent banner (GDPR)

### 15. Additional Templates & Pages
- [ ] Gift card template (`templates/gift_card.liquid`)
- [ ] Contact page section
- [ ] FAQ page section (accordion-based)
- [ ] About Us page section
- [ ] Lookbook / editorial page section

### 16. Theme Editor Polish
- [ ] Add more color palette presets (Bone & Olive, Pure White & Charcoal)
- [ ] Live preview of typography changes in editor
- [ ] Section-level color overrides for individual sections
- [ ] More hero layout options (split, asymmetric)

### 17. Documentation
- [ ] Theme documentation site/page for merchants
- [ ] Section-by-section setup guide
- [ ] Recommended image dimensions guide
- [ ] Metafield setup instructions (size guide, fit notes, materials)

---

## 🧪 Testing Checklist (Pre-Launch)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] iOS Safari (iPhone 14+)
- [ ] Android Chrome

### Device Testing
- [ ] Desktop 1440px+
- [ ] Laptop 1024px
- [ ] Tablet 768px (portrait + landscape)
- [ ] Mobile 390px (iPhone)
- [ ] Mobile 360px (Android)

### Functional Testing
- [ ] Homepage loads with all sections
- [ ] Navigation mega menu works (hover + keyboard)
- [ ] Mobile menu opens/closes
- [ ] Product page — variant selection updates price/image/stock
- [ ] Add to cart → drawer opens with correct item
- [ ] Cart quantity update works
- [ ] Cart item removal works
- [ ] Free shipping bar calculates correctly
- [ ] Collection page filters work
- [ ] Collection sort works
- [ ] Newsletter form submits successfully
- [ ] Announcement bar dismisses and stays dismissed
- [ ] Footer links resolve correctly
- [ ] All pages render without Liquid errors

---

## 📊 Priority Summary

| Priority | Items | Time Estimate |
|----------|-------|---------------|
| 🔴 Critical | 4 items (CLI setup, missing sections, variants, meta tags) | 2–3 days |
| 🟡 High | 5 items (AJAX filters, search, gallery, modals) | 3–4 days |
| 🟢 Medium | 4 items (extra sections, cart enhancements, a11y, perf) | 2–3 days |
| 🔵 Low | 4 items (wishlist, reviews, docs, more templates) | Post-launch |
| 🧪 Testing | Full browser + device + functional QA | 1–2 days |

**Estimated time to launch-ready: ~8–12 working days**

---

*Track progress by checking off items as they're completed.*
