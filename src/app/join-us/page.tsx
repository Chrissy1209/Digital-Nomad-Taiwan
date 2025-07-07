import Hero from "@/components/JoinUs/Hero";

import CultureValues from "@/components/JoinUs/CultureValues";
import Roles from "@/components/JoinUs/Roles";
import OpenPositions from "@/components/JoinUs/OpenPositions";
import ApplicationProcess from "@/components/JoinUs/ApplicationProcess";
import OurMembers from "@/components/JoinUs/OurMembers";
import Final from "@/components/JoinUs/Final";

export default function JoinUs() {
  return (
    <main>
      <Hero />

      <CultureValues />
      <Roles />
      <OpenPositions />
      <ApplicationProcess />
      <OurMembers />
      <Final />
    </main>
  );
}
