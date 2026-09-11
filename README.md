# Fauteuil — Site web du salon de coiffure

Brief de développement pour Claude Code. À lire en entier avant de générer la moindre ligne de code.

---

## 1. Identité du salon

| Champ | Valeur |
|---|---|
| Nom | Fauteuil |
| Activité | Coiffeur créateur — salon de coiffure mixte (Femmes / Hommes) |
| Adresse | 12 rue des Artisans, 54000 Nancy (fictive) |
| Téléphone | 06 12 34 56 78 (fictif) |
| Email | contact@lefauteuilnoir-demo.fr (fictif) |
| Instagram | [retiré — pas de vrai compte associé] |
| Gamme de prix | €€ |

### Horaires (relevés sur la plaque de la vitrine)

| Jour | Matin | Après-midi |
|---|---|---|
| Lundi | Fermé | Fermé |
| Mardi | 9h – 12h30 | 14h30 – 19h |
| Mercredi | Fermé | Fermé |
| Jeudi | 9h – 12h30 | 14h30 – 19h |
| Vendredi | 9h – 12h30 | 14h30 – 19h |
| Samedi | 9h – 12h30 | 14h30 – 19h |
| Dimanche | Fermé | Fermé |

Uniquement sur réservation : 06 12 34 56 78 (fictif).

> ⚠️ À vérifier avec le client : mercredi et lundi fermés (déduit de l'absence sur la plaque — à confirmer avant mise en ligne).

---

## 2. Positionnement & ton

**Fauteuil** n'est pas un salon minimaliste ou scandinave. C'est un univers **"chic parisien × rock vintage confidentiel"** :
- Mobilier et objets vintage haut de gamme (fauteuil Belmont ancien, miroirs soleil dorés)
- Clins d'œil rock'n'roll / motard assumés avec humour (portrait de chien en costume, affiche "Rock addict", gants de boxe, crânes, plaques Harley-Davidson)
- Signalétique classique "LADIES / GENTS" → salon mixte et créateur
- Nom "Fauteuil" → idée d'un lieu confidentiel, sur invitation, intimiste

**Ton rédactionnel** : phrases courtes, élégantes, un peu mystérieuses/exclusives (façon "club privé"), jamais familières. Éviter le vocabulaire "petit prix" ou "promo" — rester dans le registre du sur-mesure et du geste de créateur.

---

## 3. Direction artistique

### Palette de couleurs

```css
--noir-profond: #0B0B0D;      /* fond principal */
--bleu-nuit: #0F1B2B;         /* variante fond, sections alternées (couleur enseigne) */
--dore: #C6A052;              /* titres, accents, bordures, hover */
--dore-clair: #D4AF6A;        /* variante dorée plus lumineuse */
--blanc-casse: #F5F1EA;       /* texte sur fond sombre */
--gris-chaud: #8A8580;        /* texte secondaire, légendes */
```

Fond noir/anthracite dominant, sections claires en respiration ponctuelle (blanc cassé), jamais de blanc pur.

### Typographie

- **Titres / logo** : `Cinzel` ou `Playfair Display` (Google Fonts, gratuit) — serif capitale, effet "gravé", cohérent avec l'enseigne physique
- **Sous-titres / accroche "Coiffeur Créateur"** : `Cormorant Garamond Italic` ou `EB Garamond Italic` — fine, élégante
- **Texte courant** : `Inter` ou `Cormorant Garamond` en régulier — bonne lisibilité sur fond sombre

### Logo

**Ne pas utiliser l'image existante comme asset final.** La recréer en code :
- Texte "FAUTEUIL" en `Cinzel`/`Playfair Display`, majuscules, letter-spacing large, couleur dorée
- Sous-texte "Coiffeur Créateur" en italique fine dessous
- Cadre ornemental (coins à volutes, visible sur l'enseigne) refait en **SVG vectoriel** — léger, recolorable, jamais pixelisé
- Décliner en 3 formats : logo horizontal (header), logo empilé/badge circulaire (favicon, réseaux sociaux, footer), version monochrome blanche (pour fonds très sombres)

---

## 4. Site de référence : Taylor Taylor London

URL : https://taylortaylorlondon.com/

**Ce qu'on reprend de sa structure** :
- Navigation minimaliste + logo centré + CTA "Prendre rendez-vous" toujours visible
- Hero plein écran : grande photo + accroche courte + CTA
- Sections alternées photo/texte pour chaque pilier (Le salon / Services / L'histoire) : une grande photo, un texte court, un lien "en savoir plus" — jamais de pavés de texte
- Grille Instagram en bas de page (à activer si un compte est créé pour le portfolio)
- Footer riche : plan du site, réseaux sociaux, contact

**Ce qu'on inverse** : palette claire → palette sombre/dorée, ton "magazine luxe londonien" → ton "atelier créateur confidentiel", photos lumineuses → photos à fort contraste et tonalité chaude (cohérent avec vos visuels vintage).

---

## 5. Stack technique

- **Framework** : Next.js (App Router) + React + TypeScript
- **Styles** : Tailwind CSS
- **Polices** : `next/font/google` pour Cinzel/Playfair Display, Cormorant Garamond, Inter
- **Images** : composant `next/image` pour l'optimisation automatique
- **Déploiement cible** : Vercel (par défaut avec Next.js) — à confirmer avec le client
- **Formulaire de contact** : à définir (API route Next.js + envoi email, ou service tiers type Formspree)
- **Prise de RDV en ligne** : **non tranchée**. Construire un composant isolé `<BookingButton />` qui pour l'instant déclenche un appel/SMS vers le 06 12 34 56 78 (fictif), facilement remplaçable plus tard par un widget Planity/Fresha/Calendly sans toucher au reste du site.

---

## 6. Arborescence du projet

```
fauteuil/
├── README.md                          ← ce fichier
├── app/
│   ├── layout.tsx
│   ├── page.tsx                       ← page d'accueil
│   ├── services/page.tsx
│   ├── galerie/page.tsx
│   ├── a-propos/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx                       ← logo recréé en SVG/texte
│   ├── BookingButton.tsx              ← CTA RDV isolé (voir section 5)
│   ├── Hero.tsx
│   ├── InstagramFeed.tsx
│   └── ...
├── public/
│   └── images/
│       ├── hero/
│       ├── interior/
│       ├── gallery/
│       └── logo-reference/            ← captures d'écran originales, jamais utilisées en prod
├── inspiration/
│   └── taylor-taylor-london-notes.md
└── styles/
    └── globals.css
```

---

## 7. Convention de nommage des images

Format : `categorie-sujet-detail.jpg`, en minuscules, tirets, sans accents ni espaces.

Renommage suggéré des fichiers déjà fournis :

| Fichier original | Nouveau nom |
|---|---|
| SnapInsta_..._18512469823069867_n.jpg | `interior-poste-coiffage-miroir-sunburst.jpg` |
| SnapInsta_..._18389907250144731_n.jpg | `interior-mur-rock-ladies-gents.jpg` |
| SnapInsta_..._18508631479074500_n.jpg | `interior-fauteuil-belmont-bw.jpg` |
| SnapInsta_..._18256650061292100_n.jpg | `interior-vitrine-produits-barbershop.jpg` |
| SnapInsta_..._18330521938219637_n.jpg | `interior-collage-mur-tigi.jpg` |
| SnapInsta_..._18117122782713969_n.jpg | `interior-fauteuil-vintage.jpg` |
| Capture_..._132616.png | `logo-reference-badge-instagram.png` |

À faire : déposer les vraies photos (pas les captures SnapInsta compressées si possible, demander les originaux au client) dans `public/images/` selon les sous-dossiers ci-dessus.

---

## 8. Pages du site

1. **Accueil** : hero + intro univers + aperçu services + avis + Instagram feed + CTA RDV
2. **Services & tarifs** : Femmes / Hommes / Étudiants (structure vue sur l'affichage tarifs en magasin, image 5)
3. **Galerie** : réalisations, ambiance salon
4. **À propos** : histoire du salon, l'équipe si souhaité
5. **Contact** : adresse, téléphone, email, horaires, carte, formulaire

---

## 9. Informations manquantes à obtenir avant mise en ligne

- [ ] Confirmer les jours de fermeture (lundi + mercredi supposés)
- [ ] Grille tarifaire complète et lisible (l'affichage en magasin, image 5, est illisible en l'état — inversé/flou)
- [ ] Choix définitif du système de réservation en ligne
- [ ] Photos en haute résolution (originaux, pas les exports SnapInsta compressés)
- [ ] Nom(s) du/des coiffeur(s)/équipe si mise en avant souhaitée
- [ ] Textes définitifs (ou accord pour que je les rédige à partir de ce brief)
