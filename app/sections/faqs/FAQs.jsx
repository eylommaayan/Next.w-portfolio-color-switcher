"use client";

import { useEffect } from "react";
import faqs from "./data";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import "./faqs.css";

export default function FAQs() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="faqs">
      <h2>שאלות נפוצות לפני צביעה</h2>
      <p>
        כאן ריכזתי שאלות שלקוחות שואלים לפני תחילת עבודה. לחצו על שאלה כדי לפתוח
        תשובה, ואם נשארו שאלות – דברו איתי דרך יצירת קשר.
      </p>

      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
