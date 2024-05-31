import React from 'react'
import Slider from './_components/Slider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const TangHealthPage = () => {
  return (
    <>
      <Slider />

      <section className="relative w-full min-h-[481px] bg-cover bg-center mt-11" style={{
        backgroundImage: "url('/images/tht/city-scape.svg')",
        overflow: 'hidden',
      }}>
        <div className="h-full flex flex-col justify-start items-center mt-6 w-full gap-6">
          <h1 className="bold-32 lg:bold-56 items-center text-center text-blue-950 w-full md:w-2/3">
            Access to Comprehensive and robust healthcare is what we do
          </h1>
          <p className="regular-24 text-center text-blue-950 w-full p-4 md:p-0 md:w-1/2">
            We are the preferred and trusted health insurance and well-being partner to over 400 multinationals, large local corporates, MSMEs and individuals.
          </p>
        </div>
      </section>

      <section className="relative flex w-full items-center justify-center min-h-[624px] bg-blue-950 -mt-3" style={{
        backgroundImage: "url('/images/tht/white-rope.svg')",
        backgroundPosition: "center center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        overflow: 'hidden',
      }}>
        <div className="relative h-full bg-white min-h-[372px] px-12 py-16 max-w-3xl rounded-3xl flex flex-col justify-center items-center gap-6">
          <h5 className='absolute px-4 py-2 border border-generic-800 rounded-full -top-4 w-fit small-medium uppercase text-blue-950 bg-white'>Who we are</h5>
          <p className='text-center regular-20 text-blue-950'>Total Health Trust (THT), a Tangerine company is the foremost Health Maintenance organisation (HMO) with 26 years of experience providing in-and-out-of-country healthcare access and wellness services. The brand leverages expertise and technology in delivering world-class healthcare and wellness user experiences.</p>
          <Link href="/" className="flex items-center gap-2 rounded-lg btn_dark_orange w-fit">
            <span>Learn more</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className='relative max-container padding-container flex gap-8 mt-16'>
        <div className='bg-orange-base flex items-center justify-center p-8 w-full rounded-3xl gap-8'>
          <Image src="/images/tht/award.svg" alt="award" width={119} height={101} />
          <div className='flex flex-col gap-4'>
            <p className='regular-18 !leading-7 !font-gilroy-medium text-white'>4-time winner</p>
            <p className='bold-36 text-white'>NHEA HMO of the Year Award.</p>
          </div>
        </div>
        <div className='bg-blue-50 w-full grid grid-cols-2 rounded-3xl p-4 gap-4'>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>240,000+</p>
            <p className='regular-16 text-generic-950'>Enrollees</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>186+</p>
            <p className='regular-16 text-generic-950'>Staff strength</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>9</p>
            <p className='regular-16 text-generic-950'>Locations across Nigeria</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>1700+</p>
            <p className='regular-16 text-generic-950'>Provider network</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="bold-40 text-blue-950">
          Our Plans
          </h2>
          <p className="regular-18 !leading-[26px] max-w-md">Our diverse healthcare products are tailored to every Health and budget need.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-blue-950 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-white">
            Corporate & MSMEs Plans
            </h2>
            <p className='regular-18 !leading-[26px] text-white'>Budget-friendly and carefully designed healthcare plans for corporate organisations and businesses.</p>
            <Link href="/" className="flex gap-2 items-center rounded-lg btn_white w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-blue-950' />
            </Link>
          </div>
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-4 rounded-3xl">
          <p className='regular-14 uppercase text-blue-950 font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-blue-950">
            Individual Plans
            </h2>
            <p className='regular-18 !leading-[26px] text-blue-950'>Flexible and affordable individual plans covering a wide range of healthcare services.</p>
            <Link href="/" className="flex gap-2 items-center rounded-lg btn_blue w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-white' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TangHealthPage