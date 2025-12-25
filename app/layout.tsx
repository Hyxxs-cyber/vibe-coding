import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vibe Coding | Full-Stack Portfolio',
  description: 'A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-slate-50 text-slate-900'}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
