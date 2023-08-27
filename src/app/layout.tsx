<<<<<<< HEAD
"use client"
import './globals.css'
=======
import './globals.css';
>>>>>>> 9303b390b4369dbdf04fcd1e3129e69ad6f2176f
import '@smastrom/react-rating/style.css';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';
import Header from '@/components/(shared)/Header/Header';
import Footer from '@/components/(shared)/Footer/Footer';
import Providers from '@/providers/index';
import { Toaster } from 'react-hot-toast';
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'EduMentor | Home',
  description: 'EduMentor Home Page',
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="h-[100dvh] flex flex-col justify-between">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />

        </Providers>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

      </body>
    </html>
  )
}


// "use client"

// import { ThemeProvider } from "flowbite-react/lib/esm/components/Flowbite/ThemeContext";
// import AuthProvider from "./AuthProvider.js";

// const Providers = ( { childern } ) => {
//     return  <ThemeProvider><AuthProvider>{childern}</AuthProvider></ThemeProvider>;
// };

// export default Providers;