import { useEffect, useState } from 'react'
import { WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const LINKS = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Unidades', href: '#unidades' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 shadow-[0_1px_0_0_rgba(42,55,130,0.12)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#inicio" aria-label="Dra. Mariellen Dragone — início">
          <img
            src={scrolled ? '/logo-blue.png' : '/logo-white.png'}
            alt="Dra. Mariellen Dragone"
            className="h-16 w-auto md:h-20"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.8rem] font-medium tracking-[0.18em] uppercase transition-colors ${
                scrolled ? 'text-royal-ink/70 hover:text-royal' : 'text-white/75 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 border px-6 py-2.5 text-[0.8rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
              scrolled
                ? 'border-royal bg-royal text-white hover:bg-royal-deep'
                : 'border-white/60 text-white hover:bg-white hover:text-royal'
            }`}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Agendar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden ${
            scrolled || open ? 'text-royal-ink' : 'text-white'
          }`}
          aria-label="Abrir menu"
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-royal/10 bg-cream/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-royal/8 py-3.5 text-sm font-medium tracking-[0.18em] text-royal-ink/80 uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2.5 bg-royal px-6 py-3.5 text-sm font-medium tracking-[0.18em] text-white uppercase"
            >
              <WhatsAppIcon />
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
