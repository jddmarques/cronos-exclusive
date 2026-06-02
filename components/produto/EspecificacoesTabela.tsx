import { Product } from '@/lib/products'

interface EspecificacoesTabelaProps {
  product: Product
}

export default function EspecificacoesTabela({ product }: EspecificacoesTabelaProps) {
  const { specs } = product

  const rows: { label: string; value: string | undefined }[] = [
    { label: 'Caixa', value: specs.caixa },
    { label: 'Diâmetro', value: specs.diametro },
    { label: 'Espessura', value: specs.espessura },
    { label: 'Movimento', value: specs.movimento },
    { label: 'Calibre', value: specs.calibre },
    { label: 'Reserva de marcha', value: specs.reservaDeMarcha },
    { label: 'Resist. à água', value: specs.resistenciaAgua },
    { label: 'Pulseira', value: specs.pulseira },
  ].filter((r) => !!r.value)

  return (
    <div>
      <h2 className="font-cormorant font-light text-2xl text-off-white tracking-[0.08em] mb-8">
        Especificações técnicas
      </h2>

      <dl className="divide-y divide-[rgba(201,169,97,0.08)]">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex justify-between py-4 gap-6">
            <dt className="font-inter text-xs tracking-[0.08em] text-gray-mid flex-shrink-0">
              {label}
            </dt>
            <dd className="font-inter text-xs tracking-wide text-off-white text-right">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
