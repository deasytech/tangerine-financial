"use client";

import Image from "next/image";
import Link from "next/link";
import { NavbarMenu } from "./NavbarMenu";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {

  return (
    <div className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Tangerine Africa" width={120} height={40} />
        </Link>
        <div className="hidden lg:flex">
          <NavbarMenu />
        </div>
        <div className="lg:flexCenter hidden gap-4">
          <Link href="/contact" className="btn_dark_orange rounded-lg">
            Contact Us
          </Link>
          {/* <Link href="/get-started" className="btn_dark_orange rounded-lg">
            Get Started
          </Link> */}
        </div>

        <MobileNavbar />
      </nav>
    </div>
  );
};

export default Navbar;
