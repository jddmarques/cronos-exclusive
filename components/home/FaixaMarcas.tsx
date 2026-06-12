'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { brands } from '@/lib/brands'
import { visibleBrandNames } from '@/lib/products'

export default function FaixaMarcas() {
  const { ref, visible } = useScrollReveal()
  const marcasVisiveis = brands.filter((b) => visibleBrandNames.has(b.name.toLowerCase()))

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 border-y border-[rgba(201,169,97,0.1)] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Microtexto */}
      <p className="font-inter text-[9px] tracking-[0.3em] uppercase text-[rgba(201,169,97,0.5)] text-center mb-8">
        Marcas selecionadas
      </p>

      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex items-center justify-start md:justify-center gap-12 md:gap-16 px-6 md:px-12 lg:px-20 min-w-max md:min-w-0">
          {marcasVisiveis.map((brand) => (
            <li key={brand.slug}>
              <Link
                href={`/catalogo?marca=${brand.slug}`}
                className="block opacity-40 hover:opacity-80 transition-opacity duration-300 focus-visible:outline-none focus-visible:opacity-80"
                aria-label={`Ver relógios ${brand.name}`}
              >
                <div className="relative w-28 h-8" title={brand.name}>
                  <Image
                    src={`/brands/${brand.svgFile}`}
                    alt={brand.name}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
