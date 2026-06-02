import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FaixaMarcas from '@/components/home/FaixaMarcas'
import Destaques from '@/components/home/Destaques'
import SobreBloco from '@/components/home/SobreBloco'

export const metadata: Metadata = {
  title: 'Cronos Exclusivo — Relojoaria de Curadoria',
  description:
    'Cronos Exclusivo: curadoria de relógios originais, peças selecionadas com procedência verificada, catálogo limitado e atendimento direto.',
  openGraph: {
    title: 'Cronos Exclusivo — Relojoaria de Curadoria',
    description:
      'Curadoria de relógios originais. Peças selecionadas, procedência verificada, catálogo limitado e atendimento direto.',
    images: ['/og-images/home.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FaixaMarcas />
      <Destaques />
      <SobreBloco />
    </>
  )
}
