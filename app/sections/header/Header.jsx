"use client";

import { useEffect } from "react";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src="/assets/header.png" alt="צביעת קירות ועיצוב פנים" />
        </div>

        <h3 data-aos="fade-up">צביעת בתים & גרפיקות קיר</h3>

        <p data-aos="fade-up">
          הופכים קירות פשוטים לחללים מעוצבים ומלאי אופי. צביעת בתים, קירות
          דקורטיביים וגרפיקות קיר בהתאמה אישית – כדי שתוכלו לראות איך הבית שלכם
          מרגיש באמת.
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            קבל הצעת מחיר
          </a>
          <a href="#portfolio" className="btn light">
            עבודות שביצענו
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
