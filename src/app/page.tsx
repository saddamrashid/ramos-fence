import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/OurStory";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Services />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ServiceAreas />
        {/* <Blog /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
