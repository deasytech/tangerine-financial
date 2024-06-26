"use client"

import { FOOTER_LINKS } from "@/constants/life";
import { textToSlug } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const hiddenPaths = [
    "/tangerine-health/find-provider",
    "/tangerine-health/join-provider-network",
    "/tangerine-health/login",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <>
      <footer className="bg-green-50 flex w-full flex-col gap-14 mt-24 py-20">
        <div className="relative padding-container max-container flex gap-6">
          <div className="w-full flex flex-col gap-4">
            <Image src="/images/life/logo.svg" alt="twitter logo" width={127} height={40} />
            <p className="regular-14 !font-gilroy-medium max-w-xs text-green-900">Empowering people to live financially secure.</p>
            <div className='flex gap-4'>
              <Image src="/icons/life/linkedin.svg" alt="linkedin logo" width={16} height={16} />
              <Image src="/icons/life/facebook.svg" alt="facebook logo" width={16} height={16} />
              <Image src="/icons/life/instagram.svg" alt="instagram logo" width={16} height={16} />
              <Image src="/icons/life/twitter.svg" alt="twitter logo" width={16} height={16} />
            </div>
            <p className="regular-24 text-green-950 mt-4">Still Have Questions?</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-base text-green-950 font-gilroy-light">
              <p>We're here to help</p>
              <p>For General Inquiries</p>
              <div className="flex items-center gap-3 py-2 px-4 border w-fit border-green-950 rounded-full">
                <Mail size={16} />
                <p>wecare@tangerine.africa</p>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 border w-fit border-green-950 rounded-full">
                <Mail size={16} />
                <p>hello@tangerine.africa</p>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 border w-fit border-green-950 rounded-full">
                <Phone size={16} />
                <p>02-016309500</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FOOTER_LINKS.map((columns, index) => (
                <FooterColumn title={columns.title} key={index}>
                  <ul className="regular-12 !font-gilroy-light flex flex-col gap-2 text-gray-800">
                    {columns.links.map((link) => (
                      <Link href={`/tangerine-life/${textToSlug(link)}`} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
          </div>
          
        </div>

        <div className="padding-container max-container">
          <div className="flex flex-col md:flex-row gap-6 p-10 bg-green-900 rounded-3xl">
            <div className="w-full flex flex-col gap-6">
              <h3 className="bold-14 text-white uppercase">Contact</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">General Queries:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">0700 868 2548 (0700 TOTAL HT)<br />
                    WhatsApp: +234 901 607 7606<br />
                    contactcentre@totalhealthtrust.com</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Client Service:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">clientservice@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Sales:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">marketingTHT@tangerina.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Membership and Underwriting:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">membership@tangerina.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Provider Management:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">providermanagement@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Claims:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">claimsTHT@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Wellness:</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">wellness@tangerine.africa</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h3 className="bold-14 text-white uppercase">Location</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Lagos</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">2 Marconi Road, Palm grove Estate, Lagos state. 0700 8682548 <br />
                    contactcentre@tangerine.africa <br />
                    WhatsApp 09016077606</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Portharcourt</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">1st Floor City-view Plaza, 26 Aba Road, After Liquid Bulk Fuel Station, Portharcourt, Rivers State
                    THTPortHarcourt@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Abuja</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">2nd floor, El-Yakubu Place, Plot 1129, Zakariya Malami Street, Adjacent to Nigeria Defence College, Central Business District, Abuja
                    THTAbuja@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Ibadan</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">14th Floor, Cocoa House Building, Oba Adebimpe<br />
                    Road Dugbe, Ibadan<br />
                    THTIbadan@tangerine.africa</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h3 className="bold-14 text-white uppercase">More</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Enugu</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">16 Marcus Harvey Street, New Haven, Enugu
                    THTEnugu@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Kaduna</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">Hasfsat Plaza, 4 Constitution Road, Kaduna
                    THTKaduna@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Yola</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">30 Atiku Abubakar Road, Saburu House, 2nd Floor, Right Wing, Jimeta, Yola
                    THTYola@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Ilorin</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">16B Coca-Cola Road, Opposite Ariya Hotel, Ilorin
                    THTIlorin@tangerine.africa</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-light w-full">Benin</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">1st Floor, Austin Lyin Plaza, 99a First East Circular Road, Opposite Uvbi Primary School, By St. Joseph Catholic Church, Benin City, Edo State
                    THTBenin@tangerine.africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="bold-18 whitespace-nowrap uppercase text-generic-950">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
