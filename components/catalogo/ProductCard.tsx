'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group block focus-visible:outline-none"
      aria-label={`${product.brand} ${product.model} — consultar peça`}
    >
      {/* Container do card com borda sutil */}
      <div className="border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,169,97,0.25)] transition-colors duration-500 bg-[#0a0a0a]">

        {/* Imagem 4:5 */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
          <Image
            src={product.images[0]}
            alt={`${product.brand} ${product.model} ref. ${product.reference}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            loading="lazy"
          />

          {/* Overlay no hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="font-inter text-[9px] tracking-[0.12em] uppercase text-[#c8c0b4] bg-black/75 px-2 py-1 backdrop-blur-sm">
              {product.condition}
            </span>
            {product.byOrder && (
              <span className="font-inter text-[9px] tracking-[0.12em] uppercase text-[#C9A961] bg-black/75 px-2 py-1 backdrop-blur-sm">
                Por encomenda
              </span>
            )}
          </div>

          {product.fullSet && (
            <div className="absolute top-3 right-3">
              <span className="font-inter text-[9px] tracking-[0.12em] uppercase text-[#C9A961] border border-[rgba(201,169,97,0.45)] px-2 py-1 bg-black/60 backdrop-blur-sm">
                Full set
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-4 py-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
          {/* Marca */}
          <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-[#7a7068] mb-1.5">
            {product.brand}
          </p>

          {/* Modelo */}
          <h3 className="font-cormorant font-light text-[1.15rem] text-off-white tracking-[0.03em] leading-tight mb-2">
            {product.model}
          </h3>

          {/* Referência e ano */}
          <p className="font-inter text-[10px] text-[#5a5248] tracking-wide mb-4">
            Ref. {product.reference}
            {product.year ? ` · ${product.year}` : ''}
          </p>

          {/* Divisor */}
          <div className="h-px bg-[rgba(255,255,255,0.06)] mb-3" />

          {/* CTA */}
          <p className="font-inter text-[10px] tracking-[0.18em] uppercase text-[#9a9088] group-hover:text-[#C9A961] transition-colors duration-300">
            {product.price !== null
              ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)
              : product.byOrder
                ? 'Sob encomenda →'
                : 'Consultar peça →'}
          </p>
        </div>
      </div>
    </Link>
  )
}
