import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { navLinks } from "../../data/navigation";
import { company } from "../../data/company";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <span className={styles.brand}>{company.name}</span>
          <p className={styles.tagline}>{company.positioning}</p>
          <span className={styles.builtBy}>
            Built by <Link to="/about">{company.founder.name}</Link>
          </span>
          {company.linkedin && company.linkedin !== "#" && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.social}
              aria-label={`${company.name} on LinkedIn`}
            >
              <Icon name="linkedin" size={18} />
            </a>
          )}
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Let&rsquo;s Connect</h3>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`mailto:${company.gmail}`}>{company.gmail}</a>
            </li>
            <li>
              <a href={company.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {year} {company.name}. All rights reserved.</span>
        <div className={styles.legal}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
