// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://gender-checker-app.vercel.app'),
  title: {
    default: "Gender Checker App | Predict Gender by Name",
    template: "%s | Gender Checker App"
  },
  description: "Free AI-powered gender prediction tool. Enter any name to instantly detect gender with probability score and accuracy based on global name statistics.",
  keywords: [
    "gender checker",
    "gender prediction",
    "name gender detector",
    "genderize api",
    "gender by name",
    "gender probability",
    "name analysis",
    "gender tool"
  ],
  authors: [
    {
      name: "Aman Bhagat",
      url: "https://github.com/amanxploit"
    }
  ],
  creator: "Aman Bhagat",
  publisher: "Aman Bhagat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Gender Checker App | AI-Powered Gender Prediction",
    description: "Predict gender by name with high accuracy. Free tool using Genderize.io API with probability scores and data samples.",
    url: "https://gender-checker-app.vercel.app",
    siteName: "Gender Checker App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gender Checker App - Predict Gender by Name",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gender Checker App | Predict Gender by Name",
    description: "Free AI-powered gender prediction tool. Enter any name to instantly detect gender with probability score.",
    images: ["/og-image.png"],
    creator: "@amancoder.py",
    site: "@amancoder.py",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gender-checker-app.vercel.app",
    languages: {
      'en-US': 'https://gender-checker-app.vercel.app',
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Gender Checker App",
  "description": "Free AI-powered gender prediction tool that analyzes names to predict gender with probability scores",
  "url": "https://gender-checker-app.vercel.app",
  "applicationCategory": "Utility",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Aman Bhagat",
    "url": "https://github.com/amanxploit",
    "sameAs": [
      "https://github.com/amanxploit",
      "https://www.linkedin.com/in/aman-bhagat-10641422a",
      "https://www.instagram.com/aman.coder.py"
    ]
  },
  "keywords": "gender checker, gender prediction, name analysis, genderize",
  "featureList": [
    "Real-time gender prediction",
    "Probability score",
    "Data sample size",
    "Instant results",
    "Free to use"
  ],
  "softwareVersion": "1.0.0"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>{/* Remove any whitespace between head and its first child */}
        <link rel="preconnect" href="https://api.genderize.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.genderize.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gender Checker" />
        <meta property="og:site_name" content="Gender Checker App" />
        <meta property="og:image:alt" content="Gender Checker App - Predict Gender by Name" />
        <meta name="twitter:image:alt" content="Gender Checker App - Predict Gender by Name" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}