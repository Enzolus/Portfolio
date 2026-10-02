# Portfolio personnel

Template de portfolio en français, réalisé avec Next.js et configuré pour une publication statique sur GitHub Pages.

## À personnaliser

1. Remplace « Prénom Nom », le métier, la ville et les coordonnées dans `src/app/page.tsx`.
2. Modifie les listes `experiences` et `projects` dans le même fichier.
3. Mets à jour le titre et la description dans `src/app/layout.tsx`.
4. Ajoute ton PDF sous `public/portfolio.pdf`.
5. Remplace les liens LinkedIn et GitHub par les tiens.

## Publier sur GitHub Pages

1. Crée un dépôt GitHub et envoie ce dossier sur la branche `main`.
2. Dans **Settings → Pages → Build and deployment**, sélectionne **GitHub Actions** comme source.
3. À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` construit et publie le site.
4. Pour un dépôt nommé `nom-utilisateur.github.io`, GitHub Pages utilisera le domaine racine. Pour un autre nom, le site sera publié sous `https://nom-utilisateur.github.io/nom-du-depot/`.

Le site est généré en fichiers statiques (`out/`). Il n'inclut pas de traitement serveur ; les animations CSS et les interactions côté navigateur restent possibles.

## Développement local

```bash
npm install
npm run dev
```

Pour produire l'export statique :

```bash
npm run build
```
