import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GetStartedPage = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/images/get-started-bg.svg')",
      overflow: 'hidden',
    }}>
      <div className="max-container padding-container h-full flex gap-32 justify-center items-center">
        <div className='w-full flex flex-col'>
          <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-orange-base">
            What cover would you like?
          </h1>
          <p className="regular-18 text-gray-500">
            Tangerine helps you to protect the future and everything else that matters in an easy and affordable way.
          </p>
        </div>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex gap-8'>
            <Link href="/tangerine-general" target="_blank" className='flex flex-col gap-2'>
              <Image src="/images/general-insurance.png" alt="" width={176} height={102} />
              <p className="regular-18 text-blue-950">General Insurance</p>
            </Link>
            <Link href="/tangerine-life" target="_blank" className='flex flex-col gap-2'>
              <Image src="/images/life-insurance.png" alt="" width={176} height={102} />
              <p className="regular-18 text-blue-950">Life Insurance</p>
            </Link>
          </div>
          <div className='flex gap-8'>
            <Link href="/tangerine-health" target="_blank" className='flex flex-col gap-2'>
              <Image src="/images/health-insurance.png" alt="" width={176} height={102} />
              <p className="regular-18 text-blue-950">Health Insurance</p>
            </Link>
            <Link href="/tangerine-pension" target="_blank" className='flex flex-col gap-2'>
              <Image src="/images/pension-start.png" alt="" width={176} height={102} />
              <p className="regular-18 text-blue-950">Pensions</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedPage