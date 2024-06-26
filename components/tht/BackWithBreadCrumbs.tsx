"use client"

import { ArrowLeftIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const BackWithBreadCrumbs = ({ page }: { page: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-8">
      <Button onClick={router.back} variant="outline" size="icon" className="p-0">
        <ArrowLeftIcon size={18} className="text-gray-500" />
      </Button>
      <p className="text-gray-400 regular-16">Back</p>
      <p className="text-gray-400 regular-16">Plans / </p>
      <p className="text-blue-950 regular-16">{page}</p>
    </div>
  )
}

export default BackWithBreadCrumbs