"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, PlusCircle } from 'lucide-react'

interface Props {
  name: string;
  desc: string;
}

const LibertyCoverCard = ({ name, desc }: Props) => {
  return (
    <div className="border border-gray-300 px-6 py-10 rounded-2xl space-y-4">
      <p className="bold-32 text-blue-950">{name}</p>
      <p className="text-base text-generic-950 font-gilroy-regular">{desc}</p>
      <div className="pt-10 flex justify-between items-center">
        <Button variant="outline" className="gap-2 rounded-full text-blue-950" size="sm">
          <PlusCircle size={14} /> Add to compare
        </Button>

        <Button size="sm" className="gap-2">
          Get a Quote
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  )
}

export default LibertyCoverCard