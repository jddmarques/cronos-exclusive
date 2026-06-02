'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import { buildGenericWhatsAppLink } from '@/lib/whatsapp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-[rgba(201,169,97,0.2)]'
          : 'bg-gradient-to-b from-black/60 to-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="focus-visible:outline-none group"
            aria-label="Cronos Exclusivo — Página inicial"
          >
            <div
              className="relative transition-opacity duration-300 group-hover:opacity-80"
              style={{ width: '160px', height: '56px', overflow: 'hidden' }}
            >
              <Image
                src="/logo.png"
                alt="Cronos Exclusivo"
                fill
                priority
                sizes="160px"
                style={{ objectFit: 'cover', objectPosition: 'center 48%' }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="/catalogo">Coleção</NavLink>
            <NavLink href="/#sobre">Sobre</NavLink>
            <a
              href={buildGenericWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[11px] tracking-[0.18em] uppercase text-black bg-[#C9A961] px-6 py-2.5 transition-all hover:bg-[#b8944e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961]"
            >
              Consultar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-off-white p-1 focus-visible:outline-none focus-visible:text-champagne"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[rgba(201,169,97,0.2)]">
          <Container>
            <div className="flex flex-col py-8 gap-6">
              <MobileNavLink href="/catalogo" onClick={() => setMenuOpen(false)}>
                Coleção
              </MobileNavLink>
              <MobileNavLink href="/#sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </MobileNavLink>
              <a
                href={buildGenericWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[11px] tracking-[0.18em] uppercase text-black bg-[#C9A961] px-5 py-3.5 text-center transition-all hover:bg-[#b8944e] w-full"
              >
                Consultar via WhatsApp
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-inter text-[11px] tracking-[0.18em] uppercase text-[#c8c0b4] hover:text-off-white transition-colors focus-visible:outline-none focus-visible:text-[#C9A961]"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-inter text-sm tracking-[0.15em] uppercase text-off-white border-b border-[rgba(201,169,97,0.12)] pb-4 focus-visible:outline-none focus-visible:text-[#C9A961]"
    >
      {children}
    </Link>
  )
}
