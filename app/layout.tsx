import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinh phục Toán 12 — Trường THPT Phục Hòa",
  description:
    "Hệ thống tự học, đọc Sách giáo khoa điện tử và ôn thi Tốt nghiệp THPT môn Toán 12 (Bộ sách Kết nối tri thức với cuộc sống Tập 1 & Tập 2) - Trường THPT Phục Hòa, Tỉnh Cao Bằng.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} font-body text-star antialiased selection:bg-sea selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
