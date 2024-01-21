import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const NotoSansJPFont = Noto_Sans_JP({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrisisLink",
  description: "CrisisLink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJPFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
