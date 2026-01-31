import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

export const metadata: Metadata = {
  // הגדרות SEO לקידום האתר הראשי
  metadataBase: new URL("https://www.more-ways.co.il"),
  title: "Portfolio Color Switcher | דמו מבית More-Ways",
  description:
    "פרויקט דוגמה המציג החלפת צבעים דינמית. נלמד בשיעורי Next.js של More-Ways.",

  // חסימת אינדוקס לאתר דוגמה והפניה לאתר הראשי
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.more-ways.co.il/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // נתוני Schema.org מעודכנים לפרויקט ספציפי
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://next-w-portfolio-color-switcher.more-ways.co.il/#webpage",
        name: "Color Switcher Demo",
        author: {
          "@type": "Organization",
          name: "More-Ways",
          url: "https://www.more-ways.co.il/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "More-Ways",
            item: "https://www.more-ways.co.il/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio Color Switcher",
          },
        ],
      },
    ],
  };

  return (
    <html lang="he" dir="rtl">
      <head>
        {/* שימוש ברכיב Script של Next.js לביצועים טובים יותר */}
        <Script
          id="json-ld-switcher"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* רכיב ה-Providers חייב לעטוף את ה-children כדי ש-useThemeContext יעבוד */}
        <Providers>{children}</Providers>
        <div id="overlays"></div>

        {/* פוטר לקידום האתר הראשי */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            borderTop: "1px solid #eaeaea",
          }}
        >
          <p>
            נבנה כפרויקט לימודי ב-{" "}
            <a
              href="https://www.more-ways.co.il"
              style={{ color: "#ffa200", fontWeight: "bold" }}
            >
              More-Ways - פיתוח אתרים וקורסי תכנות
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
