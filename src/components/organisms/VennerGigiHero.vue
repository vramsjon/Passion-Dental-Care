<template>
  <div class="">
    <!-- DESKTOP -->
    <div
      v-if="isLargeScreen"
      class="w-full h-[700px] bg-[url('/images/vennerbg.png')] sm:left-20 bg-cover bg-center"
    >
      <div class="w-full flex lg:justify-end items-center pt-10">
        <VennerTeks></VennerTeks>
      </div>
    </div>

    <!-- MOBILE -->
    <div
      v-else
      class="w-full h-[810px] bg-[url('/images/vennerbgmobile.png')] sm:left-20 bg-cover bg-center mb-10"
    >
      <div class="flex flex-col items-center justify-center relative py-4">
        <Image class="w-20 cursor-pointer hidden" src="/images/logo.png" />
        <div>
          <Paragraph1>Pelayanan</Paragraph1>
          <Heading2>Venner Gigi</Heading2>
        </div>
        <!-- Elemen lainnya -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import VennerTeks from '../molecules/VennerTeks.vue'
import Image from '../atoms/Image.vue'
import Heading2 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'

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

