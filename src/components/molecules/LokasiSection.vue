<template>
  <div v-if="detailLokasi">
    <div
      class="flex flex-col justify-center items-center gap-y-[50px]"
      v-for="(item, index) in detailLokasi.content"
      :key="index"
    >
      <!-- Selalu tampil -->
      <Teks1Blue>{{ item.title }}</Teks1Blue>

      <!-- Tampil hanya untuk item pertama -->
      <div
        v-if="index === 0"
        class="w-[1066px] h-[464px] bg-cover bg-center rounded-2xl flex justify-center"
        style="background-image: url('/images/Background.png')"
      >
        <div class="bg-[#092A62]/90 w-[500px] p-12 space-y-8 rounded-4xl my-4">
          <Heading1>{{ item.name }}</Heading1>
          <Paragraph2>{{ item.address }}</Paragraph2>
          <div class="bg-[#092A62] rounded-2xl px-4 py-2">
            <p class="text-white font-medium">Kontak Kami:</p>
            <Heading2>{{ item.contact }}</Heading2>
          </div>
          <div class="bg-[#092A62]/80 rounded-4xl">
            <a
              :href="`https://api.whatsapp.com/send/?phone=${item.nowa}&text=NIK%20:%0ANama%20lengkap%20:%0AJenis%20kelamin%20:%0ATempat%20%26%20tgl%20lahir%20:%0AAlamat%20:%0APekerjaan%20:%0ANo.%20HP%20:%0AEmail%20:%0AAlergi%20obat%20:%0AMaag%20:%0ARiwayat%20penyakit%20:%0AKeluhan%20:&type=phone_number&app_absent=0`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p class="text-white font-bold text-xl text-center py-4">Hubungi Kami</p>
            </a>
          </div>
        </div>
        <div class="p-12">
          <div class="w-[417px] h-[308px]">
            <iframe
              class="w-full h-full rounded-2xl shadow"
              :src="`https://www.google.com/maps?q=${item.latlon}&hl=es;z=14&output=embed`"
              allowfullscreen
            ></iframe>
            <div class="bg-[#092A62]/80 rounded-4xl mt-4">
              <a :href="item?.gmaps" target="_blank" rel="noopener noreferrer">
                <p class="text-white font-bold text-xl text-center py-4">Lokasi</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Gambar galeri jika index === 1 -->
      <div
        v-if="index === 1"
        class="bg-[#092A62]/90 w-full h-auto p-24 flex justify-center items-center"
      >
        <Image class="w-full" :src="item.imageGaleri" />
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
