import Button from "./Button";
import Link from "next/link";

const AboutFront = () => {
  return (
    <section className="relative max-container mx-20 -mt-20 bg-orange-50 rounded-3xl flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-[466px]">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: "url('/images/building.png')" }}
      />
      <div className="relative z-10 flex flex-col items-start max-w-[488px] gap-4 px-6 md:px-10 xl:px-16">
        <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
          About us
        </p>
        <h2 className="bold-40 text-orange-600">
          Everything
          <br /> you need
        </h2>
        <p className="regular-14 text-gray-700 font-gilroy-medium">
          Tangerine Financial is an investment holding company committed to
          empowering businesses and people across Africa to live financially
          secure lives, through the provision of comprehensive insurance and
          pensions solutions.
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
    </section>

  );
};

export default AboutFront;
