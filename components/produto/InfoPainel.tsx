import { MessageCircle } from 'lucide-react'
import { Product, formatPrice } from '@/lib/products'
import { buildWhatsAppLink } from '@/lib/whatsapp'

interface InfoPainelProps {
  product: Product
}

export default function InfoPainel({ product }: InfoPainelProps) {
  const priceDisplay = formatPrice(product.price)
  const isConsulta = product.price === null
  const waLink = buildWhatsAppLink(
    `${product.brand} ${product.model}`,
    product.reference
  )

  return (
    <div className="flex flex-col h-full justify-center py-8 md:py-0">
      {/* Marca */}
      <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
        {product.brand}
      </p>

      {/* Nome */}
      <h1 className="font-cormorant font-light text-3xl md:text-4xl text-off-white tracking-[0.04em] leading-tight mb-2">
        {product.model}
      </h1>

      {/* Referência e ano */}
      <p className="font-inter text-xs text-gray-mid tracking-wide mb-8">
        Ref. {product.reference} &nbsp;·&nbsp; {product.year}
      </p>

      {/* Separador */}
      <div className="w-8 h-px bg-[rgba(201,169,97,0.4)] mb-8" />

      {/* Condição e set */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-mid border border-[rgba(138,138,138,0.3)] px-3 py-1.5">
          {product.condition}
        </span>
        {product.fullSet && (
          <span className="font-inter text-[10px] tracking-[0.12em] uppercase text-[#C9A961] border border-[rgba(201,169,97,0.4)] px-3 py-1.5">
            Full set
          </span>
        )}
        {product.byOrder && (
          <span className="font-inter text-[10px] tracking-[0.12em] uppercase text-[#C9A961] border border-[rgba(201,169,97,0.4)] px-3 py-1.5">
            Por encomenda
          </span>
        )}
      </div>

      {/* Preço */}
      <div className="mb-10">
        {isConsulta ? (
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-mid mb-1">
            {product.byOrder ? 'Disponível por encomenda' : 'Sob consulta'}
          </p>
        ) : (
          <>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-mid mb-2">
              Preço
            </p>
            <p className="font-cormorant font-light text-3xl text-off-white tracking-wide">
              {priceDisplay}
            </p>
          </>
        )}
      </div>

      {/* CTA WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-black bg-[#C9A961] px-8 py-4 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <MessageCircle size={14} />
        Consultar disponibilidade
      </a>

      {/* Nota discreta */}
      <p className="font-inter text-[10px] text-gray-dark tracking-wide text-center mt-4">
        Atendimento direto via WhatsApp. Sem intermediários.
      </p>
    </div>
  )
}
