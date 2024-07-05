
const AboutHero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/images/hero2.svg')",
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      overflow: 'hidden',
    }}>
      <div className="max-container padding-container flex w-full h-full max-md:bg-white/75">
        <div className="h-full flex flex-col gap-3 justify-center items-start w-full max-w-lg">
          <h1 className="bold-32 lg:bold-56 items-center text-orange-base">
            Cover for all that matters
          </h1>
          <p className="regular-18 text-gray-500">
            Tangerine is a leading financial services platform that consistently
            goes the extra mile to improve businesses and individual lives. Our
            reliable financial service products create and protect wealth,
            guaranteeing an enjoyable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
