import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

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

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
