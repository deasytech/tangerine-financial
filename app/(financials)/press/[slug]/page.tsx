import { PRESS } from '@/constants';
import { ParamsProps } from '@/types'
import { ArrowLeft, ArrowLeftSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PressDetailsPage = ({ params }: ParamsProps) => {
  const press = PRESS.filter((item: { slug: string; }) => item.slug === params.slug)[0];

  return (
    <section className="relative max-container padding-container mt-24">
      <div className="h-full flex flex-col justify-center items-start gap-4">
        <Link href="/investors" className='flex gap-2 items-center mb-10 lg:mt-5'>
          <ArrowLeftSquare size={32} className='text-generic-500' />
          <p className='regular-18 text-generic-500'>All press releases</p>
        </Link>
        <h1 className="bold-32 text-blue-base max-w-3xl lg:bold-56 items-center">
          {press.title}
        </h1>
        <div className='flex w-full justify-between'>
          <p>{press.date}</p>
          <div className='flex gap-4'>
            <Image src="/icons/link.svg" alt='twitter' width={18} height={18} />
            <Image src="/icons/x-twitter-clear.svg" alt='twitter' width={18} height={18} />
            <Image src="/icons/linkedin.svg" alt='linkedin' width={18} height={18} />
            <Image src="/icons/facebook.svg" alt='facebook' width={18} height={18} />
          </div>
        </div>
        <div className="regular-18" dangerouslySetInnerHTML={{ __html: press.description }} />
      </div>
    </section>
  )
}

export default PressDetailsPage