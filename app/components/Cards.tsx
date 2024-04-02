'use client'
import { useState } from "react";
import { TruncatedText } from "../utils/function";
import Link from 'next/link'

interface ImageCardProps {
  title:string;
  image:string;
  description:string;
  releaseDate:string;
  id:string
}

export const ImageCard = ({title, image, description, releaseDate, id}:ImageCardProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);

  return (
    <Link href={`/movie/${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative w-[200px] h-[300px] bg-center bg-cover cursor-pointer overflow-y-hidden" style={{
      backgroundImage: `url(${image})`
    }}>

      <div className={`absolute top-0 left-0 p-[10px] text-white bg-black bg-opacity-45 h-full transition-transform duration-500 ease-in-out ${mouseEnter ? 'translate-y-0' : 'translate-y-[400px]'}`}>
        <div className="flex items-center justify-between mb-[10px]">
          <h1 className="font-bold text-[1rem]">{title}</h1>
          <span className="text-[.8rem]">{releaseDate}</span>
        </div>

        <TruncatedText text={description} limit={25} style="text-[.9rem] "/>
      </div>
    </Link>
  )
}