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
    category: "SYSTÈMES · DURCISSEMENT",
    title: "Durcir, puis vérifier.",
    text: "Mise en pratique du durcissement de systèmes Linux et Windows dans un laboratoire virtualisé et cloisonné. J’évalue leur exposition avec OpenVAS et Nessus ; mes environnements Linux couvrent notamment Ubuntu, Debian, Red Hat et SUSE.",
    tags: ["Linux", "Windows", "OpenVAS", "Nessus"],
  },
  {
    number: "02",
    category: "RÉSEAU · IDENTITÉ",
    title: "Cloisonner et contrôler les accès.",
    text: "Configuration de VLAN et expérimentation de pare-feu logiciels (OPNsense, pfSense) et d’un équipement physique. Comparaison de WireGuard, OpenVPN et IPsec, puis choix de Tailscale pour l’accès distant. J’ai aussi monté un domaine Active Directory sous Windows Server 2022 et testé sa synchronisation avec Entra ID.",
    tags: ["VLAN", "OPNsense", "Windows Server", "Entra ID"],
  },
  {
    number: "03",
    category: "DÉTECTION · VULNÉRABILITÉS",
    title: "Rendre les signaux visibles.",
    text: "Tests de SIEM (Wazuh, Graylog), d’IDS/IPS (Suricata, Snort), de NDR et de honeypots. Pour mes conteneurs, Aqua Security lance une analyse quotidienne ; une alerte Telegram indique la criticité et le conteneur concerné.",
    tags: ["Wazuh", "Suricata", "Aqua Security", "Telegram"],
  },
  {
    number: "04",
    category: "VIRTUALISATION · SERVICES",
    title: "Construire une infrastructure résiliente.",
    text: "Comparaison de VMware ESXi avec vSphere/vCenter, Proxmox VE et Hyper-V. J’héberge Nextcloud avec Docker Compose et authentification renforcée, protège les accès web avec ModSecurity sur Nginx et automatise les sauvegardes avec restic. J’ai aussi expérimenté Kubernetes et Rancher.",
    tags: ["ESXi", "Proxmox", "Docker Compose", "restic"],
  },
];

const webProject = {
  category: "DÉVELOPPEMENT WEB · PROJET PERSONNEL",
  title: "Un menu digital, de la commande à la cuisine.",
  text: "Application de menu accessible par QR code, développée en HTML, CSS, JavaScript, PHP et MySQL. Une interface dédiée permet à l’équipe en cuisine de suivre les commandes et leurs mises à jour en temps réel.",
  tags: ["HTML / CSS", "JavaScript", "PHP", "MySQL"],
};

const expertise = [
  { title: "Logiciel embarqué", text: "C++, Qt, Linux embarqué, Yocto, U-Boot, communication réseau TCP/UDP, MQTT et ZeroMQ." },
  { title: "Cybersécurité", text: "Durcissement Linux/Windows, gestion CVE, OpenVAS/Nessus, SIEM, IDS/IPS, WAF et contrôle d’accès." },
  { title: "Infrastructure", text: "Windows Server 2022, Active Directory, Entra ID, Linux (Ubuntu, Debian, Red Hat, SUSE), virtualisation et conteneurs." },
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

    <section className="projects-band" id="projets">
      <div className="shell section">
        <div className="section-heading">
          <div><p className="eyebrow">02 / PROJETS PERSONNELS</p><h2>Apprendre en<br />construisant.</h2></div>
          <p className="section-aside">Un laboratoire personnel pour tester les systèmes, le réseau et la sécurité dans des environnements virtualisés, puis transformer ces essais en services concrets.</p>
        </div>
        <div className="lab-intro">
          <div className="lab-intro-mark"><span>LAB</span><strong>01—04</strong></div>
          <div><p className="eyebrow">LABORATOIRE INFRASTRUCTURE & CYBERSÉCURITÉ</p><h3>Voir l’infrastructure de bout en bout.</h3><p>Du système d’exploitation aux alertes, je monte des environnements de test pour comprendre comment les briques s’articulent : virtualisation, identité, réseau, détection et sauvegarde.</p></div>
        </div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <div className="project-top"><span>{project.number}</span><span>{project.category}</span></div>
          <h3>{project.title}</h3><p>{project.text}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
        <article className="web-project">
          <div className="web-project-number">05</div>
          <div className="web-project-copy"><p className="eyebrow">{webProject.category}</p><h3>{webProject.title}</h3><p>{webProject.text}</p></div>
          <div className="tags">{webProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
      </div>
    </section>

    <section className="section shell skills-section" id="competences">
      <div className="section-heading"><div><p className="eyebrow">03 / SAVOIR-FAIRE</p><h2>Mes domaines<br />de travail.</h2></div><p className="section-aside">Une base en développement logiciel et réseaux, complétée par une pratique de la cybersécurité et de l’infrastructure.</p></div>
      <div className="skills-grid">{expertise.map((item, index) => <article className="skill-card" key={item.title}><p className="skill-index">0{index + 1}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <div className="education-row"><div><p className="eyebrow">FORMATION</p><p><strong>Diplôme d’ingénieur · ESILV</strong><br />Cybersécurité & objets connectés · voie Architecture de services en réseau · cursus labellisé SecNumEdu.</p><p><strong>Spécialisation Réseau & Cybersécurité · RTU</strong><br />Rīgas Tehniskā Universitāte, Lettonie.</p></div><div><p className="eyebrow">LANGUES</p><p>Français · langue maternelle<br />Anglais · C2<br />Allemand · B2</p><p className="education-note">TryHackMe · parcours SOC Level 1</p></div></div>
    </section>

    <section className="contact shell" id="contact"><p className="eyebrow">04 / CONTACT</p><h2>Parlons de<br /><span>vos projets.</span></h2><a className="email-link" href="mailto:enzolusardi@gmail.com">enzolusardi@gmail.com <span>↗</span></a><div className="contact-bottom"><p>Ingénieur systèmes embarqués & cybersécurité</p><div><a href="https://github.com/Enzolus" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>

    <footer className="footer shell"><a className="wordmark" href="#top">EL<span>.</span></a><p>Portfolio professionnel · 2026</p><a href="#top">Retour en haut ↑</a></footer>
  </main>;
}
