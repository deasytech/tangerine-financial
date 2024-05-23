import Image from 'next/image'
import Link from 'next/link'

interface Props {
  price: string;
  linkHref: string;
  image: string;
  text: string;
}

const KeyFigures = ({ price, linkHref, image, text }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="bold-48 text-orange-base flex gap-1">
        <span className="regular-20">₦</span>
        <span>{price}</span>
      </h3>
      <Link href={linkHref} className='flex btn_dark_orange w-fit gap-2 rounded-full'>
        <Image src={image} alt={text} width={16} height={21} />
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default KeyFigures