import Link from "next/link";
import React from "react";
import SubsidaryImage from "@/components/SubsidaryImage";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Subsidary = () => {
  return (
    <section className="relative max-container padding-container mt-24 flex flex-col gap-4">
      <h3 className="bold-40 text-orange-base">Our Subsidiaries</h3>
      <p className="regular-14 text-gray-700 font-gilroy-medium max-w-[544px]">
        We invest in businesses that merge deep consumer insights and
        cutting-edge technology to provide a range of carefully tailored
        products that improve life.
      </p>

      <div className="flex flex-col md:flex-row mt-10 max-w-full gap-4">
        <SubsidaryImage
          image="/images/general.png"
          name="General"
          link="/tangerine-general"
          hoverImage="/images/general-colored.png"
          hoverText="General Insurance" />
        <SubsidaryImage
          image="/images/life.png"
          name="Life"
          link="/tangerine-life"
          hoverImage="/images/life-colored.png"
          hoverText="Life Insurance" />
        <SubsidaryImage
          image="/images/pension.png"
          name="Pension"
          link="https://tangerineapt.ng"
          hoverImage="/images/pension-colored.png"
          hoverText="APT Pension" />
        <SubsidaryImage
          image="/images/health.png"
          name="Health"
          link="/tangerine-health"
          hoverImage="/images/health-colored.png"
          hoverText="Health Insurance" />
      </div>
    </section>
  );
};

export default Subsidary;
