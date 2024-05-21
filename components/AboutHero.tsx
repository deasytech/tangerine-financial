
const AboutHero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/images/hero2.svg')", 
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      overflow: 'hidden',
    }}>
      <div className="ml-32 h-full flex flex-col justify-center items-start w-[30%]">
        <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-orange-base">
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
