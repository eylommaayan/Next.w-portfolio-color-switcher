"use client";

import { useEffect, useState } from "react";
import data from "./data";
import Nav from "./Nav";
import "./floating-nav.css";

export default function FloatingNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!Array.isArray(data)) return;

    const sections = data
      .map((item) => document.getElementById(item.link))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <ul id="floating__nav">
      {data.map((item) => (
        <Nav key={item.id} item={item} activeId={activeId} />
      ))}
    </ul>
  );
}
