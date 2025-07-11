<template>
  <div class="">
    <!-- DESKTOP -->
    <div
      v-if="isLargeScreen"
      class="w-full h-[700px] bg-[url('/images/tentangkamibg.png')] sm:left-20 bg-cover bg-center"
    >
      <div class="w-full flex lg:justify-end items-center pt-10">
        <LayananTeks></LayananTeks>
      </div>
    </div>

    <!-- MOBILE -->
    <div
      v-else
      class="w-full h-[810px] bg-[url('/images/bghome.png')] sm:left-20 bg-cover bg-center mb-10"
    >
      <div class="flex flex-col items-center justify-center relative py-4">
        <Image class="w-20 cursor-pointer" src="/images/logo.png" />

        <!-- Elemen lainnya -->
        <Image class="absolute top-[10px]" src="/images/talenttentang.png" />
        <LayananTeks class="absolute top-[150px]" />
        <Image class="absolute top-0 z-10" src="/images/light1.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import LayananTeks from '../molecules/LayananTeks.vue'
import Image from '../atoms/Image.vue'

// Cek ukuran layar
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

// Toggle menu mobile
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

