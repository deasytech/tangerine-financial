import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutFront = () => {
  return (
    <section className="relative max-container padding-container -mt-20">
      <div className="h-[466px] bg-cover bg-center bg-orange-50" style={{
        backgroundImage: "url('/images/building.png')",
        borderRadius: '32px',
        overflow: 'hidden',
      }}>
        <div className="p-24 flex flex-col gap-3 justify-center items-start w-full max-w-2xl h-full">
          <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
            About us
          </p>
          <h2 className="bold-40 text-orange-600">
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
  );
};

export default AboutFront;
