import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
