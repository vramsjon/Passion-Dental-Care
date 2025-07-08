<template>
  <!-- Jika ada props link, bungkus dengan <a>. Jika tidak, tampilkan biasa -->
  <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
    <img :src="src" :alt="alt" />
  </a>
  <img
    v-else
    :src="src"
    :alt="alt"
    @click="$emit('click')"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  link: {
    type: String,
    default: '',
  },
})

defineEmits(['click'])
</script>
