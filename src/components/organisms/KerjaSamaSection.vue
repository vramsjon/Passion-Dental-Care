<template>
  <div class="mt-10 lg:mt-40 lg:space-y-30 px-4">
    <KerjasamaTeks></KerjasamaTeks>
    <div>
      <div v-if="isLargeScreen">
        <Image src="/src/assets/images/asuransi.png" />
      </div>
      <div v-else>
        <Image src="/src/assets/images/asuransi2.png" />
      </div>
    </div>
  </div>
</template>
<script setup>
import KerjasamaTeks from '../molecules/KerjasamaTeks.vue'
import Image from '../atoms/Image.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'

// Reactive state untuk deteksi layar besar (lg ≥ 1024px)
const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
