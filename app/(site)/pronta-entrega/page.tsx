import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import ProductCard from '@/components/catalogo/ProductCard'
import { prontaEntregaProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Pronta Entrega',
  description:
    'Peças em estoque físico em Fortaleza, disponíveis para retirada ou entrega imediata.',
}

export default function ProntaEntregaPage() {
  return (
    <div className="pt-20 md:pt-28">
      <Container>
        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[rgba(201,169,97,0.1)] mb-12 md:mb-16">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
            Estoque em Fortaleza
          </p>
          <h1 className="font-cormorant font-light text-3xl md:text-4xl text-off-white tracking-[0.06em] mb-4">
            Pronta entrega
          </h1>
          <p className="font-inter font-light text-sm text-gray-mid leading-relaxed max-w-xl">
            Peças físicas, disponíveis agora para retirada ou entrega em Fortaleza —
            sem espera de importação. Estoque limitado e sujeito a alteração conforme
            as vendas.
          </p>
        </div>

        {/* Grid */}
        {prontaEntregaProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20 md:pb-32">
            {prontaEntregaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="font-inter text-sm text-gray-mid pb-20 md:pb-32">
            Nenhuma peça em pronta entrega no momento.
          </p>
        )}
      </Container>
    </div>
  )
}
