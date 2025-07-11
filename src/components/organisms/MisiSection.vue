<template>
  <div>
    <div v-if="isLargeScreen" class="w-full flex justify-center items-center mt-10">
      <div
        class="bg-[url('/images/misibg.png')] w-[1066px] h-[650px] bg-contain bg-no-repeat relative"
      >
        <MisiTeks class="absolute right-0 top-12"></MisiTeks>
      </div>
    </div>
    <div v-else class="px-6 mt-6">
        <MisiTeks></MisiTeks>
    </div>
  </div>
</template>
<script setup>
import MisiTeks from '../molecules/MisiTeks.vue'

import { ref, onMounted, onUnmounted } from 'vue'

//cek ukuran layar
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
