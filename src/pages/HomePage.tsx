import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/home/SelectedWork';
import { Contact } from '../components/home/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Contact />
    </main>
  );
}
