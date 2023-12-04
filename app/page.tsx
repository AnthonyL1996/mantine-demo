import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { CardsCarousel } from '@/components/Highlights/HighLights';
import { Footer } from '@/components/Footer/Footer';
import { Features } from '@/components/Features/Features';

export default function HomePage() {
  return (
    <>
    <Header/>
      <Hero />
      <Features/>
      <CardsCarousel/>
      <Footer/>
      <ColorSchemeToggle />
    </>
  );
}
