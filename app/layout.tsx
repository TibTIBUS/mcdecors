import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MC DÉCORS — Artisan Peintre Décorateur à Lessay (50430) | Manche",
  description:
    "MC Décors à Lessay (50430) : artisan peintre et décorateur avec 20+ ans d'expérience. Peinture intérieure & extérieure, ravalement, revêtements de sol/murs, tissu tendu. Devis gratuit au 06 77 50 67 34.",
  keywords: [
    "MC Décors",
    "Maxime Couillard",
    "peintre Lessay",
    "artisan peintre 50430",
    "peinture bâtiment Manche",
    "peintre décorateur Coutances",
    "ravalement façade Lessay",
    "revêtement de sol Lessay",
    "tissu tendu Manche",
    "parquet Lessay",
    "décoration intérieure Cotentin",
  ],
  authors: [{ name: "Maxime Couillard - MC DÉCORS" }],
  icons: {
    icon: "./images/logo-mcdecors.jpg",
    shortcut: "./images/logo-mcdecors.jpg",
    apple: "./images/logo-mcdecors.jpg",
  },
  openGraph: {
    title: "MC DÉCORS — Artisan Peintre & Décorateur à Lessay",
    description:
      "Sublimez votre intérieur avec MC Décors : peinture, décoration, ravalement, revêtements de sol et tissu tendu dans la Manche.",
    url: "https://tibtibus.github.io/mcdecors/",
    siteName: "MC DÉCORS",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
