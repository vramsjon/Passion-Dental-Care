<template>
  <div v-if="promo" >
    <div>
      <!-- Untuk layar besar -->
      <div class="space-y-20" v-if="isLargeScreen">
        <div v-for="(item, index) in promo.content" :key="index">
          <div class="bg-[#092A62]/80 px-40 py-2">
            <div class="flex gap-x-20">
              <Image class="w-[400px]" :src="item.image" />
              <div class="space-y-8">
                <Heading2>{{ item.title }}</Heading2>
                <div
                  class="text-justify"
                  v-for="(itemText, index) in item.description"
                  :key="index"
                >
                  <Paragraph2>{{ itemText.text }}</Paragraph2>
                </div>
                <div class="bg-white rounded-lg w-content w-40 px-4 py-2 text-center">
                  <span class="text-blue-900 font-medium">Klaim Sekarang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Untuk layar kecil -->
      <div class="space-y-20" v-else>
        <div v-for="(item, index) in promo.content" :key="index">
          <div class="bg-[#092A62]/80 px-6 py-4 space-y-4">
            <Image class="w-full rounded-lg" :src="item.image" />
            <Heading2>{{ item.title }}</Heading2>
            <div
              class="text-justify"
              v-for="(itemText, index) in item.description"
              :key="index"
            >
              <Paragraph2>{{ itemText.text }}</Paragraph2>
            </div>
            <div class="bg-white rounded-2xl px-4 py-2 text-center w-40">
              <span class="text-blue-900 font-medium">Klaim Sekarang</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Image from '../atoms/Image.vue'
import Heading2 from '../atoms/Heading2.vue'
import Paragraph2 from '../atoms/Paragraph2.vue'

const promo = ref(null)
const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(async () => {
  window.addEventListener('resize', handleResize)

  try {
    const res = await fetch('/Promo.json')
    const data = await res.json()
    promo.value = data
  } catch (error) {
    console.error('Gagal memuat data promo: ', error)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
