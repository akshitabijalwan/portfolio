import { useState, useEffect } from 'react';

interface Route {
  path: string;
  params: Record<string, string>;
}

export function useHashRouter(): Route {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}

function parseHash(): Route {
  const hash = window.location.hash.slice(1) || '/';

  // Match /projects/:slug
  const projectMatch = hash.match(/^\/projects\/([a-z0-9-]+)$/);
  if (projectMatch) {
    return { path: '/projects/:slug', params: { slug: projectMatch[1] } };
  }

  // Match /about
  if (hash === '/about') {
    return { path: '/about', params: {} };
  }

  // Default to home
  return { path: '/', params: {} };
}
