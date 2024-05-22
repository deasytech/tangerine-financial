import { CloudDownloadIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LeadershipPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-48">
        <div className="mb-14 flex flex-col gap-4 w-1/2">
          <h2 className="bold-40 text-orange-base">
            Management Team
          </h2>
          <p className="regular-18 text-generic-800">At Tangerine Africa, our leadership team is comprised of seasoned professionals dedicated to driving our company forward. Led by our CEO, they bring expertise in strategic planning, operations management, financial stewardship, and marketing innovation.</p>
        </div>
        <div className=''>
          <div className='flex'>
            <div className='flex flex-col gap-1 w-full'>
              <div className='bg-white p-3'>
                <h3 className='text-orange-base'>Lola Cardoso</h3>
                <p className='regular-12'>Group Chief Executive Officer</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <div className='bg-white p-3'>
                <h3 className='text-orange-base'>Helio Abrantes</h3>
                <p className='regular-12'>Group Chief Financial Officer</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <div className='bg-white p-3'>
                <h3 className='text-orange-base'>Christine Sijuwade</h3>
                <p className='regular-12'>Group General Counsel & Group Head of Legal and Compliance</p>
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <div className='bg-white p-3'>
                <h3 className='text-orange-base'>Sekeenat Bakere</h3>
                <p className='regular-12'>Executive Director of Tangerine Life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-base rounded-3xl" style={{
          backgroundImage: "url('/images/tang-building.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-white">Explore more about us</h3>
            <p className="regular-18 text-white text-center">
              Download our Corporate Profile for a comprehensive overview.
            </p>
            <Link href="/" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-orange-base text-base font-normal font-gilroy-semibold">Dowload</p>
              <CloudDownloadIcon className="text-orange-base" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadershipPage