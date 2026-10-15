import { useEffect, useRef, useState } from 'react';
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
  visualTone?: 'baby';
  galleriesFirst?: boolean;
}

function EditorialGallery({
  groupHeading,
  heading,
  headingLevel = 2,
  description,
  images,
  aspectRatio = 'landscape',
  social = false,
  onOpen,
}: {
  groupHeading?: string;
  heading?: string;
  headingLevel?: 2 | 3;
  description?: string;
  images: { src: string; alt: string; caption?: string }[];
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'auto';
  social?: boolean;
  onOpen: (index: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const HeadingTag = headingLevel === 3 ? 'h3' : 'h2';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((current) => {
          const next = new Set(current);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number((entry.target as HTMLElement).dataset.galleryIndex);
              next.add(index);
              observer.unobserve(entry.target);
            }
          });
          return [...next];
        });
      },
      { root: track, threshold: 0.2 }
    );

    track.querySelectorAll('[data-gallery-index]').forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.gallerySection} ${social ? styles.socialStreamGallery : ''} ${social && aspectRatio === 'portrait' ? styles.socialPortraitGallery : ''}`}>
      {groupHeading && <h2 className={styles.socialGalleryGroupHeading}>{groupHeading}</h2>}
      {heading && <HeadingTag className={styles.sectionHeading}>{heading}</HeadingTag>}
      {description && <p className={styles.socialStreamDescription}>{description}</p>}
      <p className={styles.galleryHint}>
        {social ? 'Swipe or scroll through this content stream' : 'Scroll to explore the visuals'}
        <span aria-hidden="true">→</span>
      </p>
      <div className={styles.editorialTrack} ref={trackRef}>
        {images.map((img, index) => (
          <article
            key={img.src}
            data-gallery-index={index}
            className={`${styles.editorialCard} ${social ? styles.socialStreamCard : ''} ${visibleCards.includes(index) ? styles.cardVisible : ''}`}
          >
            <div className={styles.cardMeta}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span aria-hidden="true">/ {String(images.length).padStart(2, '0')}</span>
            </div>
            <ResponsiveImage
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              aspectRatio={aspectRatio}
              objectFit="contain"
              onClick={() => onOpen(index)}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudySections({
  overview,
  challenge,
  objectives,
  responsibilities,
  sections,
  visualTone,
  galleriesFirst = false,
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

  const renderGallery = (
    section: Extract<CaseStudySection, { type: 'image-gallery' }>,
    idx: number
  ) => {
    if (section.layout === 'editorial-rail' || section.layout === 'social-carousel') {
      return (
        <Container key={`gallery-${idx}`}>
          <EditorialGallery
            groupHeading={section.groupHeading}
            heading={section.heading}
            headingLevel={section.headingLevel}
            description={section.description}
            images={section.images}
            aspectRatio={section.aspectRatio}
            social={section.layout === 'social-carousel'}
            onOpen={(imageIndex) =>
              openLightbox(
                section.images.map((image) => ({
                  src: image.src,
                  alt: image.alt,
                  caption: image.caption,
                })),
                imageIndex
              )
            }
          />
        </Container>
      );
    }

    return (
      <Container key={`gallery-${idx}`}>
        <section
          className={`${styles.gallerySection} ${
            visualTone === 'baby' ? styles.babyGallerySection : ''
          }`}
        >
          {section.heading && <h2 className={styles.sectionHeading}>{section.heading}</h2>}
          <div className={styles.gallery}>
            {section.images.map((img, imgIdx) => {
              const image = (
                <ResponsiveImage
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
              );

              return visualTone === 'baby' ? (
                <article className={styles.babyGalleryCard} key={imgIdx}>
                  <span className={styles.babyGalleryMeta}>
                    <span>CAROUSEL SLIDE</span>
                    <span>
                      {String(imgIdx + 1).padStart(2, '0')} /{' '}
                      {String(section.images.length).padStart(2, '0')}
                    </span>
                  </span>
                  {image}
                </article>
              ) : (
                <div key={imgIdx}>{image}</div>
              );
            })}
          </div>
        </section>
      </Container>
    );
  };

  return (
    <div className={styles.sections}>
      {galleriesFirst &&
        sections.map((section, idx) =>
          section.type === 'image-gallery' ? renderGallery(section, idx) : null
        )}

      {/* Overview */}
      {overview.trim() && (
        <Container narrow>
          <section className={styles.textSection}>
            <h2 className={styles.sectionHeading}>Overview</h2>
            <p className={styles.body}>{overview}</p>
          </section>
        </Container>
      )}

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
                <li key={i} className={styles.objectiveItem}>
                  <span className={styles.objectiveIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.objectiveText}>{obj}</span>
                </li>
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
                <li key={i} className={styles.objectiveItem}>
                  <span className={styles.objectiveIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.objectiveText}>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      )}

      {/* Dynamic sections */}
      {sections.map((section, idx) => {
        if (galleriesFirst && section.type === 'image-gallery') return null;
        switch (section.type) {
          case 'text':
            return (
              <Container narrow={!visualTone || section.layout !== 'callout'} key={idx}>
                <section className={`${styles.textSection} ${visualTone === 'baby' && section.layout === 'callout' ? styles.babyObjectiveCallout : ''}`}>
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
              <Container key={idx}>
                <section className={styles.documentSection}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                <ResponsiveImage
                  src={section.image.src}
                  alt={section.image.alt}
                  caption={section.image.caption}
                  objectFit="contain"
                  className={styles.documentImage}
                  onClick={() =>
                    openLightbox(
                      [{ src: section.image.src, alt: section.image.alt, caption: section.image.caption }],
                      0
                    )
                  }
                />
                </section>
              </Container>
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
            return renderGallery(section, idx);

          case 'pull-quote':
            return (
              <Container narrow={!visualTone} key={idx}>
                <blockquote className={`${styles.pullQuote} ${visualTone === 'baby' ? styles.babyCoreChallenge : ''}`}>
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
              <Container narrow={!visualTone} key={idx}>
                <section className={`${styles.deliverablesSection} ${visualTone === 'baby' ? styles.babyDeliverables : ''} ${visualTone === 'baby' && section.layout === 'three-up' ? styles.babyThreeUpPoints : ''}`}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  <ul className={styles.deliverablesList}>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.deliverablesItem}>
                        <span className={styles.deliverableNumber} aria-hidden="true">
                          {String(itemIdx + 1).padStart(2, '0')}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Container>
            );

          case 'strategy-framework':
            return (
              <Container key={idx}>
                <section className={styles.strategyFramework}>
                  <div className={styles.strategyFrameworkIntro}>
                    <span className={styles.analysisKicker}>A repeatable approach · six steps</span>
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                    {section.overview && <p className={styles.body}>{section.overview}</p>}
                    <p className={styles.body}>{section.intro}</p>
                  </div>
                  <div className={styles.strategySteps}>
                    {section.steps.map((step, stepIdx) => (
                      <article className={styles.strategyStep} key={step.title}>
                        <div className={styles.strategyStepHeading}>
                          <span className={styles.strategyStepNumber}>{String(stepIdx + 1).padStart(2, '0')}</span>
                          <div>
                            <h3>{step.title}</h3>
                            <p>{step.summary}</p>
                          </div>
                        </div>
                        {step.brandNotes && step.brandNotes.length > 0 && (
                          <div className={styles.strategyBrandGrid}>
                            {step.brandNotes.map((note) => (
                              <div
                                className={`${styles.strategyBrandCard} ${
                                  note.tone === 'mother'
                                    ? styles.strategyMother
                                    : note.tone === 'malini'
                                      ? styles.strategyMalini
                                      : styles.strategyZooby
                                }`}
                                key={note.brand}
                              >
                                <span>{note.brand}</span>
                                <p>{note.body}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {step.callout && <p className={styles.strategyCallout}>{step.callout}</p>}
                      </article>
                    ))}
                  </div>
                </section>
              </Container>
            );

          case 'campaign-analysis':
            return (
              <Container key={idx}>
                <section className={styles.analysisSection}>
                  <div className={styles.analysisIntro}>
                    <span className={styles.analysisKicker}>Paid-social readout · {section.rows.length} ads</span>
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                    <p className={styles.body}>{section.intro}</p>
                  </div>

                  <div className={styles.analysisSpotlights}>
                    <article className={`${styles.spotlight} ${styles.spotlightLime}`}>
                      <span className={styles.spotlightLabel}>Highest conversion rate</span>
                      <strong>5.11%</strong>
                      <span className={styles.spotlightFoot}>201 conversions · 3,933 link clicks</span>
                      <span className={styles.spotlightAd}>POD1 · direct response</span>
                    </article>
                    <article className={`${styles.spotlight} ${styles.spotlightDark}`}>
                      <span className={styles.spotlightLabel}>Strongest hold rate</span>
                      <strong>46.18%</strong>
                      <span className={styles.spotlightFoot}>0:19 average watch · 3.94% conversion</span>
                      <span className={styles.spotlightAd}>#56 V1 · high curiosity</span>
                    </article>
                    <article className={`${styles.spotlight} ${styles.spotlightPeach}`}>
                      <span className={styles.spotlightLabel}>Most link clicks</span>
                      <strong>6,398</strong>
                      <span className={styles.spotlightFoot}>209 conversions · 3.27% conversion</span>
                      <span className={styles.spotlightAd}>POD4 · broad reach</span>
                    </article>
                  </div>

                  <div className={styles.tableHeading}>
                    <div>
                      <span className={styles.analysisKicker}>Eight ads · side-by-side</span>
                      <h3>Attention is not the finish line</h3>
                    </div>
                    <span className={styles.tableLegend}>Rates shown as reported</span>
                  </div>
                  <div className={styles.tableScroller} role="region" aria-label="Campaign ad performance table" tabIndex={0}>
                    <table className={styles.analysisTable}>
                      <thead><tr>
                        <th scope="col">Ad</th><th scope="col">Hook</th><th scope="col">Hold</th><th scope="col">Link clicks</th><th scope="col">Conversions</th><th scope="col">Conv. rate</th><th scope="col">Avg. watch</th>
                      </tr></thead>
                      <tbody>
                        {section.rows.map((row) => (
                          <tr key={row.ad}>
                            <th scope="row"><span className={styles.adCode}>{row.ad}</span><span className={styles.rowRead}>{row.read}</span></th>
                            <td><span className={styles.rateCell}>{Math.round(row.hook * 100)}%</span><span className={styles.miniBar}><i style={{ width: `${Math.round(row.hook * 100)}%` }} /></span></td>
                            <td><span className={styles.rateCell}>{row.hold.toFixed(2)}%</span><span className={styles.miniBar}><i style={{ width: `${Math.min(row.hold * 2, 100)}%` }} /></span></td>
                            <td>{row.clicks.toLocaleString('en-US')}</td><td>{row.conversions}</td><td className={styles.conversionCell}>{row.conversionRate.toFixed(2)}%</td><td>{row.watchTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.findingsHeader}>
                    <span className={styles.analysisKicker}>What the analysis uncovered</span>
                    <h3>Creative choices changed the quality of attention</h3>
                  </div>
                  <div className={styles.findingsGrid}>
                    {section.findings.map((finding) => (
                      <article className={styles.findingCard} key={finding.title}>
                        {finding.metric && <span className={styles.findingMetric}>{finding.metric}</span>}
                        <span className={styles.findingEyebrow}>{finding.eyebrow}</span>
                        <h4>{finding.title}</h4>
                        <p>{finding.body}</p>
                      </article>
                    ))}
                  </div>

                  {section.comparison && section.comparison.length > 0 && <div className={styles.retentionPanel}>
                    <div className={styles.findingsHeader}>
                      <span className={styles.analysisKicker}>Separate ad-set video comparison</span>
                      <h3>A measurable lift when the story gets to the point</h3>
                      <p className={styles.body}>Two video snapshots from the supporting analysis. Both lose viewers quickly at the start; the second holds a larger share through the key moment.</p>
                    </div>
                    <div className={styles.retentionGrid}>
                      {section.comparison.map((item) => (
                        <article className={styles.retentionCard} key={item.title}>
                          <div className={styles.retentionTitle}><span>{item.label}</span><strong>{item.title}</strong></div>
                          <div className={styles.retentionMetrics}>
                            <span><b>{item.plays}</b> plays</span><span><b>{item.averageWatch}</b> avg. watch</span>
                          </div>
                          <div className={styles.retentionBars}>
                            <div><span>Hook rate</span><div className={styles.barTrack}><i style={{ width: item.hook }} /></div><b>{item.hook}</b></div>
                            <div><span>Hold rate</span><div className={styles.barTrack}><i style={{ width: item.hold }} /></div><b>{item.hold}</b></div>
                          </div>
                          <p>{item.note}</p>
                        </article>
                      ))}
                    </div>
                  </div>}
                  <p className={styles.claimNote}>The source material evaluates advertising performance and messaging. Health-related statements appearing in campaign scripts are treated here as creative claims and have not been independently verified.</p>
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
