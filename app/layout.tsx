import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import "./cabinet.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Judah Oka, Chief AI Officer",
  description:
    "Judah Oka maps how Nigerian businesses actually run, then builds the systems that take the manual work out of it. Chief AI Officer at Multonion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
