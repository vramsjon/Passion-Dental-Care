<template>
  <div v-if="detailLokasi">
    <div
      class="flex flex-col justify-center items-center gap-y-[120px]"
      v-for="(item, index) in detailLokasi.content"
      :key="index"
    >
      <!-- Selalu tampil -->
      <Teks1Blue>{{ item.title }}</Teks1Blue>

      <!-- Tampil hanya untuk item pertama -->
      <div
        v-if="index === 0"
        class="w-[1066px] h-[398px] bg-contain bg-center bg-no-repeat rounded-4xl relative flex gap-x-12"
        :style="`background-image: url(${item.background})`"
      >
        <div class="bg-[#092A62]/90 w-[500px] h-[416px] p-12 space-y-8 rounded-4xl">
          <Heading1>{{ item.name }}</Heading1>
          <Paragraph2>{{ item.address }}</Paragraph2>
          <div class="bg-[#092A62] rounded-2xl px-4 py-2">
            <p class="text-white font-medium">Kontak Kami:</p>
            <Heading2>{{ item.contact }}</Heading2>
          </div>
        </div>
        <div class="space-y-10">
          <Image class="w-[417px] h-[308px] mt-4" :src="item.image" />
          <div class="bg-[#092A62]/80 rounded-4xl">
            <p class="text-white font-bold text-xl text-center py-4">Hubungi Kami</p>
          </div>
        </div>
      </div>

      <!-- Gambar galeri jika index === 1 -->
      <div
        v-if="index === 1"
        class="bg-[#092A62]/90 w-full h-auto p-24 flex justify-center items-center"
      >
        <Image class="w-[1099px] h-[436px]" :src="item.imageGaleri" />
      </div>

      <!-- Jadwal dokter -->
      <div v-if="index === 2" class="grid grid-cols-2 gap-10">
        <div v-for="(itemtext, index) in item.schedule" :key="index">
          <div class="bg-[#01BAB4] rounded-4xl w-[475px] h-[380px] p-10">
            <Heading2 class="text-center mb-4">{{ itemtext.day }}</Heading2>
            <table class="text-white w-full text-left">
              <thead>
                <tr class="text-3xl border-y-2 border-white text-center">
                  <th class="pb-2">Jam</th>
                  <th class="pb-2">Dokter</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(time, i) in itemtext.time" :key="'time-' + i">
                  <td class="py-4">{{ time.text }}</td>
                  <td class="py-4">{{ itemtext.dentist[i]?.name || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center gap-2 mb-6">
          <Heading1Blue>{{ item.titleTesti }}</Heading1Blue>
          <Teks1Blue class="text-center">{{ item.description }}</Teks1Blue>
        </div>

        <div v-if="index === 3">
          <div
            v-if="isLargeScreen"
            class="w-full min-h-[340px] bg-center bg-no-repeat bg-cover bg- object-contain lg:w-[1066px] lg:h-[540px] rounded-4xl flex lg:mt-40 relative"
            :style="`background-image: url(${item.backgroundTesti})`"
          >
            <div
              class="rounded-4xl bg-[#092A62] h-[210px] lg:w-[865px] lg:h-[389px] lg:left-[200px] lg:top-[80px] lg:relative z-3"
            >
              <Image
                class="lg:w-[546px] lg:h-[708px] lg:absolute lg:left-[-250px] lg:top-[-248px]"
                :src="item.talent"
              />
              <Image
                class="lg:w-[605px] lg:absolute lg:left-[200px] lg:top-[80px]"
                :src="item.imageComent"
              />
            </div>
          </div>

          <div v-else class="relative">
            <div class="p-6">
              <div
                class="w-full min-h-[340px] bg-center bg-no-repeat bg-cover object-contain rounded-4xl flex flex-col items-center justify-center relative"
                :style="`background-image: url(${item.backgroundTesti})`"
              >
                <Image
                  class="w-[306px] h-auto absolute top-[-100px] left-[20px]"
                  :src="item.talent"
                />
              </div>
            </div>
            <div
              class="bg-[#092A62] h-[210px] w-[100%] flex items-center mt-[-200px] p-6 z-48 relative"
            >
              <Image class="w-full h-auto" :src="item.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1Blue from '../atoms/Heading1Blue.vue'
import Heading1 from '../atoms/Heading1.vue'
import Paragraph2 from '../atoms/Paragraph2.vue'
import Heading2 from '../atoms/Heading2.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import Image from '../atoms/Image.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const detailLokasi = ref(false)
const route = useRoute()
const slug = route.params.slug

onMounted(async () => {
  try {
    const res = await fetch('/DetailLokasi.json')
    const data = await res.json()

    // cari berdasarkan slug
    const found = data.find((item) => item.slug === slug)
    detailLokasi.value = found || null
  } catch (error) {
    console.error('Gagal memuat data Detail Lokasi: ', error)
  }
})
const isLargeScreen = ref(false)

function checkScreenSize() {
  isLargeScreen.value = window.innerWidth >= 1024 // ukuran tailwind `lg`
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
