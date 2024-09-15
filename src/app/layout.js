import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

import Nav from "@/components/Nav";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HR-App",
  description: "An app for human resource management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-[100vh]`}
      >
        <div className="flex flex-row flex-grow">
          <Nav />
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
