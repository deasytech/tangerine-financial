import RenderTag from "./RenderTag";

const AboutHero = () => {
  return (
    <section className="mt-20 relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-[900px]">
      <div
        className="absolute inset-0 h-screen w-screen bg-cover bg-bottom"
        style={{ backgroundImage: "url('/images/hero2.svg')" }}
      />

      <div className="relative z-10 flex flex-col items-start max-w-[450px] gap-2">
        <h1 className="bold-32 mt-36 lg:bold-40 lg:mt-10 text-orange-600-base">
          Cover for all that matters
        </h1>
        <p className="regular-18 text-gray-500">
          Tangerine is a leading financial services platform that consistently
          goes the extra mile to improve businesses and individual lives. Our
          reliable financial service products create and protect wealth,
          guaranteeing an enjoyable future.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
