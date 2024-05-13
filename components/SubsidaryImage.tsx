import Image from "next/image";
import Link from "next/link";

type SubsidaryImageProps = {
  image: string;
  name: string;
  link: string;
};

const SubsidaryImage = ({ image, name, link }: SubsidaryImageProps) => {
  return (
    <Link href={link} className="w-full flex flex-col gap-2">
      <Image src={image} alt={name} width={280} height={360} />
      <label className="regular-16 font-gilroy-light ml-4">{name}</label>
    </Link>
  );
};

export default SubsidaryImage;
