import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { CardsCarousel } from '@/components/Highlights/HighLights';
import { Footer } from '@/components/Footer/Footer';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { LocationContact } from '@/components/LocationContact/LocationContact';

export default function HomePage() {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <CallToAction/>
      <CardsCarousel/>
      <LocationContact/>
      {/* <Footer/>
      <ColorSchemeToggle /> */}
    </>
  );
}
