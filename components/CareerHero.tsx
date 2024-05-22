import React from 'react'

const CareerHero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/images/career-hero.png')",
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      overflow: 'hidden',
    }}>
      <div className="h-full flex flex-col justify-start items-center mt-44 w-full gap-6">
        <p className='regular-14 font-gilroy-semibold text-generic-500 uppercase'>careers at tangerine</p>
        <h1 className="bold-32 lg:bold-56 items-center text-center text-blue-950 w-full md:w-1/3">
          Unlock opportunities. Express your Tang.
        </h1>
        <p className="regular-18 text-center text-generic-700 w-full p-4 md:p-0 md:w-1/3">
          We are looking for passionate individuals full of zest who want to be part of our mission to help people live financially secure lives. Are you interested in joining our impressive galaxy of Tang Stars? Keep scrolling to learn more about life at Tangerine and view open roles
        </p>
      </div>
    </section>
  )
}

export default CareerHero