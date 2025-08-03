'use client'
import Hero from "@/components/sections/home/hero";
import Image from "next/image";
import HomepageSection from "@/components/layout/HomepageSection";
import Trendingnews from "@/components/layout/Trendingnews";
import Categories from "@/components/sections/home/Categories";
import SpecialEvents from "@/components/sections/home/SpecialEvents";
import Inspiration from "@/components/sections/home/Inspiration";
import Gallery from "@/components/sections/home/gallery";
import OurTeam from "@/components/sections/home/ourTeam";

export default function Home() {
  return (
    <div>
      <Hero/>
     <Trendingnews/>
     <Categories/>
     <SpecialEvents/>
     <Inspiration/>
     <Gallery/>
     <OurTeam/>
    </div>
  );
}
