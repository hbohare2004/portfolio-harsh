import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getMetadataBase, getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const title = "Harshvardhan Bohare | Full Stack Developer & Java Backend Specialist";
const description =
  "Portfolio of Harshvardhan Bohare — B.Tech CSE student, Full Stack Developer & Java Backend Specialist. Next.js, React, Node.js, scalable web applications.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: title,
    template: "%s | Harshvardhan Bohare",
  },
  description,
  keywords: [
    "Harshvardhan Bohare",
    "Full Stack Developer",
    "Java Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Bhopal",
    "IES College of Technology",
  ],
  authors: [{ name: "Harshvardhan Bohare", url: siteUrl }],
  creator: "Harshvardhan Bohare",
  publisher: "Harshvardhan Bohare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Harshvardhan Bohare",
    title,
    description:
      "Computer Science student passionate about building scalable web applications and solving real-world problems.",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Harshvardhan Bohare — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@hbohare007",
    images: ["/images/profile.jpeg"],
  },
  category: "technology",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harshvardhan Bohare",
      description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Harshvardhan Bohare",
      url: siteUrl,
      jobTitle: "Full Stack Developer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "IES College of Technology, Bhopal",
      },
      sameAs: [
        "https://www.linkedin.com/in/harshvardhan-bohare",
        "https://github.com/hbohare2004",
        "https://x.com/hbohare007",
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
