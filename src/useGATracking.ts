import { useEffect } from "react";

export function useGATracking() {
  useEffect(() => {
    // Track initial page load
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
      });
    }

    // Track client-side navigation
    const handlePushState = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.search,
        });
      }
    };

    window.addEventListener('pushstate', handlePushState);
    window.addEventListener('replacestate', handlePushState);
    window.addEventListener('popstate', handlePushState);

    return () => {
      window.removeEventListener('pushstate', handlePushState);
      window.removeEventListener('replacestate', handlePushState);
      window.removeEventListener('popstate', handlePushState);
    };
  }, []);
}
