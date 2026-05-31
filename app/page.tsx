import { Hero } from "@/components/sections/Hero";
import { CurrentCoordinates } from "@/components/sections/CurrentCoordinates";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { Firsts } from "@/components/sections/Firsts";
import { SayYesTo } from "@/components/sections/SayYesTo";
import { Sketchbook } from "@/components/sections/Sketchbook";
import { ThingsExploring } from "@/components/sections/ThingsExploring";
import { LettersToFuture } from "@/components/sections/LettersToFuture";
import { NotesFromStrangers } from "@/components/sections/NotesFromStrangers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentCoordinates />
      <JourneyTimeline />
      <Firsts />
      <SayYesTo />
      <Sketchbook />
      <ThingsExploring />
      <LettersToFuture />
      <NotesFromStrangers />
      <Contact />
    </>
  );
}
