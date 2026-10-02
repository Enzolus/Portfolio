const experiences = [
  {
    period: "2026 · 8 mois",
    role: "Ingénieur systèmes embarqués",
    company: "Detectomat · Allemagne",
    text: "Évolution d’un système Linux embarqué sous Yocto et développement C++/Qt. Intégration des échanges TCP/UDP, MQTT et ZeroMQ, puis spécification et validation d’une configuration réseau multi-passerelles. La montée de version et la fonctionnalité réseau ont été livrées et validées par le client.",
  },
  {
    period: "2025 · 7 mois",
    role: "Ingénieur consultant · Smart Building & cybersécurité",
    company: "Setec IS",
    text: "Études et benchmarks techniques autour des infrastructures Smart Building et du contrôle d’accès. Rédaction de dossiers d’exploitation et contribution à des propositions intégrant des solutions réseau et de cybersécurité.",
  },
  {
    period: "2024 · 6 mois",
    role: "Assistant RSSI · Développement sécurité",
    company: "Euro-Information · La Française AM",
    text: "Développement d’un outil interne de gestion des vulnérabilités CVE, avec notifications et reporting Excel. Contribution à la sécurisation des accès et à la fiabilité des données d’inventaire CMDB. L’application et les rapports ont été mis à disposition des équipes.",
  },
];

const projects = [
  {
    number: "01",
    category: "Sécurité · Détection",
    title: "Laboratoire de cybersécurité",
    text: "Un environnement de test personnel pour expérimenter le durcissement des systèmes, la détection et la gestion des vulnérabilités : SIEM, IDS/IPS, honeypots et scans automatisés de conteneurs avec alertes.",
    tags: ["Wazuh", "Suricata", "Docker", "Python"],
  },
  {
    number: "02",
    category: "Infrastructure · Cloud privé",
    title: "Une infrastructure à la maison",
    text: "Virtualisation et services auto-hébergés : cloud Nextcloud, sauvegardes automatisées, réseau segmenté et accès distant sécurisé. Expérimentations autour de Windows Server, Active Directory et de la synchronisation avec Entra ID.",
    tags: ["Proxmox", "Nextcloud", "restic", "Tailscale"],
  },
  {
    number: "03",
    category: "Développement web",
    title: "Menu digital par QR code",
    text: "Conception d’une application web de menu digital, avec une interface de gestion permettant à l’équipe cuisine de suivre les commandes en temps réel.",
    tags: ["JavaScript", "PHP", "MySQL"],
  },
];

const expertise = [
  { title: "Logiciel embarqué", text: "C++, Qt, Linux embarqué, Yocto, U-Boot, communication réseau TCP/UDP, MQTT et ZeroMQ." },
  { title: "Cybersécurité", text: "Gestion CVE, scans de vulnérabilités, SIEM, IDS/IPS, WAF, contrôle d’accès et sécurité applicative." },
  { title: "Infrastructure", text: "Linux et Windows Server, Docker, Kubernetes, virtualisation, segmentation réseau, Terraform et Ansible." },
  { title: "Développement", text: "C#/.NET, React, Python, Bash, JavaScript, PHP/MySQL et outils de reporting." },
];

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesProject = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io");
const basePath = isGitHubPagesProject ? `/${repository}` : "";

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Navigation principale">
      <a className="wordmark" href="#top">EL<span>.</span></a>
      <div className="nav-links"><a href="#parcours">Parcours</a><a href="#projets">Projets</a><a href="#competences">Compétences</a><a href="#contact">Contact</a></div>
      <a className="nav-cta" href={`${basePath}/portfolio.pdf`} download>Télécharger le portfolio <span aria-hidden="true">↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <p className="eyebrow"><span className="status-dot" /> LOGICIEL EMBARQUÉ · RÉSEAUX · CYBERSÉCURITÉ</p>
      <h1>Enzo Lusardi.<br /><span>Du logiciel embarqué à la cybersécurité.</span></h1>
      <div className="hero-bottom"><p className="intro">Ingénieur diplômé de l’ESILV en cybersécurité et objets connectés, je développe des logiciels embarqués et des outils de sécurité. J’aime comprendre les systèmes de bout en bout, du firmware au réseau.</p><a className="round-link" href="#parcours" aria-label="Découvrir mon parcours">↓</a></div>
      <div className="hero-note">PORTFOLIO · 2026</div>
    </section>

    <section className="section shell" id="parcours">
      <div className="section-heading"><div><p className="eyebrow">01 / EXPÉRIENCE</p><h2>Construire,<br />sécuriser, livrer.</h2></div><p className="section-aside">Trois expériences complémentaires entre systèmes embarqués, conseil Smart Building et sécurité des systèmes d’information.</p></div>
      <div className="experience-list">{experiences.map((item) => <article className="experience" key={item.company}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p className="experience-text">{item.text}</p><span className="arrow" aria-hidden="true">↗</span></article>)}</div>
    </section>

    <section className="projects-band" id="projets"><div className="shell section"><div className="section-heading"><div><p className="eyebrow">02 / PROJETS PERSONNELS</p><h2>Apprendre en<br />construisant.</h2></div><p className="section-aside">Mes projets prolongent mon travail : expérimenter les technologies, relier les systèmes entre eux et documenter ce qui fonctionne.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

    <section className="section shell skills-section" id="competences">
      <div className="section-heading"><div><p className="eyebrow">03 / SAVOIR-FAIRE</p><h2>Mes domaines<br />de travail.</h2></div><p className="section-aside">Une base en développement logiciel et réseaux, complétée par une pratique de la cybersécurité et de l’infrastructure.</p></div>
      <div className="skills-grid">{expertise.map((item, index) => <article className="skill-card" key={item.title}><p className="skill-index">0{index + 1}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <div className="education-row"><div><p className="eyebrow">FORMATION</p><p><strong>Diplôme d’ingénieur · ESILV</strong><br />Cybersécurité & objets connectés · voie Architecture de services en réseau · cursus labellisé SecNumEdu.</p><p><strong>Spécialisation Réseau & Cybersécurité · RTU</strong><br />Rīgas Tehniskā Universitāte, Lettonie.</p></div><div><p className="eyebrow">LANGUES</p><p>Français · langue maternelle<br />Anglais · C2<br />Allemand · B2</p><p className="education-note">TryHackMe · parcours SOC Level 1</p></div></div>
    </section>

    <section className="contact shell" id="contact"><p className="eyebrow">04 / CONTACT</p><h2>Parlons de<br /><span>vos projets.</span></h2><a className="email-link" href="mailto:enzolusardi@gmail.com">enzolusardi@gmail.com <span>↗</span></a><div className="contact-bottom"><p>Ingénieur systèmes embarqués & cybersécurité</p><div><a href="https://github.com/Enzolus" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>

    <footer className="footer shell"><a className="wordmark" href="#top">EL<span>.</span></a><p>Portfolio professionnel · 2026</p><a href="#top">Retour en haut ↑</a></footer>
  </main>;
}
