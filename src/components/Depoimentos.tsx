import Reveal from './Reveal'
import { TESTIMONIALS } from '../config'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-sand">Depoimentos</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-royal-ink md:text-6xl">
            A confiança de quem já{' '}
            <em className="font-serif text-royal italic">se reencontrou no espelho.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} className="h-full">
              <figure
                className={`relative flex h-full flex-col border border-royal/12 bg-white p-9 ${
                  i === 1 ? 'lg:-translate-y-6' : ''
                }`}
              >
                <span className="pointer-events-none absolute -top-7 left-6 font-serif text-[7rem] leading-none text-sky/60 italic select-none">
                  “
                </span>
                <blockquote className="relative mt-6 flex-1 text-[1.02rem] font-light leading-relaxed text-royal-ink/80">
                  {t.text}
                </blockquote>
                <figcaption className="mt-8 border-t border-royal/10 pt-5">
                  <p className="font-display text-xl text-royal">{t.name}</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.25em] text-taupe uppercase">
                    {t.treatment}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
