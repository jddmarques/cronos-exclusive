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
              className="font-inter text-xs tracking-[0.2em] uppercase text-black bg-[#C9A961] px-8 py-4 hover:bg-[#b8944e] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961] text-center"
            >
              Consultar disponibilidade
            </a>
            <Link
              href="/catalogo"
              className="font-inter text-xs tracking-[0.2em] uppercase text-off-white border border-[rgba(245,242,236,0.22)] px-8 py-4 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 focus-visible:outline-none text-center"
            >
              Ver coleção
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[rgba(201,169,97,0.45)]" />
      </div>
    </section>
  )
}
