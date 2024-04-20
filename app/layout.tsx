import localFont from 'next/font/local'
import type { Metadata } from "next";
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';






export const metadata: Metadata = {
  title: "HideOut",
  description: "",
};
const PPObjectSans = localFont({
  src: [
    {
      path: './assets/PPObjectSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/PPObjectSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/PPObjectSans-Semibold.woff',
      weight: '600',
      style: 'normal',
    },

  ],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={PPObjectSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>



          {children}
        </main>
        <Footer />
      </body>





    </html>
  );
}
