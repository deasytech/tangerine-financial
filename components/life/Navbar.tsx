"use client"

import { NAV_LINKS } from "@/constants/life";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [ activeMenu, setActiveMenu ] = useState<string | null>(null);
  
  const hiddenPaths = [
    "/tangerine-health/find-provider",
    "/tangerine-health/join-provider-network",
    "/tangerine-health/login",
    "/tangerine-health/policy-holder",
    "/tangerine-health/service-provider",
    "/tangerine-health/corporate",
    "/tangerine-health/broker",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  const handleMenuClick = (key: string) => {
    setActiveMenu((prevMenu) => (prevMenu === key ? null : key));
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/tangerine-health">
          <Image
            src="/images/life/logo.svg"
            alt="Tangerine Africa"
            width={127}
            height={40}
          />
        </Link>

        <ul className="hidden items-center h-full gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative">
              {link.subMenu ? (
                <button
                  onClick={() => handleMenuClick(link.key)}
                  className="regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-green-50 p-1 px-4 hover:rounded-full"
                >
                  {link.label}
                  <ChevronDown className="ml-2" size={16} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  key={link.key}
                  onClick={handleSubMenuClick}
                  className={`regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-green-50 p-1 px-4 hover:rounded-full ${pathname === link.href ? 'bg-green-base rounded-full text-white hover:text-blue-base' : ''}`}
                >
                  {link.label}
                </Link>
              )}
              {link.subMenu && activeMenu === link.key && (
                <div className="absolute left-0 top-full mt-2 w-[333px] bg-white shadow-lg rounded-xl p-4">
                  <ul className="flex gap-8">
                    <div className="w-full flex flex-col gap-2">
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.key} className="mb-2 p-2 last:mb-0 hover:bg-green-50">
                          <Link href={subLink.href} className="regular-12 text-generic-700" onClick={handleSubMenuClick}>
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden gap-4">
          <Link href="/tangerine-life/get-started" className="btn_green rounded-lg">
            Get Started
          </Link>
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