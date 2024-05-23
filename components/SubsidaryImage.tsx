import { CloudDownload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SubsidaryImageProps = {
  image: string;
  name: string;
  subName?: string;
  link: string;
};

const SubsidaryImage = ({ image, name, subName, link }: SubsidaryImageProps) => {
  return (
    <Link href={link} className="w-full flex flex-col gap-2">
      <Image src={image} alt={name} width={280} height={360} className="w-full" />
      <label className="regular-16 font-gilroy-light">{name}</label>
      {subName && <div className="flex justify-between">
      <p className="regular-12 text-generic-500 uppercase">{subName}</p>
        <CloudDownload size={12} className="text-generic-500" />
      </div>}
    </Link>
  );
};

export default SubsidaryImage;
