import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/ui/Icon";
import { company } from "../data/company";
import { useSEO } from "../lib/useSEO";
import styles from "./Contact.module.css";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  useSEO({
    title: "Contact",
    description:
      "Get in touch with Hatwartech to explore how product thinking, data and AI can turn your idea into measurable business impact.",
    path: "/contact",
  });

  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className={styles.headerSection}>
        <div className={`container ${styles.headerInner}`}>
          <Badge>Contact Us</Badge>
          <h1 className={styles.headerTitle}>
            Let&rsquo;s build something meaningful together.
          </h1>
          <p className={styles.headerText}>
            Have a project in mind or want to explore an idea? We&rsquo;d love
            to hear from you.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Get in touch</h2>
            <p className={styles.infoText}>
              Reach out directly, or send a message using the form and we'll
              respond as soon as we can.
            </p>

            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoIcon}>
                  <Icon name="mail" size={18} />
                </span>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              {company.linkedin && company.linkedin !== "#" && (
                <li>
                  <span className={styles.infoIcon}>
                    <Icon name="linkedin" size={18} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>LinkedIn</span>
                    <a href={company.linkedin} target="_blank" rel="noreferrer noopener">
                      Hatwar Tech
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" variant="primary" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
