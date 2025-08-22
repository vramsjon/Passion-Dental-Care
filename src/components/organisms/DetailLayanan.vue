<template>
  <div v-if="layanan">
    <!-- DESKTOP -->
    <div v-if="isLargeScreen">
      <div>
        <div
          class="w-full h-[700px] sm:left-20 bg-cover bg-center"
          :style="`background-image: url(${layanan.backgroundDekstop})`"
        >
          <div class="w-full flex lg:justify-end items-center pt-10">
            <VennerTeks></VennerTeks>
          </div>
        </div>
        <div class="bg-[#092A62]/90 px-40 py-20">
          <div class="flex justify-center items-center">
            <VennerContentParagraph></VennerContentParagraph>
          </div>
        </div>
        <div class="bg-[#092A62]/90 mt-20 flex justify-center py-40">
          <VennerImage></VennerImage>
        </div>
        <div>
          <div v-if="Opsi1"></div>
          <div v-else-if="Opsi2">
            <TypeBehel></TypeBehel>
          </div>
        </div>
        <div class="mt-20">
          <VennerTesti></VennerTesti>
        </div>
      </div>
    </div>

    <!-- MOBILE -->
    <div v-else>
      <div
        class="w-full h-[810px] bg-cover bg-center mb-10"
        :style="`background-image:url(${layanan.backgroundMobile})`"
      >
        <div class="flex flex-col items-center justify-center py-4">
          <Image class="w-20 cursor-pointer hidden" src="/images/logo.png" />
          <VennerTeksMobile></VennerTeksMobile>
          <!-- Elemen lainnya -->
        </div>
      </div>
      <div>
        <div class="p-4">
          <div class="bg-[#092A62]/90 rounded-3xl">
            <Image :src="layanan.content[0].image" />
            <div class="p-4">
              <VennerContentMobile></VennerContentMobile>
            </div>
          </div>
        </div>
        <div class="bg-[#092A62]/90 mt-20 flex justify-center py-10">
          <VennerImage></VennerImage>
        </div>
        <div class="px-8">
          <TypeBehelMobile></TypeBehelMobile>
        </div>
        <div class="mt-10">
          <VennerTesti></VennerTesti>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import VennerTeks from '../molecules/VennerTeks.vue'
import Image from '../atoms/Image.vue'
import VennerContentParagraph from '../molecules/VennerContentParagraph.vue'
import VennerContentMobile from '../molecules/VennerContentMobile.vue'
import VennerTeksMobile from '../molecules/VennerTeksMobile.vue'
import VennerImage from '../molecules/VennerImage.vue'
import VennerTesti from '../molecules/VennerTesti.vue'
import TypeBehel from '../molecules/TypeBehel.vue'
import TypeBehelMobile from '../molecules/TypeBehelMobile.vue'

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

const route = useRoute()
const layanan = ref(null)
const Opsi1 = ref(false)
const Opsi2 = ref(false)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  layanan.value = data.find((item) => item.slug === route.params.slug)

  if (layanan.value) {
    if (layanan.value.code === 'VENNER GIGI') {
      Opsi1.value = true
    } else if (layanan.value.code === 'BEHEL GIGI' || layanan.value.code === 'GIGI TIRUAN') {
      Opsi2.value = true
    }
  }
})
</script>