import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Brodie Lewis | Full-Stack Developer & Designer',
  description:
    'Brodie Lewis is a full-stack developer specialising in web and mobile development, UI/UX design, and cross-platform applications.',
  openGraph: {
    title: 'Brodie Lewis | Full-Stack Developer',
    description:
      'Brodie Lewis is a full-stack developer specialising in web and mobile development, UI/UX design, and cross-platform applications.',
    siteName: 'Brodie Lewis Portfolio',
    type: 'website',
  },
};

// Root Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className={`${jetbrainsMono.className} bg-grv-bg text-grv-fg antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
