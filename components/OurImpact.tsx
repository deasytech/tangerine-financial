import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OurImpact = () => {
  return (
    <section className="relative max-container padding-container flex flex-col md:flex-row gap-6 justify-between mt-24">
      <div className="w-full max-w-md flex flex-col gap-4">
        <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
          our impact
        </p>
        <h2 className="bold-40 text-orange-base">
          Our Commitment to Social Responsibility
        </h2>
        <p className="regular-14 text-gray-700 font-gilroy-medium">
          At Tangerine Financial, we are enthusiastic about sustainability,
          which is the core of our approach to Corporate Social Responsibility.
          We believe it is central (or fundamental) to driving impact in our
          communities.
        </p>
        <Link href="/impact">
          <Button variant="secondary" size="lg" className="gap-2">
            Learn more
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="w-full relative flex justify-end">
        <div className="bg-green-50 rounded-3xl w-full h-80 absolute z-0" />
        <Image
          src="/images/impact.png"
          alt="our impact"
          width={492}
          height={505}
          className="z-1 relative"
        />
      </div>
    </section>
  );
};

export default OurImpact;
