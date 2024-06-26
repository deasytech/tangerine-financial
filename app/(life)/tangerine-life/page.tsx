import LifeInsuranceCard from '@/components/life/cards/LifeInsuranceCard'
import { LIFE_INSURANCE } from '@/constants/life'
import { naira } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TangLifePage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-32">
        <div className="h-[640px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/life/home-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-10 md:ml-32 h-full flex flex-col justify-center items-start w-full md:w-[40%]">
            <h1 className="bold-32 lg:bold-56 items-center mb-3 text-white !font-gilroy-black">
              Our <br />TANG Mission
            </h1>
            <p className="text-[28px] !font-gilroy-medium text-white max-w-md">Our mission is to help people live financially secure lives.</p>
          </div>
        </div>
      </section>

      <section className="max-container padding-container text-center mt-20">
        <div className="h-full flex flex-col justify-start items-center w-full gap-6">
          <h2 className="bold-48 text-green-base w-full md:w-1/2">Superior protection for your people and product</h2>
          <p className="regular-18 text-generic-700 w-full md:w-1/2">Life is unpredictable. Plans change unexpectedly. That's why our life insurance products are designed to provide dependable protection for you and your loved ones, no matter what life throws your way.</p>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4 px-10">
          <p className="regular-14 !font-gilroy-semibold text-orange-base uppercase py-2 px-4 bg-orange-50 w-fit rounded-xl">our plans</p>
          <h2 className="bold-48 text-green-base max-w-md">
            Choose a cover that's right for you.
          </h2>
          <p className="regular-18 !leading-[26px] max-w-md text-generic-500">With a variety of plans to choose from, get one that meets your present and future needs.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-green-950 w-full p-12 flex flex-col gap-4 rounded-2xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-white">
              Corporate Products
            </h2>
            <p className='regular-18 !leading-[32px] text-white'>A tailored solution for your company's insurance needs. With our comprehensive coverage and flexible options, we provide peace of mind for both employers and employees. Secure your team's future with Tangerine Life Corporate Plan today.</p>
            <Link href="/" className="flex gap-2 items-center rounded-lg btn_green w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-white' />
            </Link>
          </div>
          <div className="bg-green-base w-full p-12 flex flex-col gap-4 rounded-2xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-white">
              Retail Products
            </h2>
            <p className='regular-18 !leading-[32px] text-white'>Our retail plans offer tailored solutions for diverse needs, including Investment linked Products, Endowment and Protection Plans with customisable coverage</p>
            <Link href="/" className="flex gap-2 items-center rounded-lg btn_white !text-green-base w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-green-base' />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-container padding-container mt-32">
        <div className="bg-orange-50 flex gap-8 px-12 py-20 rounded-2xl relative">
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="bold-48 text-green-700">Who benefits when you buy Tangerine Life Insurance Products?</h3>
            <p className="regular-18 text-generic-800">With Tangerine Life Insurance, everyone benefits. As the policyholder, you gain peace of mind, while your beneficiaries receive financial security.
              It's a win-win for all, ensuring comprehensive protection and reassurance.</p>
          </div>
          <Image
            src="/images/life/home-benefit-img.png"
            alt="benefit"
            width={571} height={583}
            className="absolute -top-28 right-20 xs:hidden lg:flex"
          />
        </div>
      </section>

      <section className="bg-green-50 mt-24">
        <div className="max-container padding-container justify-center flex flex-col md:flex-row items-center py-6">
          <h3 className="regular-24 text-green-base uppercase !font-gilroy-bold w-full text-center">SELF SERVICE</h3>
          <h3 className="regular-24 text-green-base uppercase !font-gilroy-bold w-full text-center">MAKE A CLAIM</h3>
          <h3 className="regular-24 text-green-base uppercase !font-gilroy-bold w-full text-center">RENEW MY POLICY</h3>
          <h3 className="regular-24 text-green-base uppercase !font-gilroy-bold w-full text-center">GET A QUOTE</h3>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <h3 className="bold-56 text-green-base w-full md:w-1/2 mb-10">Why choose Tangerine Life Insurance?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LIFE_INSURANCE.map((item) =>
            <LifeInsuranceCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default TangLifePage