import TeamCard from '@/components/cards/TeamCard'
import { CloudDownloadIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LeadershipPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-48">
        <div className="mb-14 flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="bold-40 text-orange-base">
            Management Team
          </h2>
          <p className="regular-18 text-generic-800">At Tangerine Africa, our leadership team is comprised of seasoned professionals dedicated to driving our company forward. Led by our CEO, they bring expertise in strategic planning, operations management, financial stewardship, and marketing innovation.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <TeamCard
            image="/images/team/cardoso.svg"
            name="Lola Cardoso"
            position="Group Chief Executive Officer"
          />
          <TeamCard
            image="/images/team/abrantes.svg"
            name="Helio Abrantes"
            position="Group Chief Financial Officer"
          />
          <TeamCard
            image="/images/team/sijuwade.svg"
            name="Christine Sijuwade"
            position="Group General Counsel & Group Head of Legal and Compliance"
          />
          <TeamCard
            image="/images/team/bakere.svg"
            name="Sekeenat Bakere"
            position="Executive Director of Tangerine Life"
          />
        </div>
      </section>

      <section id="directors" className="relative max-container padding-container mt-48">
        <div className="mb-14 flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="bold-40 text-orange-base">
            Board of Directors
          </h2>
          <p className="regular-18 text-generic-800">Our board of directors, under the guidance of our esteemed Chairperson, ensures that Tangerine Financial operates with integrity and foresight. With a diverse range of backgrounds and experiences, our board members provide invaluable insight and oversight to our strategic decisions.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <TeamCard
            image="/images/team/cardoso.svg"
            name="Lola Cardoso"
            position=""
          />
          <TeamCard
            image="/images/team/soerensen.png"
            name="Nieros Oyegun Soerensen"
            position=""
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-48">
        <div className="mb-14 flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="bold-40 text-orange-base">
            Business Heads
          </h2>
          <p className="regular-18 text-generic-800">At the core of our operations lies our dedicated Business Heads, steadfast in their pursuit of excellence across every facet of our business. Each business head contributes their distinct expertise, propelling our growth trajectory and guaranteeing unparalleled customer satisfaction.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <TeamCard
            image="/images/team/adeduro.svg"
            name="Ademayowa Adeduro"
            position="Managing Director"
          />
          <TeamCard
            image="/images/team/mbuya.svg"
            name="Anele Mbuya"
            position="Executive Director, Acting Managing Director"
          />
          <TeamCard
            image="/images/team/deinde.svg"
            name="Toyin Deinde"
            position="Chief Operating Officer"
          />
          <TeamCard
            image="/images/team/mohammed.svg"
            name="Aliyu D. Mohammed"
            position="Managing Director"
          />
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
            <Link href="/TangerineCorporateProfile.pdf" target='_blank' className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
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