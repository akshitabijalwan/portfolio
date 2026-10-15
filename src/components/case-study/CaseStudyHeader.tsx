import type { CaseStudy } from '../../types/case-study';
import { Container } from '../layout/Container';
import { ResponsiveImage } from '../shared/ResponsiveImage';
import styles from './CaseStudyHeader.module.css';

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

const synxStorePreviewImages = [
  {
    src: 'projects/synx-store/brand-guidelines.png',
    alt: 'Synx Store identity guidelines showing its logos, palette, and typography',
  },
  {
    src: 'projects/synx-store/social-media-guidelines.png',
    alt: 'Synx Store social media guidelines with post examples and visual direction',
  },
];

const referMePreviewImages = [
  { src: 'projects/referme/outdoor-campaign.jpg', alt: 'ReferMe outdoor campaign' },
  { src: 'projects/referme/billboard-campaign.jpg', alt: 'ReferMe billboard campaign' },
  { src: 'projects/referme/outdoor-identity.jpg', alt: 'ReferMe outdoor identity applications' },
  { src: 'projects/referme/website.jpg', alt: 'ReferMe website concept' },
  { src: 'projects/referme/social-media.jpg', alt: 'ReferMe social media campaign' },
  { src: 'projects/referme/partner-campaign.jpg', alt: 'ReferMe partner campaign' },
  { src: 'projects/referme/app-brand-story.jpg', alt: 'ReferMe app and brand story' },
  { src: 'projects/referme/brand-applications.jpg', alt: 'ReferMe logo and campaign applications' },
  { src: 'projects/referme/expanded-palette.jpg', alt: 'ReferMe expanded digital color palette' },
];

const creativeAnalysisPreviewImages = [
  {
    src: 'projects/activewear-ad-analysis/research/h1c2-retention.png',
    alt: 'Viewer-retention curve for a longer-explanation creative variation',
  },
  {
    src: 'projects/activewear-ad-analysis/research/h1c3-brand-switch-retention.png',
    alt: 'Viewer-retention curve for the variation that moved to brand messaging earlier',
  },
];

function SynxReferMePreview() {
  return (
    <section className={styles.brandPreview} aria-label="Synx Store and ReferMe project previews">
      <a
        className={styles.brandPreviewCard}
        href="#/projects/synx-store-details"
        aria-label="Open the Synx Store case study"
      >
        <div className={styles.brandPreviewCopy}>
          <h2>Synx Store</h2>
          <p>Establish a cohesive brand identity and social media strategy to ensure consistent brand communication across touchpoints.</p>
        </div>
        <div className={styles.synxPreviewImages}>
          {synxStorePreviewImages.map((image) => (
            <ResponsiveImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              aspectRatio="landscape"
              objectFit="cover"
              lazy={false}
              className={styles.brandPreviewImage}
            />
          ))}
        </div>
        <span className={styles.brandPreviewAction}>View case study <span aria-hidden="true">↗</span></span>
      </a>

      <a
        className={styles.brandPreviewCard}
        href="#/projects/referme"
        aria-label="Open the ReferMe case study"
      >
        <div className={styles.brandPreviewCopy}>
          <h2>ReferMe</h2>
          <p>Developed a distinctive, cohesive brand identity to strengthen brand recognition and ensure visual consistency across touchpoints.</p>
        </div>
        <div className={styles.referMePreviewImages}>
          {referMePreviewImages.map((image) => (
            <ResponsiveImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              aspectRatio="landscape"
              objectFit="cover"
              lazy={false}
              className={styles.brandPreviewImage}
            />
          ))}
        </div>
        <span className={styles.brandPreviewAction}>View case study <span aria-hidden="true">↗</span></span>
      </a>
    </section>
  );
}

function ActivewearAnalysisPreview() {
  return (
    <section className={styles.brandPreview} aria-label="Two activewear advertising analyses">
      <a
        className={styles.brandPreviewCard}
        href="#/projects/activewear-ad-set"
        aria-label="Open the ad-set creative research case study"
      >
        <div className={styles.brandPreviewCopy}>
          <h2>Ad Analysis Within Ad Sets</h2>
          <p>Find which hooks hold attention and where pacing or unclear messaging loses viewers.</p>
        </div>
        <div className={styles.activewearPreviewImages}>
          {creativeAnalysisPreviewImages.map((image) => (
            <ResponsiveImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              aspectRatio="auto"
              objectFit="contain"
              lazy={false}
              className={styles.brandPreviewImage}
            />
          ))}
        </div>
        <span className={styles.brandPreviewAction}>View analysis <span aria-hidden="true">↗</span></span>
      </a>

      <a
        className={styles.brandPreviewCard}
        href="#/projects/activewear-campaign-performance"
        aria-label="Open the campaign performance analysis case study"
      >
        <div className={styles.brandPreviewCopy}>
          <h2>Campaign Performance Analysis</h2>
          <p>Compare eight ads across hook, hold, clicks, conversions, and watch time.</p>
        </div>
        <ResponsiveImage
          src="projects/activewear-ad-analysis/hero.svg"
          alt="Performance signals comparing campaign attention and conversion"
          aspectRatio="landscape"
          objectFit="cover"
          lazy={false}
          className={styles.brandPreviewImage}
        />
        <span className={styles.brandPreviewAction}>View analysis <span aria-hidden="true">↗</span></span>
      </a>
    </section>
  );
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  const hasDetails = Boolean(caseStudy.role || caseStudy.duration || caseStudy.collaborators);

  return (
    <header className={styles.header}>
      <Container>
        {caseStudy.brand && <p className={styles.brand}>{caseStudy.brand}</p>}
        <h1 className={styles.title}>{caseStudy.title}</h1>

        {hasDetails && (
          <div className={styles.details}>
            {caseStudy.role && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Role</span>
                <span className={styles.detailValue}>{caseStudy.role}</span>
              </div>
            )}
            {caseStudy.duration && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Duration</span>
                <span className={styles.detailValue}>{caseStudy.duration}</span>
              </div>
            )}
            {caseStudy.collaborators && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Collaborators</span>
                <span className={styles.detailValue}>{caseStudy.collaborators}</span>
              </div>
            )}
          </div>
        )}

        {caseStudy.slug === 'synx-store' ? (
          <SynxReferMePreview />
        ) : caseStudy.slug === 'activewear-ad-analysis' ? (
          <ActivewearAnalysisPreview />
        ) : caseStudy.heroImage && (
          <div className={`${styles.heroImage} ${caseStudy.slug === 'social-media-communications' ? styles.heroImageLeft : ''}`}>
            <ResponsiveImage
              src={caseStudy.heroImage.src}
              alt={caseStudy.heroImage.alt}
              aspectRatio="auto"
              objectFit="contain"
              lazy={false}
              className={styles.heroVisual}
            />
          </div>
        )}
      </Container>
    </header>
  );
}
