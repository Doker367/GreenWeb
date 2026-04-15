import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import esTranslation from './es/translation.json'
import enTranslation from './en/translation.json'

const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('language') 
  : 'es'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
    },
    lng: savedLanguage || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng)
  }
})

export default i18n
