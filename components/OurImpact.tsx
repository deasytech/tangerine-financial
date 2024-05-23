import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const OurImpact = () => {
  return (
    <section className="relative max-container padding-container flex flex-col md:flex-row gap-6 justify-between mt-24">
      <div className="w-full flex flex-col gap-4">
        <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
          our impact
        </p>
        <h2 className="bold-40 text-orange-base max-w-md">
          Our Commitment to Social Responsibility
        </h2>
        <p className="regular-14 text-gray-700 font-gilroy-medium max-w-md">
          At Tangerine Financial, we are enthusiastic about sustainability,
          which is the core of our approach to Corporate Social Responsibility.
          We believe it is central (or fundamental) to driving impact in our
          communities.
        </p>
        <Link href="/" className="cursor-pointer">
          <Button
            title="Learn more"
            type="button"
            icon="/icons/arrow-right.svg"
            variant="btn_dark_orange"
          />
        </Link>
      </div>
      <div className="w-full relative flex justify-end">
        <div className="bg-green-50 rounded-3xl w-full h-80 absolute z-0" />
        <Image
          src="/images/impact.png"
          alt="our impact"
          width={492}
          height={505}
          className="z-50 relative"
        />
      </div>
    </section>
  );
};

export default OurImpact;
