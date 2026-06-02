'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GaleriaProps {
  images: string[]
  alt: string
}

export default function Galeria({ images, alt }: GaleriaProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
      {/* Thumbnails verticais */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto scrollbar-hide md:w-16 lg:w-20 flex-shrink-0">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative flex-shrink-0 w-14 h-[70px] md:w-full md:h-20 lg:h-24 overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961] ${
              active === i
                ? 'ring-1 ring-[#C9A961] opacity-100'
                : 'opacity-40 hover:opacity-70'
            }`}
            aria-label={`Imagem ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — imagem ${i + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Imagem principal */}
      <div className="relative flex-1 aspect-[4/5] md:aspect-auto overflow-hidden group bg-graphite">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}
