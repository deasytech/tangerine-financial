import React from 'react'

const ImpactHero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-orange-base" style={{
      backgroundImage: "url('/images/impact-bg.png')", 
      overflow: 'hidden',
    }}>
      <div className="h-full flex flex-col justify-start items-center mt-36 w-full gap-6">
        <h1 className="bold-32 lg:bold-56 items-center text-center mb-3 lg:mt-10 text-white w-1/2">
        Tangerine: Sustainability, Responsibility, Impact
        </h1>
        <p className="regular-18 text-center text-orange-100 w-1/3">
        We prosper more as a people when businesses add their voices and efforts to create a better tomorrow for all.
        </p>
      </div>
    </section>
  )
}

export default ImpactHero