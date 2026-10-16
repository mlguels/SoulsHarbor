import type { Metadata } from 'next';
import './globals.css';

import { Inter, Playfair_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Souls Harbor Apostolic Church',
  description: 'Souls Harbor Apostolic Church',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-white text-sh-navy font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
