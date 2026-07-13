import { motion } from 'framer-motion'
import { WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative flex min-h-svh flex-col overflow-hidden bg-royal-deep"
    >
      {/* atmosfera: luz radial + véu azul-claro */}
      <div className="absolute inset-0 bg-[radial-gradient(115%_90%_at_18%_8%,#4657b8_0%,#3a4ba8_38%,#2a3782_72%,#1c2452_100%)]" />
      <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-sky/14 blur-[130px]" />
      <div className="absolute bottom-[-18%] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-sand/12 blur-[120px]" />

      {/* line-art do rosto (da própria logo) */}
      <motion.img
        src="/face-white.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.16, x: 0 }}
        transition={{ duration: 1.6, delay: 0.3, ease }}
        className="animate-drift pointer-events-none absolute top-[8%] right-[-6%] hidden h-[92%] w-auto object-contain select-none md:block"
      />

      {/* hairlines verticais decorativas */}
      <div className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-white/8 md:left-10 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden w-px bg-white/8 md:right-10 md:block" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-16 md:px-10 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="eyebrow text-sky"
        >
          Dermatologia &amp; Estética Avançada
        </motion.p>

        <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.2rem,9vw,7.2rem)] leading-[0.98] text-white">
          {['Natural', 'é o novo'].map((w, i) => (
            <motion.span
              key={w}
              className="mr-[0.22em] inline-block"
              initial={{ opacity: 0, y: '0.6em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12, ease }}
            >
              {w}
            </motion.span>
          ))}
          <motion.em
            className="inline-block font-serif text-sky italic"
            initial={{ opacity: 0, y: '0.6em' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.54, ease }}
          >
            luxo.
          </motion.em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
        >
          Atendimento especializado e o cuidado que você merece — planos de
          tratamento personalizados, tecnologia de ponta e resultados que
          respeitam a sua essência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-white px-9 py-4 text-[0.82rem] font-medium tracking-[0.2em] text-royal-deep uppercase transition-all duration-300 hover:bg-sky"
          >
            <WhatsAppIcon />
            Agendar minha avaliação
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#tratamentos"
            className="inline-flex items-center justify-center gap-3 border border-white/35 px-9 py-4 text-[0.82rem] font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Conhecer tratamentos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/12 pt-7 text-[0.72rem] tracking-[0.22em] text-white/55 uppercase"
        >
          <span>Pós-graduada em Dermatologia</span>
          <span className="hidden h-1 w-1 rounded-full bg-sand sm:block" />
          <span>Cosmiatria &amp; Tricologia</span>
          <span className="hidden h-1 w-1 rounded-full bg-sand sm:block" />
          <span>São Paulo · Balneário Camboriú</span>
        </motion.div>
      </div>
    </section>
  )
}
