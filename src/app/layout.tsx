import type { Metadata } from "next";
import { Geist_Mono, Manrope, Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/whatsapp";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

const bodyFont = Manrope({
  variable: "--font-brand-body",
  subsets: ["latin"],
});

const headingFont = Noto_Serif({
  variable: "--font-brand-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Imam Ali Quran Academy | Online Quran Courses with Expert Scholars",
    template: "%s | Imam Ali Quran Academy",
  },
  description:
    "Learn Quran online with certified Islamic scholars. Tajweed, Tafseer, Islamic History and more. Flexible live classes for all ages and levels.",
  keywords: [
    "Quran academy",
    "online Quran classes",
    "Tajweed course",
    "Tafseer studies",
    "Islamic education",
    "learn Quran online",
    "Imam Ali Academy",
  ],
  openGraph: {
    title: "Imam Ali Quran Academy — Sacred Knowledge Online",
    description:
      "Premium Islamic education through live digital classrooms with certified scholars.",
    url: "https://imamaliquranacademy.com",
    siteName: "Imam Ali Quran Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/home/hero.webp",
        width: 1200,
        height: 630,
        alt: "Imam Ali Quran Academy — Online Islamic Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Ali Quran Academy — Learn Quran Online",
    description:
      "Expert Islamic education at your pace. Tajweed, Tafseer, Islamic History and more.",
    images: ["/images/home/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${geistMono.variable} ${fontMontserrat.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
