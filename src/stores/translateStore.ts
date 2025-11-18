import { defineStore } from 'pinia'
import axios from 'axios'

interface TranslationState {
  original: string
  translated: string
  lang: string
}

export const useTranslationStore = defineStore('translation', {
  state: (): TranslationState => ({
    original: '',
    translated: '',
    lang: navigator.language.split('-')[0] || 'en', 
  }),

  actions: {
    async fetchTranslation(text: string) {
      this.original = text
      try {
        const response = await axios.post('http://localhost:3000/translate', {
          text,
          target_lang: this.lang,
        })
        this.translated = response.data.translated
      } catch (error) {
        console.error('Erro ao traduzir:', error)
        this.translated = '[Erro na tradução]'
      }
    },
  },
})

