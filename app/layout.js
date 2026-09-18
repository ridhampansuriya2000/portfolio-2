import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile, education, experience, skills } from "@/data/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const title = `${profile.name} — ${profile.title}`;

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    profile.name,
    "Ridham Pansuriya",
    profile.title,
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Senior React.js Developer",
    "MERN Stack Developer",
    "Surat",
    "India",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    title,
    description: profile.summary,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/api/profile-picture`,
  jobTitle: profile.title,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [profile.githubUrl],
  worksFor: {
    "@type": "Organization",
    name: experience[0]?.company,
  },
  alumniOf: education.map((edu) => ({
    "@type": "CollegeOrUniversity",
    name: edu.school,
  })),
  knowsAbout: skills.flatMap((group) => group.items),
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored !== "light") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
