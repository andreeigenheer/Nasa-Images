<script setup lang="ts">
interface slide {
  images: string
  subtitles: string
}

defineProps<{
  slides: slide[]
}>()
</script>

<template>
    <div id="carousel_slide_show" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.images + index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="slide.images" class="d-block mx-auto img-square" />
          <div class="carousel-caption">
            <h5>{{ slide.subtitles }}</h5>
          </div>
        </div>
      </div>
    </div>

</template>

<style lang="css" scoped>
.img-square {
  width: 60vw;
  height: 60vh;
  object-fit: cover;
  object-position: center;

}


</style>
