"use client "

import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Button from "./Button";

type Props = {

}

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams(); 

    const category = searchParams.get('category')
    
    const handleTags = (filter: string) => {
        router.push(`${pathName}?category=${filter}`)
    }
  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
        
    </div>
  )
}

export default Categories