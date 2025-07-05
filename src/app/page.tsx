import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import VisionAndMission from '@/components/Home/VisionAndMission';
import EventHighlights from '@/components/Home/EventHighlights';
import Roadmap from '@/components/Home/Roadmap';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <About />
      <VisionAndMission />
      <EventHighlights />
      <Roadmap />
    </main>
  );
}
