<template>
  <div v-if="promo">
    <div>
      <div v-if="isLargeScreen">
        <div
          class="w-full h-[700px] bg-cover bg-center relative"
          :style="`background-image: url(${promo.backgroundDekstop})`"
        >
          <div class="absolute w-[500px] right-40 top-60">
            <Heading1 class="text-end">{{ promo.title }}</Heading1>
            <Paragraph1 class="text-end">{{ promo.description }}</Paragraph1>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="w-full h-[700px] bg-cover bg-center relative"
          :style="`background-image: url(${promo.backgroundMobile})`"
        >
          <div class="flex flex-col items-center px-6 py-10 text-center pt-40">
            <Heading1>{{ promo.title }}</Heading1>
            <Paragraph1>{{ promo.description }}</Paragraph1>
          </div>
        </div>
      </div>
    </div>
    <PromoContent class="mt-20" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import PromoContent from '../molecules/PromoContent.vue'

const promo = ref(null)
const isLargeScreen = ref(window.innerWidth >= 1024) // breakpoint lg (1024px)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(async () => {
  try {
    const res = await fetch('/Promo.json')
    const data = await res.json()
    promo.value = data
  } catch (error) {
    console.error('Gagal memuat data promo: ', error)
  }

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
