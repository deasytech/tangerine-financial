import Button from '@/components/Button'
import ImpactHero from '@/components/ImpactHero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImpactPage = () => {
  return (
    <>
      <ImpactHero />

      <section className="relative w-full bg-white -mt-10 rounded-tl-3xl rounded-tr-3xl pt-20">
        <div className="max-container padding-container">
          <div className="w-full flex flex-col gap-4 mb-16">
            <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
              our csr anchors
            </p>
            <h2 className="bold-40 text-orange-base max-w-lg">
              Based on our high ethical standards, we aspire to deliver excellently on our CSR pillars.
            </h2>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-green-50 rounded-3xl" style={{
          backgroundImage: "url('/images/green-earth.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start p-12 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-green-base">Environmental Impact</h3>
            <p className="regular-18 text-generic-800 text-start">
              Tangerine is dedicated to protecting the planet we all share by reducing waste, saving energy, and conserving water resources. Through strategic partnerships and initiatives, we engage in periodic activities that focus on creating a more sustainable environment.
            </p>
            <p className="regular-18 text-generic-800 text-start">
              It is our long-term vision to achieve healthier waste management in our operations, workspaces, and community. We run a waste management program to reduce, reuse, recycle, donate, and encourage behaviour change beginning with employees and extended to the public.
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-orange-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <h2 className="bold-40 text-orange-base">
              Education & Advocacy
            </h2>
            <p className="regular-18 text-generic-800 text-start">
              Using the strength of our social capital, we engage stakeholders to educate staff and ensure adherence to best practices.
            </p>
            <p className="regular-18 text-generic-800 text-start">We also provide educational opportunities to the coming generation through our scholarship programs, as we believe that quality education increases opportunities to access a better life.</p>
          </div>
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <h2 className="bold-40 text-blue-base">
              Community Involvement
            </h2>
            <p className="regular-18 text-generic-800 text-start">Encouraging employee participation, we engage in community-related activities that directly affect the environment where we live and work. Tangerine recognizes the importance of community involvement as the interdependence between our business and the community is undeniable.</p>
            <p className="regular-18 text-generic-800 text-start">We embrace giving back; through financial contributions, collaborating with organizations and events, in-kind gifts, and employee volunteerism, we foster positive change in communities.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container flexCenter flex-col md:flex-row justify-between mt-24">
        <div className="w-full flex flex-col gap-4">
          <p className="regular-14 uppercase text-gray-400 font-gilroy-semibold">
            other initiatives
          </p>
          <h2 className="bold-40 text-orange-base max-w-md">
            Recycling for Scholarships
          </h2>
          <p className="regular-14 text-generic-800 font-gilroy-medium max-w-md">
            Recycling for scholarship is an initiative aimed at decreasing illiteracy using a method that simultaneously preserves the environment. Our goal is to provide children with resources to get a quality education, as an inability to pay fees is a leading reason for a high number of children out of school.
          </p>
        </div>
        <div className="w-full relative flex justify-end">
          <Image
            src="/images/impact.png"
            alt="our impact"
            width={492}
            height={505}
            className="relative z-[1]"
          />
        </div>
      </section>

      <section className='relative max-container padding-container -mt-8'>
        <div className='flex gap-8 bg-green-50 p-16 rounded-3xl'>
          <p className='regular-18 text-generic-700'>We organized the first edition in July 2020 through a recyclable collection drive tagged <span className='text-orange-base'>#TangerinePlasticChallenge.</span> Following the 3-day collection exercise, about 642kg of recyclables was presented to ISRINA School, Ajegunle Lagos. ISRINA School receives recyclables as a form of school fee payment. Miss Yetunde Saheed was the scholarship recipient for the 2020/2021 academic year.</p>
          <p className='regular-18 text-generic-700'>For the second edition, we are in partnership with the Lagos State Waste Management (LAWMA). Mesh bins have been set in strategic locations in Lagos state to collect recyclable plastic items. After the collection period, accredited recyclers will weigh the items, and exchange them for money or present them as an acceptable mode of school fee payment. Our target is to sponsor 10 kids by the beginning of the next academic year September</p>
        </div>
      </section>

      <section className="relative w-full bg-white mt-5 rounded-tl-3xl rounded-tr-3xl pt-20">
        <div className="max-container padding-container">
          <div className="w-full flex flex-col gap-4 mb-16 max-w-lg">
            <p className="regular-14 uppercase text-generic-700 font-gilroy-semibold">
              Championing Sustainability Through CSR
            </p>
            <h2 className="bold-40 text-blue-base">
              Ethical Impact: Illuminating Our CSR Footprint
            </h2>
            <p className="regular-14 text-generic-700 font-gilroy-medium">Discover the ethical dimensions of our CSR efforts. Dive into our commitment to making a positive impact, guided by transparency and adherence to ISO 26000 standards.</p>
            <div className='flex gap-5'>
              <Link href="/" className='cursor-pointer w-fit'>
                <Button type='button' title='Become a Partner' variant='btn_dark_orange' />
              </Link>
              <Button type='button' title='Explore Our CSR Reports' variant='btn_dark_orange_outline' />
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-red-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <Image
              src="/icons/file.svg"
              alt='CSR Reporting'
              width={56} height={56}
              className='bg-red-100 rounded-full'
            />
            <h2 className="bold-40 text-red-600">
              CSR Reporting
            </h2>
            <p className="regular-18 text-generic-800 text-start">
              We are committed to providing an account of our performance on issues of interest to our stakeholders. Our reports by our CSR Framework compliance with ISO 26000 standard urges that, at appropriate intervals, users should report on their performance on social responsibility to the stakeholders. Our report will include a complete picture of performance.
            </p>
          </div>
          <div className="bg-secondary-50 w-full p-12 flex flex-col gap-6 rounded-3xl">
            <Image
              src="/icons/briefcase.svg"
              alt='Our Business'
              width={56} height={56}
              className='bg-secondary-100 rounded-full'
            />
            <h2 className="bold-40 text-secondary-950">
              Our Business
            </h2>
            <p className="regular-18 text-generic-800 text-start">At Tangerine, our products and services are digital thereby encouraging accessibility and energy efficiency in our operations.<br />
              As a business, our goal is to secure the financial future of our customers and their loved ones and leave behind something of endearing value to the next generation. We are committed to creating a positive experience for our clients to promote their financial well-being. Driven by innovation, we provide a range of products that help our clients access reliable financial services that enrich their lives.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-blue-950 rounded-3xl" style={{
          backgroundImage: "url('/images/envelope.png')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-white">Sign up to our Newsletter</h3>
            <p className="regular-18 text-white text-center">
            Get updates on our products, offerings.
            </p>
            <div className='flex w-full bg-white rounded-lg p-2 gap-2'>
              <input type="text" placeholder='Your email' className='w-full no-focus' />
              <Button type='button' title='Get in touch' variant='btn_dark_orange' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImpactPage