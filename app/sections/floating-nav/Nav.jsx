"use client";

export default function Nav({ item, activeId }) {
  if (!item) return null; // ✅ מגן מקריסה

  const isActive = activeId === item.link;

  const onClick = () => {
    const el = document.getElementById(item.link);
    if (!el) return;

    const OFFSET = 80; // תשנה אם ה-navbar שלך גבוה יותר
    const y = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={isActive ? "active" : ""}
        aria-label={item.name}
      >
        {item.icon}
      </button>
    </li>
  );
}
