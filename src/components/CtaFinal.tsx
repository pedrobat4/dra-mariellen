import Reveal from './Reveal'
import { WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

export default function CtaFinal() {
  return (
    <section className="grain relative overflow-hidden bg-royal py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(110%_120%_at_50%_-20%,#4657b8_0%,#3a4ba8_45%,#2a3782_100%)]" />
      <img
        src="/face-white.png"
        alt=""
        aria-hidden
        className="animate-drift pointer-events-none absolute top-1/2 left-[6%] hidden w-72 -translate-y-1/2 opacity-10 select-none lg:block"
      />
      <img
        src="/face-white.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[4%] hidden w-72 -translate-y-1/2 scale-x-[-1] opacity-10 select-none lg:block"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <p className="eyebrow justify-center text-sky after:ml-3.5 after:h-px after:w-10 after:bg-current after:opacity-60 after:content-['']">
            Agende sua avaliação
          </p>
          <h2 className="mt-8 font-display text-5xl leading-[1.02] text-white md:text-7xl">
            Sua melhor versão{' '}
            <em className="font-serif text-sky italic">começa hoje.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-white/75">
            Uma conversa sem compromisso para entender seus objetivos e desenhar
            um plano de cuidado feito para você.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-11 inline-flex items-center gap-3 bg-white px-11 py-5 text-[0.85rem] font-medium tracking-[0.22em] text-royal-deep uppercase transition-all duration-300 hover:bg-sky"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Agendar pelo WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
          <p className="mt-6 text-[0.72rem] tracking-[0.25em] text-white/45 uppercase">
            Resposta em horário comercial
          </p>
        </Reveal>
      </div>
    </section>
  )
}
