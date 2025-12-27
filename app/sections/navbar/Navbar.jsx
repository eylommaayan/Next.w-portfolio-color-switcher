"use client";

import Image from "next/image";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/modal-context";
import "./navbar.css";

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  const handleLogoClick = (e) => {
    e.preventDefault(); // שלא ינסה ללכת ל-index.html
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo" onClick={handleLogoClick}>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={180}
            height={60}
            priority
          />
        </a>

        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <button id="theme__icon" onClick={showModalHandler} aria-label="Theme">
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
