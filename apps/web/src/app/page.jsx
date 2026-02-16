import Header from "@/components/nbbt/Header";
import Hero from "@/components/nbbt/Hero";
import About from "@/components/nbbt/About";
import Services from "@/components/nbbt/Services";
import WhyChooseUs from "@/components/nbbt/WhyChooseUs";
import Testimonials from "@/components/nbbt/Testimonials";
import Contact from "@/components/nbbt/Contact";
import Footer from "@/components/nbbt/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
