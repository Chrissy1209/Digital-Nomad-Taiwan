import Hero from "@/components/JoinUs/Hero";

import CultureValues from "@/components/JoinUs/CultureValues";
import Roles from "@/components/JoinUs/Roles";
import OpenPositions from "@/components/JoinUs/OpenPositions";
import ApplicationProcess from "@/components/JoinUs/ApplicationProcess";
import Testimonials from "@/components/JoinUs/Testimonials";
import FinalCta from "@/components/JoinUs/FinalCta";

export default function JoinUs() {
  return (
    <main>
      <Hero />

      <CultureValues />
      <Roles />
      <OpenPositions />
      <ApplicationProcess />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
