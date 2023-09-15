"use client"
import './globals.css';
import '@smastrom/react-rating/style.css';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';
import Header from '@/components/(shared)/Header/Header';
import { useTitle } from '@/hooks/useTitle';
import Footer from '@/components/(shared)/Footer/Footer';
import Providers from '@/providers/index';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'EduMentor | Home',
  description: 'EduMentor Home Page',
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {

  useTitle("Home");
  
  const [allowedPath, setAllowedPath] = useState(true);

  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => { 
    pathname.includes('/dashboard') ? setAllowedPath(false) : setAllowedPath(true);
  }, [pathname]);
  
  // console.log(allowedPath);

  return (
    <html lang="en">
      <body className="h-[100dvh] flex flex-col justify-between">
        <Providers>
          {allowedPath && <Header />}
          <main>
            {children}
          </main>
          {allowedPath && <Footer />}
        </Providers>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}