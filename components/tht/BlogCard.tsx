import Image from 'next/image'

interface Props {
  image: string;
  category: string;
  title: string;
  date: string;
  slug: string;
}

const BlogCard = ({ image, category, title, date, slug }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={image} alt="blog 1" width={384} height={232} className="w-full" />
      <p className="text-sm font-gilroy-semibold uppercase">{category}</p>
      <h3 className="regular-28 font-gilroy-medium">{title}</h3>
      <p className="text-xs font-gilroy-regular">{date}</p>
    </div>
  )
}

export default BlogCard