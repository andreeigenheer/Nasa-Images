<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { aboutApp } from './modulos'

import { useImageNasaStore } from './stores/imageStore'
import { useTranslationStore } from './stores/translateStore'

const date = ref('')
const translatedDescription = ref('')
const translatedTitle = ref('')

const imageNasaStore = useImageNasaStore()
const translationStore = useTranslationStore()

const imageDayStore = computed(() => imageNasaStore.getImage)
const imageTitle = computed(() => imageNasaStore.getImageTite)
const imageDescription = computed(() => imageNasaStore.getImageDescription)

const imageDay = () => {
  imageNasaStore.fetchImage(date.value)
}

watch(imageTitle, async (newTitle) => {
  if (newTitle) {
    await translationStore.fetchTranslation(newTitle)
    translatedTitle.value = translationStore.translated
  }
})

watch(imageDescription, async (newDesc) => {
  if (newDesc) {
    await translationStore.fetchTranslation(newDesc)
    translatedDescription.value = translationStore.translated
  }
})

watch(date, (newDate) => {
  imageNasaStore.date = newDate
})
</script>

<template>

<aboutApp />

  <label>
    Coloque uma data daqui
    <input type="date" v-model="date" />
    <button @click="imageDay">Buscar</button>
  </label>

  <div v-if="imageDayStore.length">
    <img :src="imageDayStore" alt="Nasa Image" />
    <h1>{{ translatedTitle }}</h1>
    <h2>{{ translatedDescription }}</h2>
  </div>
</template>
