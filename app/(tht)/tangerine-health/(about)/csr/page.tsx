import Image from 'next/image'
import React from 'react'

const CSRPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full space-y-3">
          <h1 className="bold-48 text-blue-900">Corporate Social Responsibility</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We are committed to making a positive impact on the health and well-being of our community. As a responsible corporate citizen, THT understands the importance of Corporate Social Responsibility (CSR) in contributing to a healthier, happier and sustainable society.</p>
          <p className="regular-18 text-generic-950 !leading-[145%]">Our CSR initiatives are designed to address critical health-related issues, promote wellness, and create a lasting positive impact on the communities we serve through advocacy, education and events sponsorship.</p>
        </div>
        <div className="w-full">
          <Image src="/images/tht/csr-banner.png" alt="CSR" width={598} height={393} className="w-full h-auto" />
        </div>
      </section>
    </>
  )
}

export default CSRPage