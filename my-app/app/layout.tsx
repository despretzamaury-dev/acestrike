import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceStrike — Moins d'administratif, plus de jeu. Set et Match.",
  description: "AceStrike modernise les clubs de tennis : site web sur-mesure, inscriptions en ligne, paiements sécurisés et référencement local. La solution complémentaire de TenUp.",
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
