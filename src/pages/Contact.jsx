import { useState } from "react";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import { company } from "../data/company";
import { useSEO } from "../lib/useSEO";
import styles from "./Contact.module.css";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  useSEO({
    title: "Let's Talk",
    description:
      "Have an idea, problem or opportunity you'd like to explore? Get in touch with HatwarTech to start a conversation.",
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
      <PageHero
        eyebrow="Let's Talk"
        title="Have an idea, problem or opportunity you'd like to explore?"
        description="Let's start with a conversation and see whether there's a useful way to work together — commercial work, a product collaboration, a research idea, or anything in between."
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Get in touch</h2>
            <p className={styles.infoText}>
              Reach out directly, or send a message using the form and I'll
              respond as soon as I can.
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
                      HatwarTech
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
