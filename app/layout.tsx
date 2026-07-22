import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollEffects from "../components/ScrollEffects";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trigitaltech.com"),
  icons: {
    icon: "/assets/logo-symbol.svg",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
