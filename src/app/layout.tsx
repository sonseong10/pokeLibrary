import Footer from 'components/layouts/Footer';
import './globals.css';
import Header from 'components/layouts/Header';
import {Inter} from 'next/font/google';
import React from 'react';
import ReduxProvider from 'redux/provider';

const inter = Inter({subsets: ['latin']});

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReduxProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
