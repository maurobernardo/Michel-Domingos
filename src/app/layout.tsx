import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michel Domingos Nhampossa | Portfólio",
  description:
    "Portfólio profissional de Michel Domingos Nhampossa, estudante de Engenharia Electrotécnica em Moçambique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
