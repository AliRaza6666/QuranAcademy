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

  // ✅ THIS IS THE CORRECT PLACE FOR CANONICAL
  alternates: {
    canonical: "https://imamaliquranacademy.com",
  },

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