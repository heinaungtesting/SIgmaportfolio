import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://sigmahein.me"),
  title: "Hein Htet Aung — AI Engineer / Full-Stack Developer",
  description:
    "Fourth-year student at Kaichi International University. Building production web apps — Next.js, Supabase, Laravel, Python — and shipping them to live users. Open to 2027 new-graduate roles.",
  keywords: [
    "Hein Htet Aung",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Supabase",
    "Laravel",
    "2027 新卒",
    "27卒",
    "留学生 エンジニア",
    "Tokyo",
    "Portfolio",
  ],
  authors: [{ name: "Hein Htet Aung" }],
  creator: "Hein Htet Aung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sigmahein.me",
    title: "Hein Htet Aung — AI Engineer / Full-Stack Developer",
    description:
      "Fourth-year student at Kaichi International University. Building production web apps and shipping them to live users.",
    siteName: "Hein Htet Aung — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hein Htet Aung — AI Engineer / Full-Stack Developer",
    description: "Production web apps · Next.js · Supabase · Laravel · Python",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
