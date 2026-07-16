import './globals.css';
import { Inter, Poppins, Srisakdi, MonteCarlo, Pompiere, Playfair_Display } from 'next/font/google';

// SEMUA font loader harus dideklarasikan di sini, di module scope
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const srisakdi = Srisakdi({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-srisakdi',
});

const monteCarlo = MonteCarlo({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-montecarlo',
});

const pompiere = Pompiere({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pompiere',
});

// TAMBAHKAN: Playfair Display untuk ssaraaPurple
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Sarah | Portfolio',
  description: 'Creative Developer & UI/UX Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${srisakdi.variable} ${monteCarlo.variable} ${pompiere.variable} ${playfair.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Pacifico&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-blue-200/30 via-blue-100/20 to-transparent pointer-events-none" />
        <div className="fixed top-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/10 rounded-full blur-3xl pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}