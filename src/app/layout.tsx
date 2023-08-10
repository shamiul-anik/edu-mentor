import './globals.css'
import '@smastrom/react-rating/style.css';
import "aos/dist/aos.css";
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Header from '@/components/(shared)/Header/Header'
import Footer from '@/components/(shared)/Footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduMentor | Home',
  description: 'EduMentor Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-[100dvh] flex flex-col justify-between">
      {/* <body className={inter.className}> */}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
