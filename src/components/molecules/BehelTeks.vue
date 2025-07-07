<template>
  <div class="space-y-5">
    <Heading1 v-if="isLargeScreen" class="lg:w-[40%]"> Ingin Memiliki Gigi yang Rapih? </Heading1>
    <Heading1 v-else> Gigi yang Rapih? </Heading1>
    <Paragraph1 class="w-[50%]">
      Behel gigi solusinya! Selain fungsi estetika, behel juga bermanfaat untuk kesehatan gigi dan
      mulut. Yuk konsultasi di Klinik Bandung terdekat!
    </Paragraph1>
    <Button class="bg-white py-4 px-6">
      <TeksBlueBold> Booking Jadwal > </TeksBlueBold>
    </Button>
  </div>
</template>
<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Button from '../atoms/Button.vue'
import TeksBlueBold from '../atoms/TeksBlueBold.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'

// Reactive ref untuk deteksi layar besar
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
