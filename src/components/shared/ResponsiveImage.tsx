import { useState } from 'react';
import { assetPath } from '../../utils/assets';
import styles from './ResponsiveImage.module.css';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'auto';
  objectFit?: 'cover' | 'contain';
  lazy?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ResponsiveImage({
  src,
  alt,
  caption,
  credit,
  width,
  height,
  aspectRatio = 'auto',
  objectFit = 'cover',
  lazy = true,
  fullWidth = false,
  onClick,
  className = '',
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const resolvedSrc = assetPath(src);

  const ratioClass = aspectRatio !== 'auto' ? styles[aspectRatio] : '';

  if (error) {
    return (
      <div className={`${styles.placeholder} ${ratioClass} ${className}`}>
        <span className={styles.placeholderText}>Image not available</span>
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    );
  }

  return (
    <figure
      className={`${styles.figure} ${fullWidth ? styles.fullWidth : ''} ${className}`}
    >
      <div
        className={`${styles.imageWrapper} ${ratioClass}`}
        style={objectFit === 'contain' ? { backgroundColor: 'var(--color-bg)' } : undefined}
      >
        <img
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${styles.image} ${loaded ? styles.loaded : ''}`}
          style={{ objectFit }}
          onClick={onClick}
          role={onClick ? 'button' : undefined}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
        />
      </div>
      {(caption || credit) && (
        <figcaption className={styles.caption}>
          {caption}
          {credit && <span className={styles.credit}> — {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
