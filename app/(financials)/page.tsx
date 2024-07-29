import Hero from "@/components/Hero";
import OurImpact from "@/components/OurImpact";
import SubsidiaryImage from "@/components/SubsidiaryImage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative max-container padding-container -mt-20">
        <div className="h-[466px] bg-cover bg-center bg-orange-50" style={{
          backgroundImage: "url('/images/building.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="p-12 md:p-24 flex flex-col gap-3 justify-center items-start w-full max-w-2xl h-full">
            <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
              About us
            </p>
            <h2 className="bold-32 md:bold-40 text-orange-base">
              Everything you need
            </h2>
            <p className="regular-14 text-gray-700 font-gilroy-medium">
              Tangerine Financial is an investment holding company committed to empowering businesses and people across Africa to live financially secure lives, through the provision of comprehensive insurance and pensions solutions.
            </p>
            <Link href="/overview">
              <Button variant="secondary" size="lg" className="gap-2">
                Learn more
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative max-container padding-container mt-24 flex flex-col gap-4">
        <h3 className="bold-40 text-orange-base">Our Subsidiaries</h3>
        <p className="regular-14 text-gray-700 font-gilroy-medium max-w-[544px]">
          We invest in businesses that merge deep consumer insights and
          cutting-edge technology to provide a range of carefully tailored
          products that improve life.
        </p>

        <div className="flex flex-col md:flex-row mt-10 max-w-full gap-4">
          <SubsidiaryImage
            image="/images/general.png"
            name="General"
            link="https://general.tangerine.africa"
            hoverImage="/images/general-colored.png"
            hoverText="General Insurance" />
          <SubsidiaryImage
            image="/images/life.png"
            name="Life"
            link="https://life.tangerine.africa"
            hoverImage="/images/life-colored.png"
            hoverText="Life Insurance" />
          <SubsidiaryImage
            image="/images/pension.png"
            name="Pension"
            link="https://tangerineapt.ng"
            hoverImage="/images/pension-colored.png"
            hoverText="APT Pension" />
          <SubsidiaryImage
            image="/images/health.png"
            name="Health"
            link="https://tht.tangerine.africa"
            hoverImage="/images/health-colored.png"
            hoverText="Health Insurance" />
        </div>
      </section>
      <OurImpact />
    </>
  );
}
