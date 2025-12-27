import { links, socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>{fLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__copyright">
        <small>
          © {new Date().getFullYear()}
          <a
            href="https://www.more-ways.co.il/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginInline: "0.4rem" }}
          >
            More-Ways
          </a>
          | צבעים, גרפיקות קיר ועיצוב חללים
        </small>
        <br />
        <small>
          יצירת קשר:{" "}
          <a href="mailto:eylon@more-ways.co.il">eylon@more-ways.co.il</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
