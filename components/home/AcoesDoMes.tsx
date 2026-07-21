'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Container from '@/components/layout/Container'
import { buildGenericWhatsAppLink } from '@/lib/whatsapp'

// ── Edite aqui a cada mês ─────────────────────────────────────────────────────
const MES = 'Julho · 2026'

const acoes = [
  {
    label: 'Condição especial',
    titulo: 'Parcelamento facilitado',
    descricao:
      'Seletos modelos do catálogo com parcelamento em até 12x. Consulte disponibilidade e condições diretamente via WhatsApp.',
    detalhe: 'Consulte condições',
  },
  {
    label: 'Lista de espera',
    titulo: 'Acesso antecipado a novidades',
    descricao:
      'Receba peças antes de entrarem no catálogo público. Entre em contato para garantir seu lugar na fila de lançamentos.',
    detalhe: 'Vagas limitadas',
  },
  {
    label: 'Troca direta',
    titulo: 'Avaliação do seu relógio',
    descricao:
      'Tem uma peça e quer trocar por algo do catálogo? Fazemos avaliação séria e proposta direta, sem burocracia.',
    detalhe: 'Sujeito a avaliação',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function AcoesDoMes() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-section md:py-section-lg border-t border-[rgba(201,169,97,0.1)]">
      <Container>
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-3">
              {MES}
            </p>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-off-white tracking-[0.06em]">
              Ações do mês
            </h2>
          </div>

          {/* Grid de cards separados por linha dourada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(201,169,97,0.12)]">
            {acoes.map((acao, i) => (
              <div
                key={acao.titulo}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`bg-black p-8 md:p-10 flex flex-col transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Label */}
                <p className="font-inter text-[9px] tracking-[0.35em] uppercase text-[#C9A961] mb-6">
                  {acao.label}
                </p>

                {/* Título */}
                <h3 className="font-cormorant text-xl md:text-2xl text-off-white tracking-[0.04em] leading-snug mb-4">
                  {acao.titulo}
                </h3>

                {/* Divisor */}
                <div className="w-5 h-px bg-[rgba(201,169,97,0.4)] mb-5" />

                {/* Descrição */}
                <p className="font-inter font-light text-sm text-[#9a9088] leading-relaxed flex-1">
                  {acao.descricao}
                </p>

                {/* Detalhe */}
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#4a4642] mt-6">
                  {acao.detalhe}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12">
            <a
              href={buildGenericWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[11px] tracking-[0.22em] uppercase text-black bg-[#C9A961] px-9 py-4 hover:bg-[#b8944e] transition-colors duration-300 inline-flex items-center gap-2.5 focus-visible:outline-none"
            >
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar condições via WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
