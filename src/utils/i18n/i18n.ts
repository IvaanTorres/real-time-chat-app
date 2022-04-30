import { locales } from '~/enums'

/**
 * Set the locale of the application.
 *
 * @returns {string} - The current locale.
 */
export const getLocale = (): string => {
  let preferredLocale

  // Try to get locale from local storage
  if (typeof window !== 'undefined' && localStorage.getItem('preferredLocale') !== null)
    preferredLocale = localStorage.getItem('preferredLocale')!

  // If the locale is not set, try to get it from the browser (It's the first time the user is using the app)
  else if (typeof window !== 'undefined')
    preferredLocale = navigator.language

  // In case the locale is not supported, use English
  return preferredLocale || 'en'
}

/**
 * Get the locale of the application and convert it to show it inside the app.
 *
 * @param preferredLocale - The preferred locale.
 * @returns {string} - The locale name which will be shown.
 */
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
