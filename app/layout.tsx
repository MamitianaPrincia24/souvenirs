
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Havanareo ve…",
  description: "Un petit souvenir créé avec amitié.",
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
