/**
 * Returns the base path for assets, accounting for GitHub Pages deployment.
 * In development, this returns '/'. In production, it returns the configured base.
 */
export function getBasePath(): string {
  return import.meta.env.BASE_URL;
}

/**
 * Resolves an asset path relative to the public directory.
 * Use this for all references to files in the public/ directory.
 * 
 * @param path - Path relative to public/, e.g. 'projects/project-one/cover.webp'
 */
export function assetPath(path: string): string {
  const base = getBasePath();
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanBase + cleanPath;
}

/**
 * Creates a hash-based route path.
 * @param path - Route path, e.g. '/about' or '/projects/my-project'
 */
export function routePath(path: string): string {
  return `#${path}`;
}

/**
 * Gets the current hash route (without the # symbol).
 */
export function getCurrentRoute(): string {
  const hash = window.location.hash;
  return hash ? hash.slice(1) : '/';
}
