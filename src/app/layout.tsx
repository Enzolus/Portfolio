import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prénom Nom — Portfolio",
  description: "Portfolio professionnel et personnel de Prénom Nom.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
