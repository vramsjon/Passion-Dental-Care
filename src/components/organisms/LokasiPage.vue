<template>
  <div v-if="lokasi">
    <div
      class="w-full h-[700px] sm:left-20 bg-cover bg-center"
      :style="`background-image: url(${lokasi.backgroundDekstop})`"
    >
      <div class="flex flex-col items-center justify-center pt-80">
        <Teks1>{{ lokasi.text }}</Teks1>
        <Heading1>{{ lokasi.title }}</Heading1>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-40 space-y-20">
      <div v-for="(item, index) in lokasi.content" :key="index">
        <div
          class="w-[1066px] h-[464px] sm:left-20 bg-cover bg-center"
          :style="`background-image: url(${item.background})`"
        >
          <div class="p-4">
            <div :class="['flex gap-x-2', index % 2 !== 0 ? 'flex-row-reverse' : '']">
              <div class="bg-[#092A62]/70 rounded-2xl w-[346px] h-[405px] p-10 space-y-4">
                <Heading1>{{ item.title }}</Heading1>
                <Paragraph2>{{ item.address }}</Paragraph2>
                <RouterLink :to="`/lokasi-klinik/${item.slug}`">
                  <div class="rounded-4xl py-4 bg-[#092A62]">
                    <Paragraph1 class="text-center">Hubungi Kami</Paragraph1>
                  </div>
                </RouterLink>
              </div>
              <div class="bg-[#092A62]/70 rounded-2xl w-[250px] h-[405px] p-8 space-y-4">
                <div
                  class="flex justify-between"
                  v-for="(itemText, index) in item.schedule"
                  :key="index"
                >
                  <Paragraph2>{{ itemText.day }}</Paragraph2>
                  <Paragraph2>{{ itemText.time }}</Paragraph2>
                </div>
              </div>
              <div>
                <Image class="w-[410px] h-[402px]" :src="item.image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Heading1 from '../atoms/Heading1.vue'
import Teks1 from '../atoms/Teks1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Paragraph2 from '../atoms/Paragraph2.vue'
import Image from '../atoms/Image.vue'

const lokasi = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('/LokasiPage.json')
    const data = await res.json()
    lokasi.value = data
  } catch (err) {
    console.error('Gagal memuat data:', err)
  }
})
</script>
