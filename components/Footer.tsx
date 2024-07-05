import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexCenter py-32 mt-10 bg-orange-50" style={{
      backgroundImage: "url('/images/footer-bg.svg')",
      backgroundPosition: "bottom center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={128}
                height={40}
              />
            </Link>
            <div>
              <p className="bold-16 font-gilroy-semibold">
                About Tangerine Financial
              </p>
              <p className="regular-12 max-w-xs font-gilroy-medium">
                Tangerine Financials is an investment holding company with
                registration number 13341620.
              </p>
            </div>
            <div className="flex flex-row gap-5 mt-16">
              <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.icon}
                    className="flex gap-2 items-center"
                    target="_blank"
                  >
                    <Image src={link.icon} alt="logo" width={18} height={18} />

                    <label className="regular-12 font-gilroy-medium text-blue-base cursor-pointer">
                      {link.label}
                    </label>
                  </Link>
                ))}
              </ul>
            </div>
            <h3 className="mt-14 text-gray-800 regular-12">
              © 2024 Tangerine Financial
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-12 flex flex-col gap-2 text-gray-800">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-base font-gilroy-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
