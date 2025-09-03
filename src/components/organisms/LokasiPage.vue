<template>
  <div v-if="lokasi">
    <!-- Desktop / Large Screen -->
    <div v-if="isLargeScreen">
      <div
        v-if="isLargeScreen"
        class="w-full h-[350px] bg-[url('./../../images/Background.png')] sm:left-20 bg-cover bg-center"
      >
        <div class="flex flex-col items-center justify-center pt-30">
          <Teks1>{{ lokasi.text }}</Teks1>
          <Heading1>{{ lokasi.title }}</Heading1>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center my-10 space-y-10">
        <div v-for="(item, index) in lokasi.content" :key="index">
          <div
            class="w-[1066px] h-[464px] bg-cover bg-center rounded-2xl"
            :style="`background-image: url(${item.background})`"
          >
            <div class="p-4">
              <div :class="['flex gap-x-2', index % 2 !== 0 ? 'flex-row-reverse' : '']">
                <!-- Info Klinik -->
                <div class="bg-[#092A62]/70 rounded-2xl w-[346px] h-[405px] p-10 space-y-4">
                  <Heading1>{{ item.title }}</Heading1>
                  <Paragraph2>{{ item.address }}</Paragraph2>
                  <RouterLink :to="`/lokasi-klinik/${item.slug}`">
                    <div class="rounded-4xl py-4 bg-[#092A62]">
                      <Paragraph1 class="text-center">Hubungi Kami</Paragraph1>
                    </div>
                  </RouterLink>
                </div>

                <!-- Jadwal -->
                <div class="bg-[#092A62]/70 rounded-2xl w-[250px] h-[405px] p-8 space-y-4">
                  <div
                    class="flex justify-between"
                    v-for="(itemText, idx) in item.schedule"
                    :key="idx"
                  >
                    <Paragraph2>{{ itemText.day }}</Paragraph2>
                    <Paragraph2>{{ itemText.time }}</Paragraph2>
                  </div>
                </div>

                <!-- Gambar -->
                <div>
                  <Image class="w-[410px] h-[402px]" :src="item.image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile / Small Screen -->
    <div v-else>
      <div
        class="w-full h-[400px] bg-cover bg-center rounded-xl"
        :style="`background-image: url(${lokasi.backgroundMobile})`"
      >
        <div class="flex flex-col items-center justify-center h-full px-4 text-center">
          <Teks1>{{ lokasi.text }}</Teks1>
          <Heading1>{{ lokasi.title }}</Heading1>
        </div>
      </div>

      <div class="flex flex-col space-y-8 mt-10 px-4">
        <div
          v-for="(item, index) in lokasi.content"
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div
            class="w-screen h-[580px] bg-cover bg-center rounded-xl"
            :style="`background-image: url(${item.background})`"
          >
            <div class="pl-[6px] py-[10px]">
              <div>
                <div class="flex gap-x-2">
                  <div
                    class="bg-[#092A62] text-white p-4 space-y-2 rounded-2xl w-[170px] h-[260px]"
                  >
                    <Heading1>{{ item.title }}</Heading1>
                    <Paragraph2>{{ item.address }}</Paragraph2>
                    <RouterLink :to="`/lokasi-klinik/${item.slug}`">
                      <div class="rounded-lg py-2 bg-[#0A3B8A]">
                        <Paragraph1 class="text-center">Hubungi Kami</Paragraph1>
                      </div>
                    </RouterLink>
                  </div>

                  <div class="space-y-1 bg-[#092A62] text-white rounded-2xl p-2">
                    <div
                      class="flex justify-between"
                      v-for="(itemText, idx) in item.schedule"
                      :key="idx"
                    >
                      <Paragraph2>{{ itemText.day }}</Paragraph2>
                      <Paragraph2>{{ itemText.time }}</Paragraph2>
                    </div>
                  </div>
                </div>
              </div>
              <Image class="w-[320px] h-[250px] object-content mt-12" :src="item.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Heading1 from '../atoms/Heading1.vue'
import Teks1 from '../atoms/Teks1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Paragraph2 from '../atoms/Paragraph2.vue'
import Image from '../atoms/Image.vue'

const lokasi = ref(false)
const isLargeScreen = ref(window.innerWidth >= 1024) // default cek ukuran

function handleResize() {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(async () => {
  window.addEventListener('resize', handleResize)

  try {
    const res = await fetch('/LokasiPage.json')
    const data = await res.json()
    lokasi.value = data
  } catch (err) {
    console.error('Gagal memuat data:', err)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
