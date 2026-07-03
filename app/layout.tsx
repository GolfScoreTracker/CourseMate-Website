import type { Metadata } from "next";
import { DM_Serif_Display, Oswald, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coursemate.golf"),
  title: {
    default: "CourseMate — Golf's better with mates",
    template: "%s — CourseMate",
  },
  description:
    "CourseMate keeps your card, plays nice with the group, and reads the round back to you — no faff. Set up in seconds and get back to the swing of things.",
  openGraph: {
    title: "CourseMate — Golf's better with mates",
    description:
      "CourseMate keeps your card, plays nice with the group, and reads the round back to you — no faff.",
    url: "https://coursemate.golf",
    siteName: "CourseMate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${oswald.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
