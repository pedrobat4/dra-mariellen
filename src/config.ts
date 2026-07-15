// ============================================================
// CONFIGURAÇÃO DO SITE — Dra. Mariellen Dragone
// Edite aqui: WhatsApp, Instagram, endereços e depoimentos.
// ============================================================

export const WHATSAPP_NUMBER = '5547997687346' // WA Business 47 99768-7346

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WA_DEFAULT = whatsappLink(
  'Olá! Vim pelo site da Dra. Mariellen Dragone e gostaria de agendar uma avaliação.',
)

export const INSTAGRAM_URL = 'https://www.instagram.com/mariellendragone/'

export const CRM = 'CRM-SP 000.000 · RQE 00000' // TROCAR pelo CRM real

export const LOCATIONS = [
  {
    city: 'São Paulo',
    uf: 'SP',
    address: 'Rua Mário Amaral, 432 — Paraíso',
    note: 'Região da Av. Paulista',
  },
  {
    city: 'Balneário Camboriú',
    uf: 'SC',
    address: 'Av. Atlântica, 4950 — Barra Sul',
    note: 'Frente mar',
  },
]

// Depoimentos REAIS — prints do WhatsApp (recortados, sem foto/avatar de paciente)
// imagens em public/depoimentos/*.webp
export const WHATSAPP_PRINTS = [
  {
    name: 'K. L.',
    treatment: 'Botox, bioestimulador e preenchimento labial',
    img: '/depoimentos/wa-kl.webp',
  },
  {
    name: 'Kyara',
    treatment: 'Procedimentos estéticos',
    img: '/depoimentos/wa-kyara.webp',
  },
  {
    name: 'M. F. C. S.',
    treatment: 'Botox, bioestimulador, preench. labial e malar',
    img: '/depoimentos/wa-mfcs.webp',
  },
  {
    name: 'A. C. F.',
    treatment: 'Botox e preenchimento full face',
    img: '/depoimentos/wa-acf.webp',
  },
  {
    name: 'Bel',
    treatment: 'Botox e bioestimulador',
    img: '/depoimentos/wa-bel.webp',
  },
]

// Avaliações públicas do Google
export const GOOGLE_REVIEWS = [
  {
    name: 'Enrique Ramos Goes',
    text: 'Atendimento impecável. Fiz alguns procedimentos com a doutora e estou com a autoestima renovada! Mãos leves e olhar estético preciso! Amei.',
  },
  {
    name: 'Ariele Tarouco',
    text: 'Excelente profissional, atenciosa, extremamente atualizada e competente! Amei o resultado!',
  },
  {
    name: 'Giovanni Giuliani',
    text: 'Médica excepcional, abordando de maneira humana e ética! Adorei os resultados.',
  },
  {
    name: 'Ana Flavia De Deus Silva Fortes',
    text: 'Excelente profissional! Confio de olhos fechados!',
  },
]
