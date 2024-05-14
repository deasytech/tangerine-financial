import RenderTag from "./RenderTag";

const Hero = () => {
  return (
    <section className="mt-20 relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-[600px]">
      <div
        className="absolute inset-0 h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
      />

      <div className="relative z-10 flex flex-col items-start max-w-[800px]">
        <h1 className="bold-32 mt-36 lg:bold-72 lg:mt-10 text-white">
          The provider of choice for insurance and pension solutions in Africa
        </h1>
        <div className="flex gap-4 mt-6">
          <RenderTag link="/" name="Insurance" />
          <RenderTag link="/" name="Health" />
          <RenderTag link="/" name="Pension" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
