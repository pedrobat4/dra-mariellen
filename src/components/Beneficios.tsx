import Reveal from './Reveal'

const BENEFITS = [
  {
    n: '01',
    title: 'Resultados naturais e elegantes',
    text: 'Nada de rostos artificiais. Cada procedimento valoriza a harmonia facial e a beleza que já é sua — refinada, nunca transformada.',
  },
  {
    n: '02',
    title: 'Plano 100% personalizado',
    text: 'Cada paciente é único. A avaliação minuciosa define um plano de tratamento que respeita sua individualidade, seus objetivos e sua essência.',
  },
  {
    n: '03',
    title: 'Tecnologia baseada em evidências',
    text: 'Fotona 4D®, Ultraformer®, Laser CO₂ e protocolos modernos, seguros e respaldados pela ciência — nada de modismos.',
  },
  {
    n: '04',
    title: 'Atualização internacional constante',
    text: 'Formação com grandes referências e presença nos principais congressos do mundo — IMCAS Paris, AMWC — acompanhando de perto cada inovação.',
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-sand">Por que a Dra. Mariellen</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-royal-ink md:text-6xl">
            Muito além da estética:{' '}
            <em className="font-serif text-royal italic">saúde, ciência e cuidado.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-royal/12 bg-royal/12 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.n} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col bg-cream p-8 transition-colors duration-500 hover:bg-white lg:p-9">
                <span className="font-display text-5xl text-sky transition-colors duration-500 group-hover:text-royal">
                  {b.n}
                </span>
                <h3 className="mt-7 text-lg font-medium tracking-wide text-royal-ink">
                  {b.title}
                </h3>
                <p className="mt-4 text-[0.95rem] font-light leading-relaxed text-taupe">
                  {b.text}
                </p>
                <span className="mt-auto block pt-8">
                  <span className="block h-px w-10 bg-sand transition-all duration-500 group-hover:w-full" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
