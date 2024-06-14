import { GYM_LIST } from '@/constants/tht'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GymListPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-8 md:flex-row items-center w-full mt-44">
        <div className="flex-none w-full md:w-1/3 space-y-3">
          <h1 className="bold-48 text-blue-900">Gym Network</h1>
        </div>
        <div className="flex-1 w-full">
          <Image src="/images/tht/wellness-banner.png" alt="Wellness" width={598} height={393} className="w-full h-auto" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <table className="w-full border-separate" style={{ borderSpacing: "0 0.5rem" }}>
          <thead className="bg-blue-950 text-white">
            <tr className="w-full">
              <td className="p-4 max-w-[50%]">Name of Gym</td>
              <td className="p-4 max-w-[50%]">Address</td>
              <td className="p-4 max-w-[50%]">Location</td>
              <td className="p-4 max-w-[50%]">State</td>
            </tr>
          </thead>
          <tbody>
            {GYM_LIST.map((gym) => (
              <tr key={gym.name} className="w-full">
                <td className="w-full p-2 max-w-[50%] regular-12 text-generic-800 align-top">{gym.name}</td>
                <td className="w-full p-2 max-w-[50%] regular-12 text-generic-800 align-top">{gym.address}</td>
                <td className="w-full p-2 max-w-[50%] regular-12 text-generic-800 align-top">{gym.location}</td>
                <td className="w-full p-2 max-w-[50%] regular-12 text-generic-800 align-top">{gym.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default GymListPage