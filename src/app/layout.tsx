import './globals.css';
import Header from 'components/layouts/Header';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from 'react';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: '포켓몬 사전',
  description: '당신이 찾고있는 포켓몬에 대한 정보',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
