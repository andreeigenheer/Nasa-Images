<script setup lang="ts">
interface welcomeComponent {
  title: string
  subtitle: string
}

defineProps<welcomeComponent>()
</script>
<template>
  <h1>
    {{ title }}
  </h1>
  <h3>
    {{ subtitle }}
  </h3>
  <slot />
</template>
