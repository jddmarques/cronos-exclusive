'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Container from '@/components/layout/Container'
import { buildGenericWhatsAppLink } from '@/lib/whatsapp'

const blocos = [
  {
    titulo: 'Curadoria criteriosa',
    texto:
      'Não trabalhamos com volume. Cada peça do catálogo passa por uma seleção cuidadosa, considerando conservação, completude do set e histórico antes de qualquer oferta.',
  },
  {
    titulo: 'Procedência verificada',
    texto:
      'Autenticidade é o ponto de partida, não um diferencial. Documentação, caixa original, cartão de garantia, funcionamento e condição geral são avaliados em cada relógio.',
  },
  {
    titulo: 'Atendimento direto',
    texto:
      'Sem intermediários. O atendimento é feito por quem conhece cada peça, com consulta via WhatsApp, resposta real e envio de fotos e vídeos quando necessário.',
  },
]

export default function SobreBloco() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="sobre" className="py-section md:py-section-lg border-t border-[rgba(201,169,97,0.1)]">
      <Container>
        <div
          ref={ref}
          className={`max-w-4xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Eyebrow */}
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-5">
            Sobre nós
          </p>

          {/* Título principal */}
          <h2 className="font-cormorant font-light text-3xl md:text-[2.6rem] text-off-white tracking-[0.05em] leading-[1.1] mb-5">
            Curadoria. Procedência. Discrição.
          </h2>

          {/* Subtítulo descritivo */}
          <p className="font-inter font-light text-sm text-[#b0a99a] leading-relaxed max-w-xl mb-12 md:mb-14">
            Relógios selecionados com critério, autenticidade verificada e atendimento direto
            para quem valoriza cada detalhe.
          </p>

          {/* Divisor */}
          <div className="w-full h-px bg-[rgba(201,169,97,0.12)] mb-12 md:mb-14" />

          {/* Três blocos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {blocos.map((bloco) => (
              <div key={bloco.titulo}>
                {/* Marcador dourado */}
                <div className="w-5 h-px bg-[#C9A961] mb-5" />
                <h3 className="font-cormorant text-lg md:text-xl text-off-white tracking-[0.08em] mb-3">
                  {bloco.titulo}
                </h3>
                <p className="font-inter font-light text-sm text-[#a09990] leading-relaxed">
                  {bloco.texto}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 md:mt-16 pt-10 border-t border-[rgba(201,169,97,0.1)]">
            <a
              href={buildGenericWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[11px] tracking-[0.22em] uppercase text-off-white border border-[rgba(245,242,236,0.2)] px-9 py-4 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 inline-block focus-visible:outline-none focus-visible:border-[#C9A961]"
            >
              Consultar peças disponíveis
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
