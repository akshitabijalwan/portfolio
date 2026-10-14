import { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { assetPath } from '../../utils/assets';
import styles from './Lightbox.module.css';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1)
        onNavigate(currentIndex + 1);
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  // Focus trap
  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      tabIndex={-1}
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X size={24} />
      </button>

      <div className={styles.content}>
        {images.length > 1 && currentIndex > 0 && (
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={() => onNavigate(currentIndex - 1)}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <div className={styles.imageContainer}>
          <img
            src={assetPath(current.src)}
            alt={current.alt}
            className={styles.image}
          />
          {current.caption && (
            <p className={styles.caption}>{current.caption}</p>
          )}
          {images.length > 1 && (
            <p className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>

        {images.length > 1 && currentIndex < images.length - 1 && (
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={() => onNavigate(currentIndex + 1)}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
    </div>
  );
}
