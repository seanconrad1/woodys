import { Inter } from "next/font/google";

import { Playfair_Display } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
config.autoAddCss = false;

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playFairFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
  metadataBase: new URL('https://www.woodysofsouthtampa.com'),

  icons: {
    icon: './assets/woodys_white.jpeg',
    shortcut: './assets/woodys_white.jpeg',
    apple: './assets/woodys_white.jpeg',

  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Woodys Famous Greek Salads',
    description: 'The React Framework for the Web',
    url: 'https://www.woodysofsouthtampa.com',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playFairFont.className}`}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
