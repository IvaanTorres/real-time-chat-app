import { locales } from '~/enums'

export const convertLocale = (preferredLocale: string): string => {
  let locale
  switch (preferredLocale) {
    case 'de': locale = locales.GERMAN
      break
    case 'es': locale = locales.SPANISH
      break
    case 'en': case 'en-US': locale = locales.ENGLISH
      break
    case 'fr': locale = locales.FRENCH
      break
    case 'pt-BR': locale = locales.PORTUGUESE
      break
    case 'it': locale = locales.ITALIAN
      break
    case 'ru': locale = locales.RUSSIAN
      break
    case 'ja': locale = locales.JAPONEASE
      break
    default: locale = locales.ENGLISH
  }
  return locale
}
