import { WA_DEFAULT } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
