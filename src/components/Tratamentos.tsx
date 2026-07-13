import Reveal from './Reveal'
import { whatsappLink } from '../config'

const CATEGORIES = [
  {
    label: 'Harmonização & Injetáveis',
    items: [
      'Toxina Botulínica (Botox)',
      'Preenchimento com Ácido Hialurônico',
      'Bioestimuladores de Colágeno',
      'Bioremodeladores Injetáveis',
      'Harmonização Facial Full Face',
      'Fios de PDO e Fios Aptos',
      'Skinboosters e Hidratantes Injetáveis',
    ],
  },
  {
    label: 'Tecnologias',
    items: [
      'Fotona 4D®',
      'Laser Fotona®',
      'Laser CO₂ Fracionado',
      'Ultraformer®',
      'Linear Z®',
      'HydraFacial®',
      'Radiofrequência Facial e Corporal',
    ],
  },
  {
    label: 'Qualidade de Pele',
    items: [
      'Rejuvenescimento Facial Avançado',
      'Protocolos de Skin Quality',
      'Tratamentos para Melasma e Manchas',
      'Tratamentos para Acne e Cicatrizes',
      'Skincare Personalizado',
    ],
  },
  {
    label: 'Capilar & Tricologia',
    items: [
      'Tricologia e Saúde Capilar',
      'MMP Capilar',
      'Protocolos para Queda de Cabelo',
    ],
  },
  {
    label: 'Corporal',
    items: [
      'Tratamento de Flacidez Facial e Corporal',
      'Remodelação Corporal Não Invasiva',
      'Radiofrequência Corporal',
    ],
  },
  {
    label: 'Longevidade',
    items: [
      'Medicina Regenerativa Aplicada à Estética',
      'Consultoria de Envelhecimento Saudável',
      'Protocolos Individualizados',
    ],
  },
]

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="grain relative overflow-hidden bg-royal-deep py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_85%_10%,#3a4ba8_0%,#2a3782_55%,#1c2452_100%)]" />
      <img
        src="/face-white.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-8%] hidden w-[30rem] opacity-[0.06] select-none xl:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-[7fr_4fr]">
          <Reveal>
            <p className="eyebrow text-sky">Tratamentos</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-white md:text-6xl">
              Um menu completo para a{' '}
              <em className="font-serif text-sky italic">sua melhor versão.</em>
            </h2>
            <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-white/60">
              Da harmonização facial à saúde capilar — cada protocolo começa por
              uma avaliação minuciosa e individualizada.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative ml-auto max-w-[19rem]">
              <div className="absolute -top-4 -right-4 h-full w-full border border-sky/30" />
              <img
                src="/fotos/trat-1840.webp"
                alt="Dra. Mariellen aplicando sérum na pele"
                className="relative aspect-[4/5] w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 border border-white/25 bg-royal-ink/40 px-4 py-2 text-[0.62rem] tracking-[0.28em] text-white/85 uppercase backdrop-blur-sm">
                Estética avançada
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/14 bg-white/14 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} delay={(i % 3) * 0.1} className="h-full">
              <article className="group flex h-full flex-col bg-royal-deep/95 p-8 transition-colors duration-500 hover:bg-royal">
                <header className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-[1.55rem] leading-tight text-white">
                    {cat.label}
                  </h3>
                  <span className="font-display text-xl text-sand/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </header>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9rem] font-light text-white/70"
                    >
                      <span className="mt-[0.55em] h-px w-3.5 shrink-0 bg-sand/70" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Olá! Vim pelo site da Dra. Mariellen e tenho interesse em ${cat.label}. Gostaria de agendar uma avaliação.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 self-start border-b border-sky/40 pb-1 text-[0.72rem] font-medium tracking-[0.24em] text-sky uppercase transition-colors duration-300 hover:border-white hover:text-white"
                >
                  Agendar avaliação
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-[0.75rem] font-light tracking-wide text-white/40">
            Todos os tratamentos são indicados somente após avaliação médica individualizada.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
