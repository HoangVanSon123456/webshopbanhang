import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <div className="">
            <Header />
          </div>
          <div className="">{children}</div>
          <div className="bg-gradient-to-r from-[#fad2d2] to-[#d2d6f8] text-black">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
