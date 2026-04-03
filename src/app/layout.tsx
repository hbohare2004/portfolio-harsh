import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshvardhan Bohare | Full Stack Developer",
  description:
    "Portfolio of Harshvardhan Bohare — Computer Science student, Full Stack Developer & Java Backend Specialist. Building scalable web applications.",
  keywords: [
    "Harshvardhan Bohare",
    "Full Stack Developer",
    "Java Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Harshvardhan Bohare | Full Stack Developer",
    description:
      "Computer Science student passionate about building scalable web applications and solving real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
