// GoatCounter page view tracking for SPA/hash routing
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.goatcounter) {
    window.goatcounter.count({
      path: path,
    });
  }
};
