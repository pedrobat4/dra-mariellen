import Reveal from './Reveal'
import { WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const CREDENTIALS = [
  'Graduada em Medicina — Universidade de Marília',
  'Pós-graduada em Cosmiatria — Derma Cosmetic',
  'Pós-graduanda em Dermatologia — São Leopoldo Mandic',
  'IMCAS World Congress — Paris',
  'AMWC — Aesthetic & Anti-Aging World Congress',
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* face line-art como marca d'água */}
      <img
        src="/face-blue.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 hidden w-[26rem] opacity-[0.05] select-none lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* retrato — TROCAR pela foto da Dra. (public/dra-mariellen.jpg) */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full border border-sand/60" />
            <div className="grain relative flex aspect-[4/5] items-end justify-center overflow-hidden bg-[linear-gradient(160deg,#3a4ba8_0%,#2a3782_55%,#1c2452_100%)]">
              <img
                src="/face-white.png"
                alt="Ilustração — Dra. Mariellen Dragone"
                className="w-[78%] translate-y-6 opacity-90"
              />
              <span className="absolute top-5 right-5 border border-white/30 px-4 py-2 text-[0.62rem] tracking-[0.3em] text-white/80 uppercase">
                Foto em breve
              </span>
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between border-b border-royal/15 pb-4">
              <span className="font-display text-2xl text-royal-ink">Dra. Mariellen Dragone</span>
              <span className="text-[0.7rem] tracking-[0.25em] text-taupe uppercase">
                Dermatologia · Cosmiatria
              </span>
            </figcaption>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-sand">Quem cuida de você</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-royal-ink md:text-5xl">
              A ciência da pele com{' '}
              <em className="font-serif text-royal italic">um olhar individualizado.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-5 text-[1.02rem] font-light leading-relaxed text-royal-ink/75">
              <p>
                Sou a Dra. Mariellen Dragone, médica pós-graduada em Dermatologia,
                Cosmiatria e Tricologia, apaixonada pela ciência da pele e pelo
                cuidado integral do paciente.
              </p>
              <p>
                Acredito que a dermatologia vai muito além da estética. Meu trabalho
                é unir conhecimento médico, tecnologia e um olhar individualizado
                para promover saúde, qualidade da pele, bem-estar e longevidade.
              </p>
              <p>
                Busquei formação com grandes referências da área e participo dos
                principais congressos internacionais de dermatologia estética,
                acompanhando de perto as inovações que estão transformando o mercado
                global — para oferecer tratamentos modernos, seguros e baseados em
                evidências.
              </p>
              <p className="border-l-2 border-sand pl-5 font-serif text-xl text-royal italic">
                “Meu propósito é proporcionar resultados naturais e elegantes,
                valorizando a confiança que nasce quando nos sentimos bem com quem
                somos.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 space-y-0 border-t border-royal/12">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-4 border-b border-royal/12 py-3.5 text-[0.86rem] tracking-wide text-royal-ink/70"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-sand" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 bg-royal px-9 py-4 text-[0.82rem] font-medium tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-royal-deep"
            >
              <WhatsAppIcon />
              Conversar com a equipe
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
