import { CRM, INSTAGRAM_URL, LOCATIONS, WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="bg-royal-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <img src="/logo-white.png" alt="Dra. Mariellen Dragone" className="h-20 w-auto" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/55">
              Dermatologia e Estética Avançada — resultados naturais e elegantes,
              com ciência, tecnologia e um olhar individualizado.
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.3em] text-sky uppercase">Unidades</p>
            <ul className="mt-5 space-y-4 text-sm font-light text-white/65">
              {LOCATIONS.map((l) => (
                <li key={l.city}>
                  <span className="block text-white">{l.city} · {l.uf}</span>
                  {l.address}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.3em] text-sky uppercase">Contato</p>
            <ul className="mt-5 space-y-3 text-sm font-light text-white/65">
              <li>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-sky" />
                  (47) 99768-7346
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-sky" aria-hidden>
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  @mariellendragone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-[0.72rem] font-light tracking-wide text-white/35 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Dra. Mariellen Dragone · {CRM}
          </p>
          <p className="max-w-md">
            Este site tem caráter informativo e não substitui a consulta médica.
            Resultados variam de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
