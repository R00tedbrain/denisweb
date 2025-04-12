import Image from "next/image";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Treatments from "./sections/Treatments";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Treatments />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
