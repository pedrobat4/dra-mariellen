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

// Depoimentos REAIS — enviados por pacientes via WhatsApp (prints) e avaliações públicas do Google
export type Testimonial = {
  name: string
  treatment?: string
  text: string
  source: 'whatsapp' | 'google'
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'K. L.',
    treatment: 'Botox, bioestimulador e preenchimento labial',
    source: 'whatsapp',
    text: 'Sempre tive receio de fazer procedimentos estéticos e perder a naturalidade, mas minha experiência foi exatamente o contrário. O resultado ficou leve, elegante e muito acima das minhas expectativas. Recomendo de olhos fechados para quem busca um resultado sofisticado, seguro e extremamente natural.',
  },
  {
    name: 'Kyara',
    treatment: 'Procedimentos estéticos',
    source: 'whatsapp',
    text: 'A aplicação foi super tranquila. A mão dela é extremamente leve, praticamente não senti dor, e dá para perceber o cuidado e a atenção em cada detalhe. O resultado ficou muito natural, respeitando minhas expressões e valorizando meu rosto, exatamente como eu queria.',
  },
  {
    name: 'M. F. C. S.',
    treatment: 'Botox, bioestimulador, preenchimento labial e malar',
    source: 'whatsapp',
    text: 'Há mais de 2 anos ela cuida do meu rosto com uma atenção que é rara de encontrar: sempre avalia com calma, explica cada passo e nunca sugere procedimentos desnecessários. É difícil encontrar profissionais assim, que colocam o bem-estar do paciente acima de tudo.',
  },
  {
    name: 'A. C. F.',
    treatment: 'Botox e preenchimento full face',
    source: 'whatsapp',
    text: 'Ela é muito cuidadosa, sincera e passa muita confiança. Nunca tive a sensação de que estava tentando me convencer a fazer algum procedimento; pelo contrário, sempre orienta pensando no que realmente é melhor para a minha pele. Os resultados ficaram incríveis, muito naturais.',
  },
  {
    name: 'Bel',
    treatment: 'Botox e bioestimulador',
    source: 'whatsapp',
    text: 'Faço meus tratamentos com a Dra. Mariellen e confio muito no trabalho dela. Ela tem um olhar técnico impecável e sempre indica apenas o que realmente faz sentido para a minha pele. Os resultados ficaram muito naturais e superaram minhas expectativas.',
  },
  {
    name: 'Enrique Ramos Goes',
    source: 'google',
    text: 'Atendimento impecável. Fiz alguns procedimentos com a doutora e estou com a autoestima renovada! Mãos leves e olhar estético preciso! Amei.',
  },
  {
    name: 'Ariele Tarouco',
    source: 'google',
    text: 'Excelente profissional, atenciosa, extremamente atualizada e competente! Amei o resultado!',
  },
  {
    name: 'Giovanni Giuliani',
    source: 'google',
    text: 'Médica excepcional, abordando de maneira humana e ética! Adorei os resultados.',
  },
  {
    name: 'Ana Flavia De Deus Silva Fortes',
    source: 'google',
    text: 'Excelente profissional! Confio de olhos fechados!',
  },
]
