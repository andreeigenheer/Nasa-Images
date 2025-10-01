import { defineStore } from 'pinia';
import nasaImageApi from '@/service/nasaImage';

export const useImageNasaStore = defineStore('imageNasa', {
  state: () => ({
    image: '',
    date: '',
  }),

  getters:{
    getImage: (state) => state.image,
  },

  actions: {
    async fetchImage(selectedDate: string) {
      try {
        const response = await nasaImageApi.get('', {
          params: { date: selectedDate }
        });
        this.image = response.data.url;
        this.date = response.data.date
      } catch (error) {
        console.error('Error fetching image:', error);
        throw new Error('Failed to fetch image from NASA API');
      }
    },
  },
})
