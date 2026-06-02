import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://cronosexclusive.com.br'), // Substitua pela URL real
  title: {
    default: 'Cronos Exclusivo — Relojoaria de Curadoria',
    template: '%s | Cronos Exclusivo',
  },
  description:
    'Cronos Exclusivo: curadoria de relógios originais, peças selecionadas com procedência verificada, catálogo limitado e atendimento direto.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Cronos Exclusivo',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
