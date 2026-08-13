import Reveal from './Reveal'
import { LOCATIONS, whatsappLink } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

export default function Unidades() {
  return (
    <section id="unidades" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-sand">Onde atendo</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-royal-ink md:text-6xl">
            De <em className="font-serif text-royal italic">São Paulo</em> ao mar de{' '}
            <em className="font-serif text-royal italic">Balneário Camboriú.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 0.12} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden border border-royal/12 bg-cream p-10 transition-colors duration-500 hover:border-royal/30">
                <span className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[9rem] leading-none text-royal/6 select-none">
                  {loc.uf}
                </span>
                <h3 className="font-display text-4xl text-royal-ink">
                  {loc.city}
                  <span className="ml-3 font-serif text-2xl text-sand italic">{loc.uf}</span>
                </h3>
                {loc.address && (
                  <p className="mt-5 max-w-xs text-[0.98rem] font-light leading-relaxed text-royal-ink/70">
                    {loc.address}
                  </p>
                )}
                <a
                  href={whatsappLink(
                    `Olá! Gostaria de agendar uma avaliação com a Dra. Mariellen na unidade de ${loc.city}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-3 self-start border border-royal px-7 py-3.5 text-[0.75rem] font-medium tracking-[0.22em] text-royal uppercase transition-all duration-300 hover:bg-royal hover:text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Agendar em {loc.city}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
