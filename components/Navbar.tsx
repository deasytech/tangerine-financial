import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Tangerine Africa"
          width={120}
          height={40}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-orange-600-base hover:text-white hover:p-2 hover:px-4 hover:rounded-full"
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
  );
};

export default Navbar;
