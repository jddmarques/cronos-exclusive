import { contact } from './contact'

export function buildWhatsAppLink(model: string, reference: string): string {
  const message = encodeURIComponent(
    `Olá, gostaria de informações sobre o ${model} ref. ${reference}.`
  )
  return `https://wa.me/${contact.whatsappRaw}?text=${message}`
}

export function buildGenericWhatsAppLink(): string {
  const message = encodeURIComponent(
    'Olá, gostaria de saber mais sobre os relógios disponíveis na Cronos Exclusivo.'
  )
  return `https://wa.me/${contact.whatsappRaw}?text=${message}`
}
