import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enzo Lusardi — Systèmes embarqués & cybersécurité",
  description: "Portfolio d’Enzo Lusardi, ingénieur systèmes embarqués, réseaux et cybersécurité.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
