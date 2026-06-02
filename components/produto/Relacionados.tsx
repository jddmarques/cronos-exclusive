import Link from 'next/link'
import { Product, getRelatedProducts } from '@/lib/products'
import ProductCard from '@/components/catalogo/ProductCard'
import Container from '@/components/layout/Container'

interface RelacionadosProps {
  product: Product
}

export default function Relacionados({ product }: RelacionadosProps) {
  const related = getRelatedProducts(product, 4)

  if (related.length === 0) return null

  return (
    <section className="border-t border-[rgba(201,169,97,0.1)] py-16 md:py-20">
      <Container>
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
          Da mesma marca
        </p>
        <h2 className="font-cormorant font-light text-2xl md:text-3xl text-off-white tracking-[0.06em] mb-10 md:mb-12">
          Outros {product.brand}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Link para catálogo completo */}
        <div className="mt-12 pt-10 border-t border-[rgba(201,169,97,0.08)]">
          <Link
            href="/catalogo"
            className="font-inter text-xs tracking-[0.15em] uppercase text-gray-mid hover:text-off-white transition-colors border-b border-gray-dark hover:border-gray-mid pb-0.5 focus-visible:outline-none focus-visible:text-[#C9A961]"
          >
            Ver coleção completa
          </Link>
        </div>
      </Container>
    </section>
  )
}
