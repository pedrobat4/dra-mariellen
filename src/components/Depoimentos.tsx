import { useRef } from 'react'
import Reveal from './Reveal'
import { GOOGLE_REVIEWS, WHATSAPP_PRINTS } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

function Stars() {
  return (
    <span className="flex gap-1 text-sand" aria-label="5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

function GoogleIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 8.9L6.4 14z M12 6a5.4 5.4 0 0 1 3.8 1.5L18.7 4.6A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.9 5.6L6.4 10C7.2 7.8 9.4 6 12 6z"
      />
    </svg>
  )
}

export default function Depoimentos() {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('figure')
    const step = card ? card.clientWidth + 24 : 360
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="depoimentos" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-sand">Depoimentos reais</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-royal-ink md:text-6xl">
              A confiança de quem já{' '}
              <em className="font-serif text-royal italic">se reencontrou no espelho.</em>
            </h2>
            <p className="max-w-xs pb-2 text-sm font-light leading-relaxed text-taupe">
              Mensagens enviadas por pacientes e avaliações públicas no Google.
            </p>
          </div>
        </Reveal>

        {/* ————— Prints do WhatsApp ————— */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center justify-between border-b border-royal/12 pb-4">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.28em] text-royal uppercase">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </span>
              Direto do WhatsApp
            </p>
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Depoimentos anteriores"
                className="flex h-10 w-10 items-center justify-center border border-royal/25 text-royal transition-colors hover:bg-royal hover:text-white"
              >
                ←
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Próximos depoimentos"
                className="flex h-10 w-10 items-center justify-center border border-royal/25 text-royal transition-colors hover:bg-royal hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={track}
            className="-mx-5 mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-4 md:-mx-10 md:scroll-px-10 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {WHATSAPP_PRINTS.map((p) => (
              <figure
                key={p.name}
                className="w-[272px] shrink-0 snap-start border border-royal/12 bg-white p-3 md:w-[300px]"
              >
                <img
                  src={p.img}
                  alt={`Depoimento de ${p.name} enviado pelo WhatsApp`}
                  loading="lazy"
                  className="aspect-[900/1150] w-full object-cover"
                />
                <figcaption className="px-2 pt-4 pb-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-display text-lg text-royal">{p.name}</p>
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-[#25D366]" />
                  </div>
                  <p className="mt-1 truncate text-[0.65rem] tracking-[0.18em] text-taupe uppercase">
                    {p.treatment}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        {/* ————— Avaliações do Google ————— */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center justify-between border-b border-royal/12 pb-4">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.28em] text-royal uppercase">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-royal shadow-[0_0_0_1px_rgba(58,75,168,0.2)]">
                <GoogleIcon />
              </span>
              Avaliações no Google
            </p>
            <Stars />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GOOGLE_REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col border border-royal/12 bg-white p-7">
                <Stars />
                <blockquote className="mt-5 flex-1 text-[0.95rem] font-light leading-relaxed text-royal-ink/80">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex h-[4.25rem] items-center justify-between gap-3 border-t border-royal/10">
                  <p className="font-display text-base leading-snug text-royal">{r.name}</p>
                  <GoogleIcon className="h-4 w-4 shrink-0 text-taupe" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
