"use client";

import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/app/context/theme-context";

import Navbar from "@/app/sections/navbar/Navbar";
import Header from "@/app/sections/header/Header";
import About from "@/app/sections/about/About";
import Services from "@/app/sections/services/Services";
import Testimonials from "@/app/sections/testimonials/Testimonials";
import Contact from "@/app/sections/contact/Contact";
import Footer from "@/app/sections/footer/Footer";
import Theme from "@/app/theme/Theme";
import FloatingNav from "@/app/sections/floating-nav/FloatingNav";
import RoomPreview from "./components/room/RoomPreview";
import FAQs from "@/app/sections/faqs/FAQs";

const WALL_COLORS: Record<string, string> = {
  "color-1": "#7c3aed",
  "color-2": "#22c55e",
  "color-3": "#2563eb",
  "color-4": "#db2777",
  "color-5": "#dc2626",
  "color-6": "#ca8a04",
};

export default function Home() {
  const { themeState } = useThemeContext();
  const wallColor = WALL_COLORS[themeState.primary] || "#7c3aed";
  const mainRef = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // מחזיר שלד/ריק כדי שלא יהיה mismatch
    return (
      <main className="color-1 bg-1">
        <Navbar />
        <Header />
      </main>
    );
  }

  return (
    <main
      ref={mainRef as any}
      className={`${themeState.primary} ${themeState.background}`}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <RoomPreview color={wallColor} />

      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      <FloatingNav />
    </main>
  );
}
