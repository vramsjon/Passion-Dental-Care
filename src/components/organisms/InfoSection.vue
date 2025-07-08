<template>
  <div class="lg:pb-20">
    <!-- DESKTOP -->
    <div
      v-if="isLargeScreen"
      class="w-full h-[700px] bg-[url('/src/assets/images/imagebg.png')] sm:left-20 bg-cover bg-center"
    >
      <Navbar />
      <div class="w-full flex lg:justify-end items-center lg:px-40 pt-40">
        <InfoText />
      </div>
    </div>

    <!-- MOBILE -->
    <div
      v-else
      class="w-full h-[810px] bg-[url('/src/assets/images/bghome.png')] sm:left-20 bg-cover bg-center mb-10"
    >
      <div class="flex flex-col items-center justify-center relative py-4">
        <Image class="w-20 cursor-pointer" src="/src/assets/images/logo.png" />

        <!-- Tombol toggle: tampilkan ☰ -->
        <div @click="toggleMenu" class="absolute left-[10px] top-0 text-2xl font-extrabold text-blue-500 cursor-pointer z-50 mt-4 bg-white rounded-lg px-[4px] text-center">
          ☰
        </div>

        <!-- Menu -->
        <NavlinkResponsif :isOpen="showMenu" @close="showMenu = false" />

        <!-- Elemen lainnya -->
        <Image class="absolute top-[262px]" src="/src/assets/images/talenthome.png" />
        <InfoText class="absolute top-[150px]" />
        <Image class="absolute top-0 z-10" src="/src/assets/images/light1.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavlinkResponsif from '../molecules/NavlinkResponsif.vue'
import InfoText from '../molecules/InfoText.vue'
import Image from '../atoms/Image.vue'
import Navbar from './Navbar.vue'

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
