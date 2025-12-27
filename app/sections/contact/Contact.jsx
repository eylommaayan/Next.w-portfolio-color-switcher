"use client";

import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>יצירת קשר</h2>
      <p>
        רוצים הצעת מחיר או ייעוץ לצביעה וגרפיקות קיר? אפשר לפנות אליי באחת
        מהדרכים הבאות:
      </p>

      <div className="container contact__container" data-aos="fade-up">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.label}
            title={contact.label}
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
