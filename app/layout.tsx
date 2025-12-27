import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Converted from React to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>

        {/* ✅ Portal root */}
        <div id="overlays"></div>
      </body>
    </html>
  );
}
