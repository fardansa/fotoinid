/**
 * Ultra-lightweight, zero-lag animation controller
 * Uses native IntersectionObserver and hardware-accelerated CSS transforms
 * Zero scroll hijacking, zero CPU overhead
 */
export function initAnimations() {
  // Mark document as ready for animations
  document.documentElement.classList.add('js-ready');

  // Fallback timeout: If anything isn't triggered after 500ms, reveal everything automatically
  setTimeout(() => {
    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible');
    });
  }, 400);

  // If browser does not support IntersectionObserver or user prefers reduced motion
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  // High-performance Native IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}
