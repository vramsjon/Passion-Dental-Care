<template>
  <div class="lg:pb-20">
    <div
      v-if="isLargeScreen"
      class="w-full h-[700px] bg-[url('/src/assets/images/imagebg.png')] sm:left-20 bg-cover bg-center"
    >
      <Navbar></Navbar>
      <div class="w-full flex lg:justify-end items-center lg:px-40 pt-40">
        <InfoText></InfoText>
      </div>
    </div>

    <div
      v-else
      class="w-full h-[810px] bg-[url('/src/assets/images/bghome.png')] sm:left-20 bg-cover bg-center mb-10"
    >
      <div class="flex flex-col items-center justify-center relative py-4">
        <Image class="w-20 " src="/src/assets/images/logo.png" />
        <Image class="absolute top-[262px]" src="/src/assets/images/talenthome.png" />
        <InfoText class="absolute top-[150px]"></InfoText>
        <Image class="absolute top-0 z-10" src="/src/assets/images/light1.png" />
        
      </div>
    </div>
  </div>
</template>
<script setup>
import InfoText from '../molecules/InfoText.vue'
import Image from '../atoms/Image.vue'
import Navbar from './Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Buat variabel reaktif untuk deteksi layar besar
const isLargeScreen = ref(window.innerWidth >= 1024)

// Fungsi yang akan dijalankan saat ukuran layar berubah
const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

// Tambahkan event listener saat komponen dimount
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Hapus event listener saat komponen dilepas
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
