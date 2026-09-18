import type { Metadata } from "next";
import "./globals.css";

const title = "ヘイン テッ アウン｜フルスタック開発者・2027年新卒";
const description =
  "開智国際大学を2027年3月卒業予定。独学でWeb開発を学び、同僚7名が使うSugi Sale App、SportsMatch Tokyo、POS・EC管理システムを個人開発。現場の課題発見から開発・運用・改善まで取り組んでいます。";

export const metadata: Metadata = {
  metadataBase: new URL("https://sigmahein.me"),
  title,
  description,
  keywords: [
    "Hein Htet Aung",
    "ヘイン テッ アウン",
    "フルスタック開発者",
    "バックエンドエンジニア",
    "Sugi Sale App",
    "Next.js",
    "Supabase",
    "Laravel",
    "2027 新卒",
    "27卒",
    "留学生 エンジニア",
    "東京",
    "ポートフォリオ",
  ],
  authors: [{ name: "Hein Htet Aung" }],
  creator: "Hein Htet Aung",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://sigmahein.me",
    title,
    description,
    siteName: "ヘイン テッ アウンのポートフォリオ",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="dark">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
