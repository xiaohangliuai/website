import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xiaohang Liu - Portfolio',
  description: 'Data Scientist/ Machine Learning Engineer',
  metadataBase: new URL('https://xiaohangliuai.github.io'),
  keywords: ['Xiaohang Liu', 'Data Scientist', 'Machine Learning Engineer', 'Portfolio'],
  authors: [{ name: 'Xiaohang Liu' }],
  openGraph: {
    type: 'profile',
    firstName: 'Xiaohang',
    lastName: 'Liu',
    gender: 'male',
    username: 'XiaohangLiu',
    siteName: 'Xiaohang Liu',
    title: 'Xiaohang Liu — Data Scientist/ Machine Learning Engineer',
    description: 'Data Scientist/ Machine Learning Engineer',
    images: ['/images/sharing.png'],
  },
  twitter: {
    card: 'summary',
    site: '@XiaohangLiu',
    title: 'Xiaohang Liu — Data Scientist/ Machine Learning Engineer',
    description: 'Data Scientist/ Machine Learning Engineer',
    creator: '@XiaohangLiu',
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="preload is-preload" suppressHydrationWarning>
      <head>
        {/* Meta tags */}
        <meta property="fb:admins" content="100000581280466" />
        <meta property="fb:app_id" content="1473140929606808" />
        
        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/noscript.css" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://www.schema.org",
              "@type": "Person",
              "name": "Xiaohang Liu",
              "jobTitle": "Data Scientist/ Machine Learning Engineer",
              "url": "https://xiaohangliuai.github.io",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Jersey",
                "addressCountry": "The United States"
              },
              "email": "yutoliu2023@163.com",
              "birthDate": "1999-01-01",
              "sameAs": [
                "https://www.linkedin.com/in/xiaohangai/",
                "https://github.com/xiaohangliuai",
                "https://www.instagram.com/yutoliu_/"
              ]
            })
          }}
        />
      </head>
      <body id="top" className={inter.className} suppressHydrationWarning>
        {/* Modernizr - Load on client side only */}
        <Script src="/js/modernizr.js" strategy="afterInteractive" />
        {children}
        <noscript>
          <link rel="stylesheet" href="/assets/css/noscript.css" />
        </noscript>
      </body>
    </html>
  )
}
