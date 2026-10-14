import { siteConfig } from '../../data/site';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Capabilities.module.css';

export function Capabilities() {
  const { capabilities } = siteConfig;

  if (capabilities.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          label="Expertise"
          title="Capabilities"
        />
        <ul className={styles.list}>
          {capabilities.map((capability) => (
            <li key={capability} className={styles.item}>
              {capability}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
