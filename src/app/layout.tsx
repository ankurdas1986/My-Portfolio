import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ankur Das - UI/UX Designer & Frontend Lead",
  description:
    "Team Leader with 10+ years of experience in UI/UX design and frontend development. Specializing in React, Figma, and modern web technologies.",
  keywords: [
    "UI Designer",
    "UX Designer",
    "Frontend Developer",
    "Team Leader",
    "React",
    "Figma",
    "Web Design",
  ],
  authors: [{ name: "Ankur Das" }],
  openGraph: {
    title: "Ankur Das - UI/UX Designer & Frontend Lead",
    description:
      "Team Leader with 10+ years of experience in UI/UX design and frontend development.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
