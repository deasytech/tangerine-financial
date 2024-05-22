import React from 'react'

const InvestorsPage = () => {
  return (
    <section className="relative h-screen bg-cover bg-center mt-24 mx-5" style={{
      backgroundImage: "url('/images/investor-hero.svg')",
      borderRadius: '32px',
      overflow: 'hidden',
    }}>
      <div className="ml-32 h-full flex flex-col justify-center items-start w-[30%]">
        <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-white">
          Investor Relations
        </h1>
        <p className="regular-18 text-white">
          Tangerine is a leading technology and financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security.
          Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.
        </p>
      </div>
    </section>
  )
}

export default InvestorsPage