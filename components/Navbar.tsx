"use client"

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => { 
  const pathname = usePathname();

  return (
    <div className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Tangerine Africa"
            width={120}
            height={40}
          />
        </Link>

        <ul className="hidden items-center h-full gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-orange-50 p-1 px-4 hover:rounded-full ${pathname === link.href ? 'bg-orange-base rounded-full text-white hover:text-blue-base' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden gap-4">
          <Link href="/" className="regular-12">
            Contact Us
          </Link>
          <Button type="button" title="Get Started" variant="btn_dark_orange" />
        </div>

        <Image
          src="/icons/menu.svg"
          alt="hand burger"
          width={32}
          height={32}
          className="cursor-pointer lg:hidden"
        />
      </nav>
    </div>
  );
};

export default Navbar;
