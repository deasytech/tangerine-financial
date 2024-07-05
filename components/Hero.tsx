import RenderTag from "./RenderTag";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero1.jpg')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="relative max-container padding-container z-10 flex flex-col items-center justify-start lg:items-start lg:flex">
          <h1 className="bold-56 items-center text-white lg:w-3/5">
            The provider of choice for insurance and pension solutions in Africa
          </h1>
          <div className="flex gap-4 mt-6">
            <RenderTag link="/tangerine-health" name="Health" />
            <RenderTag link="/tangerine-general" name="Insurance" />
            <RenderTag link="/tangerine-pension" name="Pension" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
