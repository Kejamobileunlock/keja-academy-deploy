
# KEJA Academy — Déploiement mobile (GitHub + Vercel)

Ce projet React (Vite) est prêt à être déployé **sans ordinateur**.
Tu peux l'uploader sur GitHub depuis ton téléphone et le déployer sur **Vercel**.

## Étapes rapides (téléphone)
1. Ouvre GitHub dans ton navigateur mobile → **New repository** → `keja-academy`.
2. Clique **Add file → Upload files** et envoie tout le contenu du dossier (ou le .zip).
3. Va sur **Vercel** (app ou site) → **Add New → Project** → choisis `keja-academy`.
4. Vercel détecte Vite automatiquement → Build: `vite build`, Output: `dist` → **Deploy**.

## Commandes (si tu utilises Termux/iSH plus tard)
```bash
npm install
npm run build
```

## Personnalisation
- Le bouton **Commencer maintenant** et le logo WhatsApp ouvrent: `https://wa.me/22943050611` avec un message pré-rempli.
- Modifie le contenu dans `src/App.jsx`.
