import { defineStore } from 'pinia'
import { nasaImageApi } from '@/service'

export const useImageNasaStore = defineStore('imageNasa', {
  state: () => ({
    image: '',
    date: '',
    title: '',
    explanation: '',
  }),

  getters: {
    getImage: (state) => state.image,
    getImageTite: (state) => state.title,
    getImageDescription: (state) => state.explanation,
  },

  actions: {
    async fetchImage(selectedDate: string) {
      try {
        const response = await nasaImageApi.get('', {
          params: { date: selectedDate },
        })
        this.image = response.data.url
        this.date = response.data.date
        this.title = response.data.title
        this.explanation = response.data.explanation
        console.log('ANTES DA TRADUÇÃO:', this.title, this.explanation)
        } catch (error) {
        console.error('Error fetching image:', error)
        throw new Error('Failed to fetch image from NASA API')
      }
    },
  },
})
