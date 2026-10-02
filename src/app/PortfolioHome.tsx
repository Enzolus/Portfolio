"use client";

import { useEffect, useState } from "react";
import { translations, type Language } from "./translations";

const languageOptions: { code: Language; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

function detectLanguage(): Language {
  const preferences = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const preference of preferences) {
    const languageCode = preference.toLowerCase().split("-")[0];
    if (languageCode === "fr" || languageCode === "de" || languageCode === "en") return languageCode;
  }
  return "en";
}

function isLanguage(value: string | null): value is Language {
  return value === "fr" || value === "en" || value === "de";
}

export default function PortfolioHome({ basePath }: { basePath: string }) {
  const [language, setLanguage] = useState<Language>("fr");
  const t = translations[language];

  useEffect(() => {
    let selected: Language;
    try {
      const savedPreference = window.localStorage.getItem("portfolio-language");
      selected = isLanguage(savedPreference) ? savedPreference : detectLanguage();
    } catch {
      selected = detectLanguage();
    }
    setLanguage(selected);
    document.documentElement.lang = selected;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.metaDescription);
  }, [language, t.metaDescription, t.metaTitle]);

  function selectLanguage(selected: Language) {
    setLanguage(selected);
    document.documentElement.lang = selected;
    try {
      window.localStorage.setItem("portfolio-language", selected);
    } catch {
      // The language still changes for this visit if storage is unavailable.
    }
  }

  return <main>
    <nav className="nav shell" aria-label={t.nav.mainLabel}>
      <a className="wordmark" href="#top" aria-label="Enzo Lusardi, accueil">EL<span>.</span></a>
      <div className="nav-links">
        <a href="#parcours">{t.nav.experience}</a>
        <a href="#projets">{t.nav.projects}</a>
        <a href="#competences">{t.nav.skills}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>
      <div className="nav-actions">
        <div className="language-switcher" role="group" aria-label={t.languageLabel}>
          {languageOptions.map((option) => <button
            className="language-button"
            type="button"
            key={option.code}
            aria-label={option.label}
            aria-pressed={language === option.code}
            onClick={() => selectLanguage(option.code)}
          >{option.code.toUpperCase()}</button>)}
        </div>
        <a className="nav-cta" href={`${basePath}/portfolio.pdf`} download>
          {t.nav.download} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>

    <section className="hero shell" id="top">
      <p className="eyebrow"><span className="status-dot" /> {t.hero.eyebrow}</p>
      <h1>{t.hero.name}<br /><span>{t.hero.tagline}</span></h1>
      <div className="hero-bottom">
        <p className="intro">{t.hero.intro}</p>
        <a className="round-link" href="#parcours" aria-label={t.hero.down}>↓</a>
      </div>
      <div className="hero-note">{t.hero.note}</div>
    </section>

    <section className="section shell" id="parcours">
      <div className="section-heading">
        <div><p className="eyebrow">{t.experience.eyebrow}</p><h2>{t.experience.title[0]}<br />{t.experience.title[1]}</h2></div>
        <p className="section-aside">{t.experience.aside}</p>
      </div>
      <div className="experience-list">{t.experience.items.map((item) => <article className="experience" key={item.company}>
        <p className="period">{item.period}</p>
        <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
        <p className="experience-text">{item.text}</p>
        <span className="arrow" aria-hidden="true">↗</span>
      </article>)}</div>
    </section>

    <section className="projects-band" id="projets">
      <div className="shell section">
        <div className="section-heading">
          <div><p className="eyebrow">{t.projects.eyebrow}</p><h2>{t.projects.title[0]}<br />{t.projects.title[1]}</h2></div>
          <p className="section-aside">{t.projects.aside}</p>
        </div>
        <div className="lab-intro">
          <div className="lab-intro-mark"><span>LAB</span><strong>01—04</strong></div>
          <div><p className="eyebrow">{t.projects.labLabel}</p><h3>{t.projects.labTitle}</h3><p>{t.projects.labText}</p></div>
        </div>
        <div className="project-grid">{t.projects.items.map((project) => <article className="project-card" key={project.number}>
          <div className="project-top"><span>{project.number}</span><span>{project.category}</span></div>
          <h3>{project.title}</h3><p>{project.text}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
        <article className="web-project">
          <div className="web-project-number">05</div>
          <div className="web-project-copy"><p className="eyebrow">{t.projects.webCategory}</p><h3>{t.projects.webTitle}</h3><p>{t.projects.webText}</p></div>
          <div className="tags">{t.projects.webTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
      </div>
    </section>

    <section className="section shell skills-section" id="competences">
      <div className="section-heading">
        <div><p className="eyebrow">{t.skills.eyebrow}</p><h2>{t.skills.title[0]}<br />{t.skills.title[1]}</h2></div>
        <p className="section-aside">{t.skills.aside}</p>
      </div>
      <div className="skills-grid">{t.skills.expertise.map((item, index) => <article className="skill-card" key={item.title}>
        <p className="skill-index">0{index + 1}</p><h3>{item.title}</h3><p>{item.text}</p>
      </article>)}</div>
      <div className="education-row">
        <div><p className="eyebrow">{t.skills.educationLabel}</p>
          <p><strong>{t.skills.degree}</strong><br />{t.skills.degreeText}</p>
          <p><strong>{t.skills.exchange}</strong><br />{t.skills.exchangeText}</p>
        </div>
        <div><p className="eyebrow">{t.skills.languagesLabel}</p>
          <p>{t.skills.languages.map((item) => <span className="language-line" key={item}>{item}</span>)}</p>
          <p className="education-note">{t.skills.learning}</p>
        </div>
      </div>
    </section>

    <section className="contact shell" id="contact">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h2>{t.contact.title[0]}<br /><span>{t.contact.title[1]}</span></h2>
      <a className="email-link" href={`mailto:${t.contact.email}`}>{t.contact.email} <span>↗</span></a>
      <div className="contact-bottom"><p>{t.contact.role}</p><div><a href="https://github.com/Enzolus" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
    </section>

    <footer className="footer shell"><a className="wordmark" href="#top">EL<span>.</span></a><p>{t.footer}</p><a href="#top">{t.backToTop} ↑</a></footer>
  </main>;
}
