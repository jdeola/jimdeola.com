import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Jim Deola — Full-Stack Developer & AI Engineer',
    template: '%s | Jim Deola',
  },
  description:
    'Jim Deola is a full-stack developer, AI engineer, SEO strategist, fitness coach, and founder based in South Jersey.',
  metadataBase: new URL('https://jimdeola.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
