/**
 * Dados do estúdio em um único lugar.
 * Alterar aqui reflete em todas as seções do site.
 */
export const studio = {
  name: 'Andressa Medeiros',
  speciality: 'Retrato Corporativo',
  city: 'Lisboa, Portugal',
  instagramHandle: '@eu.andressamedeirosfotografia',
  instagramUrl: 'https://instagram.com/eu.andressamedeirosfotografia',
  whatsappLabel: '+351 933 433 551',
  whatsappUrl: 'https://wa.me/351933433551?text=Oi!+Vi+o+site+e+quero+saber+mais',
  address: [
    'Estúdio Andressa Medeiros',
    'Rua de Santo António, 14',
    'Santo António dos Cavaleiros',
    'Lisboa, Portugal',
  ],
  addressNote: 'Atendimento com agendamento prévio',
} as const;

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
] as const;
