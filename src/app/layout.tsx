import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget';
import { siteConfig } from '@/config/site';

const getMetadataBase = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (url) {
    return new URL(`https://${url.replace(/^https?:\/\//, '')}`);
  }
  return new URL(siteConfig.url);
};

export const metadata: Metadata = {
  title: {
    default: 'TRAIBCERT Limited | UKAS & ASCB Accredited ISO Certification & Cyber Essentials',
    template: '%s | TRAIBCERT Limited'
  },
  description: siteConfig.tagline,
  metadataBase: getMetadataBase(),
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
    shortcut: '/icon.svg'
  },
  openGraph: {
    title: 'TRAIBCERT Limited — ISO Certification & Cyber Security Body',
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: 'TRAIBCERT',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/assets/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'TRAIBCERT Certification Body UK'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRAIBCERT Limited | Accredited ISO Certification',
    description: siteConfig.tagline,
    images: ['/assets/logos/logo.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.ukPhone,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: ['en']
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.uaePhone,
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 7, 2nd Floor, The Atrium, 31 Church Road',
      addressLocality: 'Ashford',
      addressRegion: 'Middlesex',
      postalCode: 'TW15 2UD',
      addressCountry: 'GB'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..800&family=Fraunces:ital,opsz,wght@0,9..144,500..800;1,9..144,500..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        {/* Google Tag Manager / Google Ads Container AW-835011731 */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteConfig.gtmContainerId}');
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
