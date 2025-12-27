import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.more-ways.co.il"),
  title: {
    default: "More-Ways | בניית אתרים לעסקים קטנים",
    template: "%s | More-Ways",
  },
  description:
    "More-Ways – בניית אתרים ודפי נחיתה לעסקים קטנים, פיתוח אתרי תדמית וחנויות, חיבור ל-SEO, ועזרה ביצירת נוכחות דיגיטלית שמביאה לקוחות.",
  keywords: [
    "בניית אתרים",
    "בניית אתר לעסק",
    "דף נחיתה",
    "פיתוח אתרים",
    "אתר תדמית",
    "חנות אונליין",
    "SEO",
    "שיווק דיגיטלי",
    "More-Ways",
  ],
  alternates: {
    canonical: "https://www.more-ways.co.il/",
  },
  openGraph: {
    title: "More-Ways | בניית אתרים לעסקים קטנים",
    description:
      "בונה אתרים לעסקים קטנים: אתר תדמית, דף נחיתה או חנות – מהיר, יפה ומוכן ל-SEO. כולל ליווי בהקמת פרופילים ברשתות.",
    url: "https://www.more-ways.co.il/",
    siteName: "More-Ways",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg", // מומלץ ליצור תמונה 1200x630
        width: 1200,
        height: 630,
        alt: "More-Ways – בניית אתרים לעסקים קטנים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "More-Ways | בניית אתרים לעסקים קטנים",
    description: "בניית אתרים ודפי נחיתה לעסקים קטנים – מהיר, יפה ומוכן ל-SEO.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Schema.org (WebSite + Organization/LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "WebSite"],
    name: "More-Ways",
    url: "https://www.more-ways.co.il/",
    logo: "https://www.more-ways.co.il/assets/logo.png",
    email: "eylon@more-ways.co.il",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100094083860874",
      "https://instagram.com/UC4WJzzrhDnZVAiFkgM6Krfw",
    ],
    description:
      "בניית אתרים לעסקים קטנים, דפי נחיתה, חנויות אונליין, SEO ונוכחות דיגיטלית.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.more-ways.co.il/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="he" dir="rtl">
      <body>
        <Providers>{children}</Providers>

        {/* ✅ Portal root */}
        <div id="overlays"></div>

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
