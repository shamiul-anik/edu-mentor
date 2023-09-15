// import "./globals.css";
// import "@smastrom/react-rating/style.css";
// import "aos/dist/aos.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
// import Header from "@/components/(shared)/Header/Header";
import Providers from "@/providers";
import Sidebar from "@/components/(shared)/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EduMentor | Dashboard",
  description: "EduMentor Dashboard Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100dvh] flex flex-col justify-between">
      <Providers>
        <div className='relative min-h-screen md:flex'>
          <Sidebar />
          <div className='flex-1 md:ml-72'>
            <div className='p-5'>
              {children}
            </div>
          </div>
        </div>
      </Providers>
      <Toaster />
    </div>
  );
}
