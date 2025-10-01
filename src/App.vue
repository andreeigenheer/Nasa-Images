<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useImageNasaStore } from './stores/imageStore';


const date = ref('');
const imageNasaStore = useImageNasaStore();
const imageDayStore = computed(() => imageNasaStore.getImage)


const imageDay = () => {
  imageNasaStore.fetchImage(date.value)
};

watch(date, (newDate) => {
  imageNasaStore.date = newDate;
});
 </script>

<template>
  <label>
    Coloque uma data daqui
    <input type="date" v-model="date" />
    <button @click="imageDay">Buscar</button>
  </label>

  <div v-if="imageDayStore.length">
    <img :src="imageDayStore" alt="Nasa Image" />
  </div>

</template>
