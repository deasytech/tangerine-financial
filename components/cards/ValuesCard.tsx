import Image from 'next/image'

interface Props {
  icon: string;
  title: string;
  description: string;
}

const ValuesCard = ({ icon, title, description }: Props) => {
  return (
    <div className="full px-8 py-6 bg-white rounded-lg flex-col justify-start items-start gap-5 inline-flex border">
      <Image src={icon} alt={title} width={48} height={48} />
      <div className="h-full flex-col justify-start items-start gap-2 flex">
        <div className="regular-28">{title}</div>
        <div className="regular-16">{description}</div>
      </div>
    </div>
  )
}

export default ValuesCard