import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);

    const handleRouteChangeComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  if (!isLoading) return null;

  return (
    <div id="preloader">
      <div id="loader" style={{ width: 'auto' }}>Loading...</div>
    </div>
  );
};

export default Preloader;
