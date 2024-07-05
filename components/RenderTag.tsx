import Link from "next/link";

import { Badge } from "@/components/ui/badge";

interface Props {
  link: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ link, name, totalQuestions, showCount }: Props) => {
  return (
    <div>
      <Link href={link} className="flex justify-between gap-2" target="_blank">
        <Badge
          variant="outline"
          className="text-white py-2 px-4 border-gray-20 regular-16 font-gilroy-medium"
        >
          {name}
        </Badge>
        {showCount && (
          <p className="small-medium text-dark-500">{totalQuestions}</p>
        )}
      </Link>
    </div>
  );
};

export default RenderTag;
