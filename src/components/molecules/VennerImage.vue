<template>
  <div v-if="vennerContent">
    <div v-if="isLargeScreen" class="p-4">
      <Image class="lg:w-[900px] w-full" :src="vennerContent.imageDekstop" />
    </div>
    <div v-else class="p-4">
      <Image class=" w-[200px]" :src="vennerContent.imageMobile" />
    </div>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const vennerContent = ref(null)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[1]
  }
})

const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
