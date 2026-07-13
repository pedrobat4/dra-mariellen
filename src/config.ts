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

// TROCAR: depoimentos ilustrativos — substituir por depoimentos reais de pacientes
export const TESTIMONIALS = [
  {
    name: 'Camila R.',
    treatment: 'Harmonização facial',
    text: 'A Dra. Mariellen tem um olhar único. O resultado ficou tão natural que ninguém percebeu o procedimento — só comentam que estou com uma pele incrível.',
  },
  {
    name: 'Fernanda A.',
    treatment: 'Protocolo Skin Quality',
    text: 'Do primeiro contato à consulta, tudo é impecável. Ela explica cada etapa com calma e monta um plano que respeita o nosso rosto e o nosso tempo.',
  },
  {
    name: 'Juliana M.',
    treatment: 'Bioestimulador de colágeno',
    text: 'Nunca me senti tão acolhida em um consultório. Atendimento minucioso, sem pressa, e um resultado elegante que devolveu minha autoestima.',
  },
]
