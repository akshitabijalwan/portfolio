import { useState, useCallback, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig, navItems } from '../../data/site';
import styles from './Navigation.module.css';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleHashChange = () => setMobileOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#/" className={styles.wordmark} onClick={closeMobile}>
          {siteConfig.candidateName}
        </a>

        {/* Desktop nav */}
        <ul className={styles.desktopLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
          {siteConfig.resumeAvailable && siteConfig.resumePath && (
            <li>
              <a
                href={siteConfig.resumePath}
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </li>
          )}
        </ul>

        <a href="#/" className={`${styles.navLink} ${styles.mobileHomeLink}`} onClick={closeMobile}>
          Home
        </a>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!mobileOpen}
        >
          <ul className={styles.mobileLinks}>
            {navItems.filter((item) => item.label !== 'Home').map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMobile}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {siteConfig.resumeAvailable && siteConfig.resumePath && (
              <li>
                <a
                  href={siteConfig.resumePath}
                  className={styles.mobileNavLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                >
                  Résumé
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
