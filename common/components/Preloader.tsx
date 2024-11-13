// components/Preloader.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Start preloader on route change
    const handleRouteChangeStart = () => setIsLoading(true);

    // Hide preloader once the page has finished loading
    const handleRouteChangeComplete = () => setIsLoading(false);

    // Set up event listeners for route change
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete); // in case of error during route change

    // Cleanup the event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  if (!isLoading) return null; // Don't render the preloader once loading is complete

  return (
    <div id="preloader">
      <div id="loader" style={{ width: 'auto' }}>Loading...</div>
    </div>
  );
};

export default Preloader;
