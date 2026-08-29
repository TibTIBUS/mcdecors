import {
  ArrowRight,
  Brush,
  Check,
  CheckCircle2,
  Clock3,
  Home as HomeIcon,
  Layers,
  Mail,
  MapPin,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import { DemoPopup } from "@/components/demo-popup";

const services = [
  {
    icon: PaintRoller,
    title: "Peinture Intérieure",
    text: "Murs, plafonds, boiseries et finitions haute précision pour sublimer vos pièces de vie en neuf ou rénovation.",
  },
  {
    icon: Sparkles,
    title: "Décoration & Conseils",
    text: "Harmonies de couleurs personnalisées, conseils teintes et textures pour créer l'ambiance qui vous ressemble.",
  },
  {
    icon: HomeIcon,
    title: "Ravalement de Façades",
    text: "Nettoyage, démoussage, traitement des fissures et protection hydrofuge durable pour vos extérieurs.",
  },
  {
    icon: Layers,
    title: "Revêtements de Sols",
    text: "Pose de parquets, entretien et vitrification, sols PVC, vinyles et revêtements souples professionnels.",
  },
  {
    icon: Waves,
    title: "Tissu Tendu",
    text: "Spécialité reconnue pour murs et plafonds tendus offrant une finition textile impeccable et un confort acoustique.",
  },
  {
    icon: Brush,
    title: "Revêtements Muraux & Vitrerie",
    text: "Pose soignée de papiers peints panoramiques, toiles de verre, travaux de vitrerie et finitions détaillées.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "MC DÉCORS - Maxime Couillard",
  image: "https://tibtibus.github.io/mcdecors/images/logo-mcdecors.jpg",
  telephone: "+33677506734",
  email: "mcdecors50@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parc de la Gaslonde, Parcelle n°9",
    addressLocality: "Lessay",
    postalCode: "50430",
    addressRegion: "Manche",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.2198,
    longitude: -1.5303,
  },
  url: "https://tibtibus.github.io/mcdecors/",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
  ],
  areaServed: [
    "Lessay",
    "Coutances",
    "Périers",
    "Créances",
    "La Haye",
    "Agon-Coutainville",
    "Barneville-Carteret",
    "Saint-Lô",
    "Manche",
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12",
  },
};

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil MC Décors Lessay">
          <img
            src="./images/logo-mcdecors.jpg"
            alt="Logo MC DÉCORS"
            className="brand-logo-img"
          />
          <div className="brand-text">
            <strong>MC DÉCORS</strong>
            <small>Artisan Peintre & Décorateur · Lessay</small>
          </div>
        </a>

        <nav aria-label="Navigation principale">
          <a href="#services">Prestations</a>
          <a href="#atelier">L’Atelier</a>
          <a href="#realisations">Réalisations</a>
          <a href="#avis">Avis</a>
          <a href="#contact">Contact & Devis</a>
        </nav>

        <div className="header-cta">
          <a className="header-phone" href="tel:+33677506734">
            <Phone size={17} /> 06 77 50 67 34
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow">
            <MapPin size={15} /> Artisan Peintre & Décorateur à Lessay (50430)
          </div>
          <h1>
            Sublimez votre intérieur avec un <em>savoir-faire d’artisan.</em>
          </h1>
          <p className="hero-lead">
            Peinture intérieure & extérieure, décoration personnalisée, revêtements de sols,
            ravalement de façades et tissu tendu. <strong>Plus de 20 ans d’expérience</strong> au
            service de vos projets neufs et rénovations dans tout le centre et nord Manche.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Demander un devis gratuit <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="tel:+33677506734">
              <Phone size={18} /> 06 77 50 67 34
            </a>
          </div>
          <div className="hero-reassurance" aria-label="Engagements de MC Décors">
            <span>
              <CheckCircle2 size={16} /> Devis gratuit & sans engagement
            </span>
            <span>
              <CheckCircle2 size={16} /> Garantie Décennale
            </span>
            <span>
              <CheckCircle2 size={16} /> Chantiers soignés & protégés
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="./images/atelier-mcdecors.jpg"
            alt="Bâtiment et atelier MC Décors au Parc de la Gaslonde à Lessay"
          />
          <div className="hero-badge">
            <ShieldCheck size={28} />
            <span>
              <strong>Atelier & Siège à Lessay</strong>
              <small>Parc d’Activités de la Gaslonde (50430)</small>
            </span>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="proof-strip" aria-label="Chiffres clés">
        <div>
          <strong>20+ ans</strong>
          <span>d’expérience métier</span>
        </div>
        <div>
          <strong>50430 Lessay</strong>
          <span>Atelier ZA de la Gaslonde</span>
        </div>
        <div>
          <strong>4,8 / 5</strong>
          <span>Satisfaction clients</span>
        </div>
        <div>
          <strong>100% garanti</strong>
          <span>Assurance Décennale & R.C.</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="section-heading">
          <span className="kicker">Savoir-faire & Spécialités</span>
          <h2>Des prestations complètes,<br />du sol au plafond.</h2>
          <p>
            Que vous soyez particulier ou professionnel, MC Décors prend en charge votre projet de A à Z avec exigence et précision.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="service-icon">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">
                Demander un devis pour ce projet <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Atelier & Local Section */}
      <section className="local-section" id="atelier">
        <div className="local-inner">
          <div className="local-copy">
            <span className="kicker" style={{ color: "var(--gold-light)" }}>
              Proximité & Réactivité
            </span>
            <h2>Votre artisan peintre basé à Lessay.</h2>
            <p>
              Installée au <strong>Parc d’Activités de la Gaslonde à Lessay</strong>, l’entreprise MC Décors, dirigée par <strong>Maxime Couillard</strong>, met son expertise au service de vos chantiers sur l’ensemble du département de la Manche.
            </p>
            <ul className="check-list">
              <li>
                <Check size={18} /> <strong>Atelier moderne</strong> avec showroom échantillons et teintes
              </li>
              <li>
                <Check size={18} /> <strong>Déplacement et devis gratuit</strong> sur rendez-vous rapide
              </li>
              <li>
                <Check size={18} /> <strong>Spécialiste du tissu tendu</strong>, de la vitrerie et de la décoration haut de gamme
              </li>
            </ul>
            <div className="location-tags" aria-label="Zone d’intervention">
              <span>Lessay</span>
              <span>Coutances</span>
              <span>Périers</span>
              <span>Créances</span>
              <span>La Haye</span>
              <span>Agon-Coutainville</span>
              <span>Barneville-Carteret</span>
              <span>Saint-Lô</span>
              <span>Rayon 35 km</span>
            </div>
          </div>

          <div className="atelier-card-visual">
            <img
              src="./images/atelier-mcdecors.jpg"
              alt="Façade atelier MC Décors - Peinture, Décoration, Ravalement, Revêtement de sol, Tissu tendu"
            />
            <div className="atelier-badge-overlay">
              <strong>MC DÉCORS — Parc de la Gaslonde</strong>
              <p>Lessay (50430) · Tél : 06 77 50 67 34</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="realisations">
        <div className="projects-heading">
          <div className="section-heading">
            <span className="kicker">Galerie de réalisations</span>
            <h2>La passion du travail bien fait.</h2>
          </div>
          <p>
            Découvrez un aperçu des chantiers de rénovation, peinture et décoration réalisés avec soin par l’équipe de MC Décors.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card project-large">
            <img
              src="./images/interieur-renove.jpg"
              alt="Rénovation complète d’un intérieur et séjour chaleureux"
            />
            <div>
              <span>Peinture & Décoration</span>
              <strong>Rénovation intérieure complète</strong>
              <small>Murs, plafonds et harmonies de teintes · Lessay & environs</small>
            </div>
          </article>

          <article className="project-card">
            <img
              src="./images/ravalement-facade.jpg"
              alt="Ravalement et protection de façade extérieure"
            />
            <div>
              <span>Extérieur</span>
              <strong>Ravalement de façade</strong>
              <small>Démoussage, étanchéité et mise en peinture protectrice</small>
            </div>
          </article>

          <article className="project-card">
            <img
              src="./images/peintre-interieur.jpg"
              alt="Finitions de peinture soignées par un artisan peintre"
            />
            <div>
              <span>Savoir-faire</span>
              <strong>Finitions & revêtements</strong>
              <small>Préparation minutieuse des supports et rendu impeccable</small>
            </div>
          </article>
        </div>
      </section>

      {/* Method Section */}
      <section className="method-section">
        <div className="section method-inner">
          <div className="section-heading">
            <span className="kicker">Un accompagnement serein</span>
            <h2>Votre projet en trois étapes.</h2>
          </div>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>Visite & Conseil</h3>
              <p>
                Rencontre sur place à Lessay ou dans votre commune pour évaluer les surfaces, comprendre vos attentes et vous conseiller sur les matériaux et teintes.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Devis Détaillé</h3>
              <p>
                Élaboration d’un devis clair, transparent et sans surprise, précisant les temps de préparation, les produits utilisés et les délais d’intervention.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Chantier Soigné</h3>
              <p>
                Protection systématique de vos sols et meubles, préparation minutieuse, application professionnelle et nettoyage complet en fin de chantier.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews" id="avis">
        <div className="section-heading">
          <span className="kicker">Avis & Témoignages</span>
          <h2>La confiance de nos clients en Normandie.</h2>
        </div>

        <div className="review-grid">
          <blockquote key="1">
            <div className="stars" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <p>
              « Un travail d’une très grande propreté et des finitions impeccables sur l’ensemble de notre maison. Maxime Couillard est de très bon conseil pour le choix des teintes. »
            </p>
            <footer>
              <strong>Client particulier</strong>
              <span>Rénovation de séjour · Lessay</span>
            </footer>
          </blockquote>

          <blockquote key="2">
            <div className="stars" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <p>
              « Entreprise très réactive et professionnelle. Le ravalement de notre façade a été réalisé dans les délais avec un résultat parfait. Nous recommandons vivement MC Décors. »
            </p>
            <footer>
              <strong>Propriétaire</strong>
              <span>Ravalement de façade · Coutances</span>
            </footer>
          </blockquote>

          <blockquote key="3">
            <div className="stars" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
            <p>
              « Excellente prestation pour la pose de parquet et la mise en peinture complète. Chantier toujours propre et respect des engagements du début à la fin. »
            </p>
            <footer>
              <strong>Client rénovation</strong>
              <span>Sol & Peinture intérieure · Créances</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section faq-inner">
          <div className="section-heading">
            <span className="kicker">Questions fréquentes</span>
            <h2>Tout ce que vous devez savoir.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                Les devis sont-ils gratuits ? <span>+</span>
              </summary>
              <p>
                Oui, l’ensemble de nos devis ainsi que la visite préalable pour estimer vos travaux sont totalement gratuits et sans engagement.
              </p>
            </details>
            <details>
              <summary>
                Dans quel périmètre vous déplacez-vous ? <span>+</span>
              </summary>
              <p>
                Basés à Lessay (50430), nous intervenons régulièrement à Coutances, Périers, Créances, La Haye, Barneville-Carteret, Agon-Coutainville, Gouville, Saint-Lô et sur un rayon d’environ 35 à 40 km.
              </p>
            </details>
            <details>
              <summary>
                Qu’est-ce que le tissu tendu proposé par MC Décors ? <span>+</span>
              </summary>
              <p>
                Le tissu tendu est une solution esthétique haut de gamme pour rénover plafonds et murs sans poussière importante. Il offre une planéité parfaite, un rendu textile chaleureux et d’excellentes propriétés acoustiques et thermiques.
              </p>
            </details>
            <details>
              <summary>
                Êtes-vous couvert par une garantie décennale ? <span>+</span>
              </summary>
              <p>
                Absolument. MC Décors dispose de l’ensemble des assurances professionnelles obligatoires (Garantie Décennale et Responsabilité Civile Professionnelle) pour protéger tous vos travaux.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <span className="kicker light">Un projet de peinture ou rénovation ?</span>
            <h2>
              Parlons de votre projet<br />dès aujourd’hui.
            </h2>
            <p>
              Pour toute demande de devis, de conseil ou d’intervention à Lessay et dans la Manche, contactez directement Maxime Couillard.
            </p>
            <div className="contact-actions">
              <a className="button light-button" href="tel:+33677506734">
                <Phone size={18} /> 06 77 50 67 34
              </a>
              <a
                className="button outline-button"
                href="mailto:mcdecors50@gmail.com?subject=Demande%20de%20devis%20-%20MC%20D%C3%A9cors"
              >
                <Mail size={18} /> Envoyer un e-mail
              </a>
            </div>
          </div>

          <aside className="contact-card">
            <h3>MC DÉCORS</h3>
            <p>Maxime Couillard · Artisan Peintre Décorateur</p>
            <ul>
              <li>
                <MapPin size={18} />
                <span>
                  <strong>Atelier & Siège</strong>
                  Parc d’Activités de la Gaslonde, 50430 Lessay
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>
                  <strong>Téléphone</strong>
                  <a href="tel:+33677506734" style={{ color: "var(--ink)", fontWeight: 700 }}>
                    06 77 50 67 34
                  </a>
                </span>
              </li>
              <li>
                <Clock3 size={18} />
                <span>
                  <strong>Horaires d’ouverture</strong>
                  Du Lundi au Vendredi · 8h00 – 18h30
                </span>
              </li>
              <li>
                <ShieldCheck size={18} />
                <span>
                  <strong>Informations légales</strong>
                  SARL MC DÉCORS · SIREN 819 882 580
                </span>
              </li>
            </ul>
            <small>Réponse rapide et devis gratuit sous 48 heures</small>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#accueil">
            <img
              src="./images/logo-mcdecors.jpg"
              alt="Logo MC DÉCORS"
              style={{ height: "46px", borderRadius: "5px" }}
            />
            <div>
              <strong>MC DÉCORS</strong>
              <small>Artisan Peintre & Décorateur</small>
            </div>
          </a>

          <p>
            Peinture intérieure & extérieure · Décoration · Ravalement de façades · Revêtements de sol · Tissu tendu · Vitrerie
            <br />
            <span style={{ color: "#7a808c", fontSize: "12px" }}>
              Parc d’Activités de la Gaslonde, 50430 Lessay · Manche (50)
            </span>
          </p>

          <div>
            <a href="tel:+33677506734">06 77 50 67 34</a>
            <span>·</span>
            <a href="mailto:mcdecors50@gmail.com">Contact</a>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} MC DÉCORS — Tous droits réservés</span>
          <span>SARL Unipersonnelle au capital de 5 000 € · SIREN 819 882 580 RCS Coutances</span>
        </div>
      </footer>

      {/* Mobile Sticky Call Button */}
      <a className="mobile-call" href="tel:+33677506734" aria-label="Appeler l'artisan">
        <Phone size={18} /> Appeler l’artisan (06 77 50 67 34)
      </a>

      <DemoPopup />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
