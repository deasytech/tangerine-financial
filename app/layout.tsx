import type { Metadata } from "next";
import "./globals.css";
import {
  gilroyBlack,
  gilroyBold,
  gilroyLight,
  gilroyMedium,
  gilroyRegular,
  gilroySemiBold,
} from "./font/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tangerine Africa Group",
  description:
    "Your financial partner and so much more. Free transfers, savings, loans, insurance, pensions and many other things at your finger tips.",
  assets: "../public/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyRegular.className} ${gilroyBlack.className} ${gilroyBold.className} ${gilroyLight.className} ${gilroyMedium.className} ${gilroySemiBold.className}`}
      >
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
