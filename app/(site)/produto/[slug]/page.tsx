import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { visibleProducts, getProductBySlug, formatPrice } from '@/lib/products'
import Container from '@/components/layout/Container'
import Galeria from '@/components/produto/Galeria'
import InfoPainel from '@/components/produto/InfoPainel'
import EspecificacoesTabela from '@/components/produto/EspecificacoesTabela'
import Relacionados from '@/components/produto/Relacionados'

interface PageProps {
  params: { slug: string }
}

// Gera rotas estáticas para todos os produtos
export async function generateStaticParams() {
  return visibleProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}

  const title = `${product.brand} ${product.model} ref. ${product.reference}`
  const priceDisplay = formatPrice(product.price)

  return {
    title,
    description: product.description,
    openGraph: {
      title: `${title} | Cronos Exclusivo`,
      description: product.description,
      images: [product.images[0]],
    },
    // Schema.org via JSON-LD abaixo — Fase 2 adiciona via script tag
  }
}

export default function ProdutoPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const priceDisplay = formatPrice(product.price)

  return (
    <>
      {/* JSON-LD Schema.org Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: `${product.brand} ${product.model}`,
            description: product.description,
            brand: { '@type': 'Brand', name: product.brand },
            model: product.model,
            productID: product.reference,
            image: product.images,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'BRL',
              price: product.price ?? undefined,
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Cronos Exclusivo',
              },
            },
          }),
        }}
      />

      <div className="pt-20 md:pt-28">
        {/* Breadcrumb */}
        <Container>
          <nav className="py-6 flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-gray-mid" aria-label="Breadcrumb">
            <a href="/" className="hover:text-off-white transition-colors">Início</a>
            <span className="text-gray-dark">·</span>
            <a href="/catalogo" className="hover:text-off-white transition-colors">Coleção</a>
            <span className="text-gray-dark">·</span>
            <span className="text-gray-dark">{product.model}</span>
          </nav>
        </Container>

        {/* PDP principal */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 pb-20 md:pb-28 min-h-[70vh]">
            {/* Galeria — esquerda */}
            <div className="md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:max-h-[800px]">
              <Galeria
                images={product.images}
                alt={`${product.brand} ${product.model}`}
              />
            </div>

            {/* Info — direita */}
            <InfoPainel product={product} />
          </div>
        </Container>

        {/* Tabs: specs, sobre, procedência */}
        <div className="border-t border-[rgba(201,169,97,0.1)]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 py-16 md:py-20">
              {/* Especificações */}
              <EspecificacoesTabela product={product} />

              {/* Sobre o modelo + Procedência */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-cormorant font-light text-2xl text-off-white tracking-[0.08em] mb-6">
                    Sobre o modelo
                  </h2>
                  <p className="font-inter font-light text-sm text-gray-mid leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h2 className="font-cormorant font-light text-2xl text-off-white tracking-[0.08em] mb-6">
                    Procedência
                  </h2>
                  <div className="space-y-4 text-sm font-inter font-light text-gray-mid leading-relaxed">
                    <p>
                      Todos os relógios comercializados pela Cronos Exclusivo passam
                      por verificação rigorosa de autenticidade antes de entrar no catálogo.
                    </p>
                    <p>
                      {product.fullSet
                        ? 'Esta peça acompanha caixa original, cartão de garantia e documentação completa (full set).'
                        : 'Esta peça é vendida apenas com o relógio. Documentação original não disponível.'}
                    </p>
                    <p>
                      Dúvidas sobre a procedência? Consulte-nos diretamente via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Relacionados */}
        <Relacionados product={product} />
      </div>
    </>
  )
}
