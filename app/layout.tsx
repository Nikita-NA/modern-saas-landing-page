import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Revolutionize your brand\'s digital presence with our comprehensive AI suite. Generate compelling content, optimize campaigns, and scale your marketing effortlessly.',
  keywords: 'AI marketing, content generation, campaign optimization, marketing automation, digital marketing tools',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8B5CF6',
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionize your brand\'s digital presence with our comprehensive AI suite.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionize your brand\'s digital presence with our comprehensive AI suite.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}