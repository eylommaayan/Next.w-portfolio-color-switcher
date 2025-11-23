"use client";

import Navbar from "@/app/sections/navbar/Navbar";
import Header from "@/app/sections/header/Header";
import About from "@/app/sections/about/About";
import Services from "@/app/sections/services/Services";
import Portfolio from "@/app/sections/portfolio/Portfolio";
import Testimonials from "@/app/sections/testimonials/Testimonials";
import Contact from "@/app/sections/contact/Contact";
import Footer from "@/app/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
