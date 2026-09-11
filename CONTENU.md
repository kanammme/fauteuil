# Fauteuil — Contenu du site (textes validés / en attente)

> ⚠️ PROJET DE DÉMONSTRATION — "Fauteuil" est un nom et une 
> identité fictifs, créés uniquement à des fins de portfolio personnel. 
> Toutes les coordonnées (adresse, téléphone, email) sont des placeholders 
> non fonctionnels. Ce projet ne représente aucun établissement réel.

Document compagnon du README.md technique. À tenir à jour au fur et à mesure des validations.

---

## ✅ Validé

### Accroche Hero (décision finale — remplace toute version antérieure)
> UN SALON
> HORS DU TEMPS

Sous-texte validé : *Coiffeur créateur — Nancy, sur rendez-vous*

Historique (ne plus utiliser) : "Ici, on ne coupe pas les cheveux. On les façonne." 
a été testé puis écarté au profit de la version ci-dessus.

### Horaires
Mardi, Jeudi, Vendredi, Samedi : 9h–12h30 / 14h30–19h
Fermé lundi, mercredi, dimanche (à confirmer avec le client)
Sur réservation : 06 12 34 56 78 (fictif)

### Coordonnées
12 rue des Artisans, 54000 Nancy (fictive)
06 12 34 56 78 (fictif) — contact@lefauteuilnoir-demo.fr (fictif) — [retiré — pas de vrai compte associé]
Facebook : [retiré — pas de vraie page associée]

---

## 🕓 En attente de validation client

### Tarifs
Structure des catégories déchiffrée sur l'affichage en salon (image 5), 
prix illisibles sur la photo actuelle. **Besoin d'une photo nette de la 
grille tarifaire, ou d'un fichier Excel/Word si le client en a un.**

Catégories identifiées :
- Forfait coiffage (shampoing / coupe / coiffage) — décliné cheveux courts/mi-longs/longs
- Services techniques (coloration, décoloration, soin, permanente...)
- Mèches papier / balayage
- Ombré hair / tie and dye
- Hommes (shampoing / coupe / coiffage, coloration homme)
- Étudiant(e)s (garçons / filles — décliné par longueur)
- Enfants (Baby Girls, coupe garçon, coupe fille)

**En attendant** : afficher la structure des catégories sans prix, avec 
un bouton "Nous contacter pour un devis personnalisé".

### Page Équipe
Décision à prendre avec le client : mise en avant nominative des 
coiffeurs, ou présentation collective discrète. 
**En attendant** : prévoir la page avec un texte générique 
("L'équipe Fauteuil vous accueille...") facilement remplaçable.

### Réservation en ligne
Outil non choisi (Planity / Fresha / autre). Le composant 
BookingButton.tsx est déjà construit pour être interchangeable 
(actuellement : appel téléphonique direct).

### Formulaire de contact
Décision : pas de formulaire pour l'instant. La page Contact 
(construite le [session en cours]) affiche les coordonnées cliquables 
(tel:, mailto:), les horaires, les réseaux sociaux, un bouton d'appel, 
et une carte Google Maps en niveaux de gris. Un formulaire pourra être 
ajouté plus tard si le client le souhaite.

### Nom de domaine
Non décidé. Domaine personnalisé (ex. lefauteuilnoir-demo.fr) ou 
hébergement gratuit avec sous-domaine standard Vercel. En attendant, le SEO est 
construit avec un domaine placeholder facilement remplaçable 
(variable d'environnement NEXT_PUBLIC_SITE_URL).

### Pages terminées à ce stade
Accueil (Hero + Services), Galerie, À propos, Contact, Mentions légales 
(avec champs à compléter), Footer global. Reste à construire/décider : 
page Services dédiée (optionnel), métadonnées SEO, test mobile complet 
de toutes les pages, fiche de décision finale pour le client 
(tarifs, équipe, forme juridique/SIRET, hébergeur, autorisations photos).

### Mentions légales — forme juridique
Non connue à ce stade. À demander au client : forme juridique 
(auto-entrepreneur, SARL...), numéro SIRET, nom du responsable de 
publication. La page mentions-legales est construite avec des 
placeholders [À COMPLÉTER] en attendant.

### Photos de réalisations (coupes/modèles) pour la galerie
En attente : autorisation de droit à l'image à obtenir avant toute 
publication de photos de clients ou de mannequins. Pour l'instant, 
la galerie n'affiche que les photos d'ambiance du salon (sans personnes).

---

## Texte "L'histoire / À propos" — brouillon à valider

> Fauteuil n'est pas un salon comme les autres.
>
> Ici, le rock côtoie l'élégance, le fauteuil vintage répond au geste 
> précis du créateur. Chaque coupe, chaque couleur est pensée comme 
> une pièce unique — jamais reproduite à l'identique.
>
> Dans un cadre confidentiel, loin de l'agitation, l'équipe d'Fauteuil 
> prend le temps. Celui d'écouter, de comprendre, de révéler.
>
> Bienvenue dans votre salon.

**À personnaliser** : histoire réelle du salon (date de création, 
parcours du/de la créateur·rice, ce qui a motivé l'ouverture) si le 
client souhaite un texte moins générique.

---

## SEO — titres et descriptions par page (validé)

- **Accueil** — Title : `Fauteuil — Coiffeur Créateur à Nancy | Salon mixte 54000`
  Description : `Salon de coiffure créateur à Nancy. Coupe, coloration, balayage dans un cadre chic et confidentiel. Sur rendez-vous — 06 12 34 56 78 (fictif).`
- **Galerie** — Title : `Galerie — Fauteuil Coiffeur Créateur Nancy`
  Description : `Découvrez l'ambiance chic et confidentielle du salon Fauteuil à Nancy à travers notre galerie photos.`
- **À propos** — Title : `L'histoire — Fauteuil Coiffeur Créateur Nancy`
  Description : `Découvrez l'histoire du salon Fauteuil, coiffeur créateur à Nancy entre élégance parisienne et esprit rock.`
- **Contact** — Title : `Contact — Fauteuil Coiffeur Créateur Nancy`
  Description : `Prenez rendez-vous avec Fauteuil, salon de coiffure créateur à Nancy. Adresse, téléphone, horaires et plan d'accès.`
- **Mentions légales** — Title : `Mentions légales — Fauteuil`
  Description : `Mentions légales du site Fauteuil, coiffeur créateur à Nancy.`

---

## Mentions légales — informations à demander au client

Obligatoires pour la page légale (à collecter avant mise en ligne) :
- [ ] Forme juridique (auto-entrepreneur, SARL, etc.)
- [ ] Numéro SIRET
- [ ] Nom de l'hébergeur du site (une fois choisi, ex. Vercel)
- [ ] Nom du responsable de publication
