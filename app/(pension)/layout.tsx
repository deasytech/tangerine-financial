import type { Metadata } from "next";
import Footer from "@/components/life/Footer";
import Navbar from "@/components/life/Navbar";

export const metadata: Metadata = {
  title: "Tangerine General Insurance",
  description:
    "Welcome to Total Health Trust Quick facts about THT: THT was founded in 1997 and commenced operations in June 1998 THT is Nigeria's leading Health Maintenance Organisation (HMO) THT won the Nigerian Healthcare Excellence Award for HMO of the year in 2016 and 2017 THT is HMO of choice to over 300 000 members from &hellip; Continued",
  assets: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* <Navbar /> */}
      <div className="relative overflow-hidden">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
