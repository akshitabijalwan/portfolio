import { useState } from 'react';
import type { CaseStudySection } from '../../types/case-study';
import { Container } from '../layout/Container';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import { Lightbox } from '../shared/Lightbox';
import styles from './CaseStudySections.module.css';

interface CaseStudySectionsProps {
  overview: string;
  challenge?: string;
  objectives?: string[];
  responsibilities?: string[];
  sections: CaseStudySection[];
}

export function CaseStudySections({
  overview,
  challenge,
  objectives,
  responsibilities,
  sections,
}: CaseStudySectionsProps) {
  const [lightboxImages, setLightboxImages] = useState<
    { src: string; alt: string; caption?: string }[]
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (
    images: { src: string; alt: string; caption?: string }[],
    index: number
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  return (
    <div className={styles.sections}>
      {/* Overview */}
      <Container narrow>
        <section className={styles.textSection}>
          <h2 className={styles.sectionHeading}>Overview</h2>
          <p className={styles.body}>{overview}</p>
        </section>
      </Container>

      {/* Challenge */}
      {challenge && (
        <Container narrow>
          <section className={styles.textSection}>
            <h2 className={styles.sectionHeading}>The Challenge</h2>
            <p className={styles.body}>{challenge}</p>
          </section>
        </Container>
      )}

      {/* Objectives */}
      {objectives && objectives.length > 0 && (
        <Container narrow>
          <section className={styles.textSection}>
            <h2 className={styles.sectionHeading}>Objectives</h2>
            <ul className={styles.objectivesList}>
              {objectives.map((obj, i) => (
                <li key={i} className={styles.objectiveItem}>{obj}</li>
              ))}
            </ul>
          </section>
        </Container>
      )}

      {/* Responsibilities */}
      {responsibilities && responsibilities.length > 0 && (
        <Container narrow>
          <section className={styles.textSection}>
            <h2 className={styles.sectionHeading}>Responsibilities</h2>
            <ul className={styles.objectivesList}>
              {responsibilities.map((r, i) => (
                <li key={i} className={styles.objectiveItem}>{r}</li>
              ))}
            </ul>
          </section>
        </Container>
      )}

      {/* Dynamic sections */}
      {sections.map((section, idx) => {
        switch (section.type) {
          case 'text':
            return (
              <Container narrow key={idx}>
                <section className={styles.textSection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <p className={styles.body}>{section.body}</p>
                </section>
              </Container>
            );

          case 'text-with-image':
            return (
              <Container key={idx}>
                <section
                  className={`${styles.textWithImage} ${
                    section.imagePosition === 'left' ? styles.imageLeft : ''
                  }`}
                >
                  <div className={styles.textWithImageText}>
                    {section.heading && (
                      <h2 className={styles.sectionHeading}>{section.heading}</h2>
                    )}
                    <p className={styles.body}>{section.body}</p>
                  </div>
                  <div className={styles.textWithImageImage}>
                    <ResponsiveImage
                      src={section.image.src}
                      alt={section.image.alt}
                      caption={section.image.caption}
                      onClick={() =>
                        openLightbox(
                          [{ src: section.image.src, alt: section.image.alt, caption: section.image.caption }],
                          0
                        )
                      }
                    />
                  </div>
                </section>
              </Container>
            );

          case 'full-width-image':
            return (
              <div key={idx} className={styles.fullWidthImageSection}>
                <ResponsiveImage
                  src={section.image.src}
                  alt={section.image.alt}
                  caption={section.image.caption}
                  fullWidth
                  onClick={() =>
                    openLightbox(
                      [{ src: section.image.src, alt: section.image.alt, caption: section.image.caption }],
                      0
                    )
                  }
                />
              </div>
            );

          case 'two-column-images':
            return (
              <Container key={idx}>
                <section className={styles.twoColumnImages}>
                  {section.images.map((img, imgIdx) => (
                    <ResponsiveImage
                      key={imgIdx}
                      src={img.src}
                      alt={img.alt}
                      caption={img.caption}
                      onClick={() =>
                        openLightbox(
                          section.images.map((i) => ({ src: i.src, alt: i.alt, caption: i.caption })),
                          imgIdx
                        )
                      }
                    />
                  ))}
                </section>
              </Container>
            );

          case 'image-gallery':
            return (
              <Container key={idx}>
                <section className={styles.gallerySection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <div className={styles.gallery}>
                    {section.images.map((img, imgIdx) => (
                      <ResponsiveImage
                        key={imgIdx}
                        src={img.src}
                        alt={img.alt}
                        caption={img.caption}
                        onClick={() =>
                          openLightbox(
                            section.images.map((i) => ({ src: i.src, alt: i.alt, caption: i.caption })),
                            imgIdx
                          )
                        }
                      />
                    ))}
                  </div>
                </section>
              </Container>
            );

          case 'pull-quote':
            return (
              <Container narrow key={idx}>
                <blockquote className={styles.pullQuote}>
                  <p className={styles.quoteText}>{section.quote}</p>
                  {section.attribution && (
                    <cite className={styles.quoteAttribution}>
                      {section.attribution}
                    </cite>
                  )}
                </blockquote>
              </Container>
            );

          case 'statistics':
            return (
              <Container key={idx}>
                <section className={styles.statsSection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <div className={styles.statsGrid}>
                    {section.stats.map((stat, statIdx) => (
                      <div key={statIdx} className={styles.statItem}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                        {stat.description && (
                          <span className={styles.statDesc}>{stat.description}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </Container>
            );

          case 'timeline':
            return (
              <Container narrow key={idx}>
                <section className={styles.timelineSection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <div className={styles.timeline}>
                    {section.entries.map((entry, entryIdx) => (
                      <div key={entryIdx} className={styles.timelineEntry}>
                        <span className={styles.timelinePhase}>{entry.phase}</span>
                        <p className={styles.timelineDesc}>{entry.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Container>
            );

          case 'deliverables':
            return (
              <Container narrow key={idx}>
                <section className={styles.deliverablesSection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <ul className={styles.deliverablesList}>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.deliverablesItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Container>
            );

          default:
            return null;
        }
      })}

      {/* Lightbox */}
      {lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
