import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { GoogleFonts } from 'next-google-fonts';
import { Windmill } from '@windmill/react-ui'

import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-cool-gray-900">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>

      <Windmill usePreferences>
        <Navbar />
        
        <div className="relative mb-10 min-h-screen">
          <Component {...pageProps} />
        </div>

        <Footer />
      </Windmill>
    </div>
  )
}

export default MyApp
