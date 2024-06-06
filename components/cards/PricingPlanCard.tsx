import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PlanDetail {
  title: string;
  value: string;
}

interface Plan {
  planName: string;
  price: string;
  description: string;
  details: PlanDetail[];
  link: string;
}

const PricingPlanCard = ({ planName, price, description, details, link }: Plan) => {
  return (
    <div className="relative full px-8 py-6 bg-white rounded-lg flex flex-col justify-between border">
      <div className="flex-col justify-start items-start gap-3 flex mb-20 pt-8">
        <p className="regular-20 text-blue-950">{planName}</p>
        <h3 className="regular-32 text-blue-950">{price}</h3>
        <div className="bg-blue-950 p-6 rounded-xl">
          <p className="text-white regular-12">{description}</p>
        </div>
        <table className="w-full border-separate" style={{ borderSpacing: "0 0.5rem" }}>
          <tbody>
            {details.map((list) => (
              <tr className="w-full" key={list.title}>
                <td className="w-full max-w-[50%] regular-12 text-generic-800 align-top">{list.title}</td>
                <td className="w-full max-w-[50%] regular-12 text-blue-950 font-gilroy-medium align-top">{list.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href={link} className="absolute bottom-8 right-8 flex gap-2 items-center rounded-lg btn_blue w-fit">
        <span>Get Quote</span>
        <ArrowRight size={18} className='text-white' />
      </Link>
    </div>
  )
}

export default PricingPlanCard