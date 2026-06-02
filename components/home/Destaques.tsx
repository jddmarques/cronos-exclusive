'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/catalogo/ProductCard'
import Container from '@/components/layout/Container'

export default function Destaques() {
  const { ref, visible } = useScrollReveal()
  const featured = getFeaturedProducts(6)

  return (
    <section className="py-section md:py-section-lg">
      <Container>
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Header da seção */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
                Seleção atual
              </p>
              <h2 className="font-cormorant font-light text-3xl md:text-4xl text-off-white tracking-[0.06em]">
                Peças em destaque
              </h2>
            </div>

            <Link
              href="/catalogo"
              className="hidden md:flex items-center gap-2 font-inter text-[10px] tracking-[0.18em] uppercase text-[#9a9088] hover:text-[#C9A961] transition-colors focus-visible:outline-none focus-visible:text-[#C9A961]"
            >
              Ver coleção completa
              <span className="text-[#C9A961]">→</span>
            </Link>
          </div>

          {/* Grid — 2 colunas mobile, 3 desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {featured.map((product, i) => (
              <div
                key={product.id}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* CTA centralizado abaixo dos cards */}
          <div className="mt-14 md:mt-16 flex justify-center">
            <Link
              href="/catalogo"
              className="font-inter text-[11px] tracking-[0.22em] uppercase text-off-white border border-[rgba(245,242,236,0.2)] px-10 py-4 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 focus-visible:outline-none"
            >
              Ver coleção completa
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
