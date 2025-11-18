import { createI18n } from 'vue-i18n'
import en from './en.json'
import pt from './pt.json'
import es from './es.json'

const messages={
  en,
  pt,
  es,
}

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0],
  messages,
})

export default i18n
