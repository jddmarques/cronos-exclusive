'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { buildGenericWhatsAppLink } from '@/lib/whatsapp'

// Troque esta constante por '/hero-cronos.jpg' quando tiver a imagem final.
// Proporção ideal: 16:9 ou 3:2, mínimo 1920px de largura, fundo escuro.
const HERO_SRC = '/hero-cronos.jpg'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return
      parallaxRef.current.style.transform = `translateY(${Math.min(window.scrollY * 0.05, 48)}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden bg-black">

      {/* Imagem de fundo com parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <Image
          src={HERO_SRC}
          alt="Relógios selecionados da curadoria Cronos Exclusivo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: '65% center',
            filter: 'brightness(0.85) contrast(1.08)',
          }}
        />
      </div>

      {/* Overlay desktop: gradiente horizontal — solidifica esquerda, abre direita */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, #000000 28%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.28) 70%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {/* Overlay mobile */}
      <div className="absolute inset-0 bg-black/65 md:hidden" />

      {/* Gradiente de base no rodapé */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Linha decorativa vertical */}
      <div className="absolute left-14 lg:left-20 top-1/2 -translate-y-1/2 h-28 w-px bg-[rgba(201,169,97,0.3)] hidden md:block" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 md:pl-20 lg:pl-28 xl:pl-36 md:pr-0">
        <div className="w-full md:max-w-[48%] lg:max-w-[44%]">

          {/* Eyebrow */}
          <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#C9A961] mb-7">
            Curadoria Fechada
          </p>

          {/* Título principal */}
          <h1 className="font-cormorant font-light text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] text-off-white leading-[1.05] tracking-[0.01em] mb-7 md:mb-8">
            Relógios escolhidos
            <br />
            pelo que entregam:
            <br />
            <em className="not-italic" style={{ color: '#C9A961' }}>
              presença, acabamento
              <br />
              e precisão.
            </em>
          </h1>

          {/* Divisor */}
          <div className="w-10 h-px bg-[rgba(201,169,97,0.5)] mb-7 md:mb-8" />

          {/* Subtítulo */}
          <p className="font-inter font-light text-sm text-[#b8b0a4] leading-relaxed mb-10 md:mb-12 max-w-[340px] md:max-w-sm">
            Catálogo limitado de relógios originais, selecionados por estado,
            procedência e presença no pulso.
          </p>

          {/* CTAs — consulta como primário */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={buildGenericWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs tracking-[0.2em] uppercase text-black bg-[#C9A961] px-8 py-4 hover:bg-[#b8944e] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961] inline-flex items-center justify-center gap-2.5"
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar disponibilidade
            </a>
            <Link
              href="/catalogo"
              className="font-inter text-xs tracking-[0.2em] uppercase text-off-white border border-[rgba(245,242,236,0.22)] px-8 py-4 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 focus-visible:outline-none text-center"
            >
              Ver coleção
            </Link>
          </div>

          {/* Microcopy */}
          <p className="font-inter text-[11px] tracking-[0.12em] text-[#5a5450] mt-4">
            Atendimento direto via WhatsApp
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[rgba(201,169,97,0.45)]" />
      </div>
    </section>
  )
}
