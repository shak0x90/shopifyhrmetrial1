/**
 * ATELIER — Main Theme JavaScript
 * Handles: sticky header, cart drawer toggle, Alpine.js components, and cart AJAX
 */

/* ============================================================
   Sticky Header — show/hide on scroll
   ============================================================ */
(function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastScroll = 0;
  const threshold = 100;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add scrolled class for background blur
    header.classList.toggle('header--scrolled', currentScroll > 10);

    // Hide on scroll down, show on scroll up
    if (currentScroll > threshold) {
      if (currentScroll > lastScroll) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
    } else {
      header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });
})();

/* ============================================================
   Cart Drawer — AJAX open/close + item management
   ============================================================ */
document.addEventListener('alpine:init', () => {

  // Cart drawer component
  Alpine.data('cartDrawer', () => ({
    open: false,

    init() {
      // Listen for cart toggle clicks
      document.querySelectorAll('[data-cart-toggle]').forEach(btn => {
        btn.addEventListener('click', () => this.toggle());
      });

      // Listen for add-to-cart success events
      document.addEventListener('cart:updated', () => {
        this.open = true;
      });
    },

    toggle() {
      this.open = !this.open;
      document.body.style.overflow = this.open ? 'hidden' : '';
    },

    close() {
      this.open = false;
      document.body.style.overflow = '';
    },

    async updateItem(line, quantity) {
      try {
        const res = await fetch(window.Atelier.routes.cart_change_url + '.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ line, quantity })
        });
        const cart = await res.json();
        this.refreshDrawer();
        this.updateCartCount(cart.item_count);
      } catch (err) {
        console.error('Cart update failed:', err);
      }
    },

    async refreshDrawer() {
      try {
        const res = await fetch('/?sections=cart-drawer');
        const data = await res.json();
        const html = new DOMParser().parseFromString(data['cart-drawer'], 'text/html');
        const newDrawerBody = html.getElementById('cart-drawer-items');
        if (newDrawerBody) {
          document.getElementById('cart-drawer-items').innerHTML = newDrawerBody.innerHTML;
        }
      } catch (err) {
        console.error('Drawer refresh failed:', err);
      }
    },

    updateCartCount(count) {
      document.querySelectorAll('[data-cart-count]').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? '' : 'none';
      });
    }
  }));

  // Countdown timer for announcement bar
  Alpine.data('countdown', (targetDate) => ({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    interval: null,

    start() {
      this.update();
      this.interval = setInterval(() => this.update(), 1000);
    },

    update() {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(this.interval);
        return;
      }

      this.days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      this.hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      this.minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      this.seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    },

    destroy() {
      clearInterval(this.interval);
    }
  }));
});

/* ============================================================
   Product Form — Add to Cart via AJAX
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-product-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('[data-add-to-cart]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Adding...';

      try {
        const formData = new FormData(form);
        const res = await fetch(window.Atelier.routes.cart_add_url + '.js', {
          method: 'POST',
          body: formData
        });

        if (res.ok) {
          document.dispatchEvent(new CustomEvent('cart:updated'));
          submitBtn.textContent = 'Added ✓';
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 1500);
        } else {
          const error = await res.json();
          submitBtn.textContent = error.description || 'Error';
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }
      } catch (err) {
        console.error('Add to cart failed:', err);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  });

  // Variant option selectors
  document.querySelectorAll('[data-option-selector]').forEach(selector => {
    selector.addEventListener('change', (e) => {
      const form = e.target.closest('form');
      if (!form) return;

      // Update visual states for size buttons and swatches
      const name = e.target.name;
      form.querySelectorAll(`[name="${name}"]`).forEach(input => {
        const visual = input.nextElementSibling;
        if (visual) {
          visual.classList.toggle('swatch--active', input.checked);
          visual.classList.toggle('size-btn--active', input.checked);
        }
      });
    });
  });
});

/* ============================================================
   Collection Sort
   ============================================================ */
document.querySelectorAll('[data-sort-select]').forEach(select => {
  select.addEventListener('change', (e) => {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.target.value);
    window.location.href = url.toString();
  });
});
