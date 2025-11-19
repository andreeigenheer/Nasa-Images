<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { WelcomeComponent } from '@/components/index'

const { t } = useI18n()

const title = t('About.title')
const subtitle = t('About.subtitle')
</script>
<template>
  <WelcomeComponent
     :title="title"
     :subtitle="subtitle"
  />
</template>
