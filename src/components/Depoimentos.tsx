import Reveal from './Reveal'
import { TESTIMONIALS } from '../config'
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

function SourceBadge({ source }: { source: 'whatsapp' | 'google' }) {
  if (source === 'google') {
    return (
      <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-taupe uppercase">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path
            fill="currentColor"
            d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 8.9L6.4 14z M12 6a5.4 5.4 0 0 1 3.8 1.5L18.7 4.6A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.9 5.6L6.4 10C7.2 7.8 9.4 6 12 6z"
          />
        </svg>
        Avaliação no Google
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-taupe uppercase">
      <WhatsAppIcon className="h-3.5 w-3.5" />
      Via WhatsApp
    </span>
  )
}

export default function Depoimentos() {
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

        <div className="mt-16 columns-1 gap-8 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="mb-8 break-inside-avoid">
              <figure className="relative border border-royal/12 bg-white p-8">
                <span className="pointer-events-none absolute -top-6 left-5 font-serif text-[6rem] leading-none text-sky/60 italic select-none">
                  “
                </span>
                <div className="relative flex items-center justify-between gap-4">
                  <SourceBadge source={t.source} />
                  {t.source === 'google' && <Stars />}
                </div>
                <blockquote className="relative mt-5 text-[0.98rem] font-light leading-relaxed text-royal-ink/80">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-royal/10 pt-4">
                  <p className="font-display text-lg text-royal">{t.name}</p>
                  {t.treatment && (
                    <p className="mt-1 text-[0.68rem] tracking-[0.22em] text-taupe uppercase">
                      {t.treatment}
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-[0.72rem] font-light tracking-wide text-taupe/80">
            Depoimentos espontâneos de pacientes. Resultados variam de pessoa para pessoa.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
