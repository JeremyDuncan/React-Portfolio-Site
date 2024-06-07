// =============================================================================
// usePageTracking.js
// This custom hook tracks page views using Google Analytics
// =============================================================================
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Tracking page view:", location.pathname);
    if (window.gtag) {
      window.gtag('config', 'G-6S5BDFXFJW', {
        'page_title': document.title,
        'page_path': location.pathname,
      });
    } else {
      console.error("gtag not found on window object");
    }
  }, [location]);
};

export default usePageTracking;
