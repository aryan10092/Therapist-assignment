import Hero from "@/app/components/Hero";
import Image from "next/image";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Services />
      <FAQ/>
      <Contact />
      <Footer />
  </main>
  );
}
