import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  link: string;
  title: string;
  text: string;
}

const PlansCard = ({ link, title, text }: Props) => {
  return (
    <div className="relative full px-8 py-6 bg-white rounded-lg flex flex-col justify-between border">
      <div className="flex-col justify-start items-start gap-2 flex mb-32 pt-8">
        <h3 className="regular-32 text-blue-950">{title}</h3>
        <div className="regular-16" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Link href={link} className="absolute bottom-8 right-8 flex gap-2 items-center rounded-lg btn_blue w-fit">
        <span>View details</span>
        <ArrowRight size={18} className='text-white' />
      </Link>
    </div>
  )
}

export default PlansCard