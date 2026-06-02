import type { Metadata } from 'next'
import Link from 'next/link'
import { X } from 'lucide-react'
import Container from '@/components/layout/Container'
import ProductCard from '@/components/catalogo/ProductCard'
import { products } from '@/lib/products'
import { brands } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Coleção',
  description:
    'Catálogo completo de relógios da Cronos Exclusivo. Procedência verificada, curadoria fechada.',
}

type Props = {
  searchParams: { marca?: string }
}

export default function CatalogoPage({ searchParams }: Props) {
  const marcaSlug = searchParams.marca?.toLowerCase()
  const marcaAtiva = marcaSlug
    ? brands.find((b) => b.slug === marcaSlug)
    : null

  const produtosFiltrados = marcaAtiva
    ? products.filter((p) => p.brand.toLowerCase() === marcaAtiva.name.toLowerCase())
    : products

  return (
    <div className="pt-20 md:pt-28">
      <Container>
        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[rgba(201,169,97,0.1)] mb-12 md:mb-16">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
            Coleção
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="font-cormorant font-light text-3xl md:text-4xl text-off-white tracking-[0.06em]">
              {marcaAtiva ? (
                <>{marcaAtiva.name} — {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'peça' : 'peças'}</>
              ) : (
                <>{products.length} peças disponíveis</>
              )}
            </h1>

            {marcaAtiva && (
              <Link
                href="/catalogo"
                className="flex items-center gap-1.5 font-inter text-[10px] tracking-[0.15em] uppercase text-gray-mid hover:text-off-white transition-colors border border-[rgba(201,169,97,0.2)] px-3 py-2"
              >
                <X size={10} />
                Limpar filtro
              </Link>
            )}
          </div>

          {/* Filtros de marca */}
          <div className="flex flex-wrap gap-2 mt-6">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/catalogo?marca=${brand.slug}`}
                className={`font-inter text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors ${
                  marcaAtiva?.slug === brand.slug
                    ? 'border-[#C9A961] text-[#C9A961]'
                    : 'border-[rgba(201,169,97,0.2)] text-gray-mid hover:border-[rgba(201,169,97,0.5)] hover:text-off-white'
                }`}
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20 md:pb-32">
          {produtosFiltrados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  )
}
