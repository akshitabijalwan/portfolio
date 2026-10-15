import { useRef, useState, type MouseEvent, type PointerEvent, type WheelEvent } from 'react';
import { getProjects } from '../../data/projects';
import { Container } from '../layout/Container';
import { ProjectPreview } from './ProjectPreview';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  const projects = getProjects(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startScroll: number; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const scrollFrameRef = useRef<number | undefined>(undefined);
  const [dragging, setDragging] = useState(false);

  if (projects.length === 0) return null;

  const scrollToCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children.item(0) as HTMLElement | null;
    if (!firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left: Math.max(0, Math.min(maxScroll, track.scrollLeft + direction * distance)),
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || scrollFrameRef.current !== undefined) return;
    scrollFrameRef.current = requestAnimationFrame(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, track.scrollLeft / maxScroll)) : 1;
      track.style.setProperty('--carousel-progress', `${progress * 100}%`);
      scrollFrameRef.current = undefined;
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;
    event.preventDefault();
    track.scrollLeft += delta;
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest('button')) return;
    dragRef.current = { startX: event.clientX, startScroll: event.currentTarget.scrollLeft, moved: false };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const distance = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(distance) > 5) {
      drag.moved = true;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (drag.moved) event.currentTarget.scrollLeft = drag.startScroll - distance;
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.moved) suppressClickRef.current = true;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    setDragging(false);
  };

  const preventDraggedClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <section id="selected-work" className={styles.section}>
      <Container>
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>Case Studies</h2>
          <div className={styles.controls} aria-label="Carousel controls">
            <button type="button" onClick={() => scrollToCard(-1)} aria-label="Previous case study">←</button>
            <button type="button" onClick={() => scrollToCard(1)} aria-label="Next case study">→</button>
          </div>
        </div>
        <div
          ref={trackRef}
          className={`${styles.track} ${dragging ? styles.dragging : ''}`}
          role="region"
          aria-label="Case studies"
          aria-roledescription="carousel"
          onScroll={handleScroll}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onClickCapture={preventDraggedClick}
        >
          {projects.map((project, index) => (
            <div key={project.slug} className={styles.slide} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}`}>
              <ProjectPreview project={project} />
            </div>
          ))}
        </div>
        <div className={styles.progress} aria-hidden="true">
          <span />
        </div>
      </Container>
    </section>
  );
}
