const experiences = [
  { period: "2024 — aujourd’hui", role: "Intitulé du poste", company: "Entreprise · Ville", text: "Décris ici une mission importante et son résultat concret. Ajoute des chiffres quand tu en as." },
  { period: "2022 — 2024", role: "Autre expérience", company: "Entreprise · Ville", text: "Présente une responsabilité, une compétence développée ou une réussite dont tu es fier·e." },
];

const projects = [
  { number: "01", category: "Projet personnel", title: "Un projet qui te ressemble", text: "Explique le besoin, ton rôle et ce que tu as appris.", tags: ["Créativité", "Autonomie"] },
  { number: "02", category: "Engagement", title: "Une expérience en dehors du travail", text: "Association, bénévolat, sport, création ou autre engagement.", tags: ["Équipe", "Initiative"] },
];

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesProject = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io");
const basePath = isGitHubPagesProject ? `/${repository}` : "";

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Navigation principale">
      <a className="wordmark" href="#top">PN<span>.</span></a>
      <div className="nav-links"><a href="#parcours">Parcours</a><a href="#projets">Projets</a><a href="#contact">Contact</a></div>
      <a className="nav-cta" href={`${basePath}/portfolio.pdf`} download>Télécharger le PDF <span aria-hidden="true">↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <p className="eyebrow"><span className="status-dot" /> DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS</p>
      <h1>Bonjour, moi c’est<br /><span>Prénom Nom.</span></h1>
      <div className="hero-bottom"><p className="intro">Je suis <strong>ton métier ou ta spécialité</strong>. Je transforme les idées en projets concrets, avec curiosité et attention aux détails.</p><a className="round-link" href="#parcours" aria-label="Découvrir mon parcours">↓</a></div>
      <div className="hero-note">PORTFOLIO · 2026</div>
    </section>

    <section className="section shell" id="parcours">
      <div className="section-heading"><div><p className="eyebrow">01 / CE QUE J’AI FAIT</p><h2>Un parcours<br />en mouvement.</h2></div><p className="section-aside">Des expériences qui m’ont appris à avancer, collaborer et apporter des solutions utiles.</p></div>
      <div className="experience-list">{experiences.map((item) => <article className="experience" key={item.period}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p className="experience-text">{item.text}</p><span className="arrow">↗</span></article>)}</div>
    </section>

    <section className="projects-band" id="projets"><div className="shell section"><div className="section-heading"><div><p className="eyebrow">02 / AU-DELÀ DU CV</p><h2>Ce qui m’anime<br />aussi.</h2></div><p className="section-aside">Les projets personnels racontent une autre partie de mon histoire : mes idées, mes valeurs et ma façon de faire.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

    <section className="contact shell" id="contact"><p className="eyebrow">03 / ON EN PARLE ?</p><h2>Une idée, un poste,<br /><span>une belle rencontre.</span></h2><a className="email-link" href="mailto:bonjour@example.com">bonjour@example.com <span>↗</span></a><div className="contact-bottom"><p>Basé·e à Ville, France · Ouvert·e au télétravail</p><div><a href="https://www.linkedin.com/">LinkedIn ↗</a><a href="https://github.com/">GitHub ↗</a></div></div></section>

    <footer className="footer shell"><a className="wordmark" href="#top">PN<span>.</span></a><p>Fait avec soin · 2026</p><a href="#top">Retour en haut ↑</a></footer>
  </main>;
}
