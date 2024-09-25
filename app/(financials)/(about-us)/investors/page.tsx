import KeyFigures from '@/components/KeyFigures'
import SubsidaryImage from '@/components/SubsidiaryImage'
import { Button } from '@/components/ui/button'
import { PRESS } from '@/constants'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InvestorsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-24">
        <div className="h-[693px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/investor-hero.svg')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 h-full flex flex-col gap-3 justify-center items-start w-full max-w-xl">
            <h1 className="bold-56 items-center text-white">
              Investor Relations
            </h1>
            <p className="regular-18 text-white">Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-50 rounded-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url('/images/investor-img.svg')",
              backgroundPosition: "bottom right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: "80px",
            }}
          />
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2 relative z-10">
            <h3 className="bold-32 md:bold-48 text-blue-950">Company profile</h3>
            <p className="regular-18 text-generic-800 text-center px-6 md:px-0 md:text-start">
              Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security. <br />Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="bold-40 text-orange-base">
            Key Figures
          </h2>
          <p className="regular-18 text-generic-800">Tangerine Annual report 2023</p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <KeyFigures
            price="23.11m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Gross written premium"
          />
          <KeyFigures
            price="693k"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Profit before tax"
          />
          <KeyFigures
            price="29.68m"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Shareholders' funds"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-base rounded-3xl" style={{
          backgroundImage: "url('/images/annual-report.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-4 flex w-full md:w-1/2">
            <p className="regular-18 text-white">Financial strategy</p>
            <h3 className="bold-32 md:bold-48 text-white">2023 Annual Report</h3>
            <p className="regular-18 text-white">
              Access the Tangerine's earnings-related financial information: the 1Q and 9M activity indicators but also the half-year and annual results
            </p>
            <Link href="/TGIL_2023_FCR_Non-Life_Report_-_Abridged_Version.pdf" target="_blank" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-orange-base text-base font-normal font-gilroy-semibold">Read report</p>
              <ArrowRight className="text-orange-base" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32 flex flex-col gap-20 md:flex-row items-center">
        <div className="w-full">
          <h3 className="bold-48 mb-12 text-blue-950">Press Releases</h3>
          {PRESS.map((press, index) => (
            <Link
              key={press.slug}
              href={`press/${press.slug}`}
              className={`flex flex-col p-4 gap-4 ${index !== PRESS.length - 1 ? 'border-b border-generic-500' : ''
                }`}
            >
              <p className="regular-12">{press.date}</p>
              <p className="regular-16 text-generic-700">{press.title}</p>
            </Link>
          ))}
          <Link href="/" className="flex items-center gap-2 text-orange-base w-fit mt-6">
            <span>View all releases</span>
            <ArrowRight size={16} className="text-orange-base" />
          </Link>
        </div>
        <div className="w-full px-10 md:px-20 py-16 md:py-28 flex flex-col gap-6" style={{
          backgroundImage: "url('/images/executive-bg.svg')",
          borderRadius: '32px',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <p className="bg-orange-100 text-orange-base uppercase w-fit p-2 px-4 rounded-full">Corporate governance</p>
          <h3 className="text-orange-base bold-48">Group Executives</h3>
          <p className="regular-16 text-generic-800 max-w-md">The Board of Directors is responsible for setting the Company's strategic directions and ensuring their execution, encompassing environmental, social, and governance considerations.</p>
          <Link href="/leadership-team">
            <Button variant="secondary" size="lg" className="gap-2">
              Learn more
              <Image src="/icons/arrow-top-right.svg" alt="Learn more" width={12} height={12} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24 flex flex-col gap-4">
        <h3 className="bold-40 text-blue-950">Annual Financial Reports</h3>

        <div className="flex flex-col md:flex-row mt-10 max-w-full gap-6">
          <SubsidaryImage
            image="/images/report-notice-of-agm.svg"
            hoverImage="/images/report-notice-of-agm.svg"
            name="Notice of AGM"
            subName="Download file"
            link="/"
          />
          <SubsidaryImage
            image="/images/report-2022.svg"
            hoverImage="/images/report-2022.svg"
            name="2022 Annual Report"
            subName="Download file"
            link="/"
          />
          <SubsidaryImage
            image="/images/report-2021.svg"
            hoverImage="/images/report-2021.svg"
            name="2021 Annual Report"
            subName="Download file"
            link="/"
          />
          <SubsidaryImage
            image="/images/report-tangerine-recycling.svg"
            hoverImage="/images/report-tangerine-recycling.svg"
            name="Tangerine Recycling for Scholarship"
            subName="Download file"
            link="Recycling-for-Scholarships-August-Staff-Engagement(CSR).pdf"
          />
        </div>
      </section>
    </>
  )
}

export default InvestorsPage