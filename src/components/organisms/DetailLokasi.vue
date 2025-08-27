<template>
  <div v-if="detailLokasi">
    <div>
      <div
        class="w-full h-[700px] bg-cover bg-center relative"
        :style="`background-image: url(${detailLokasi.backgroundDekstop})`"
      >
        <div class="absolute w-[500px] right-40 top-60">
          <Paragraph1 class="text-end">{{ detailLokasi.text }}</Paragraph1>
          <Heading1 class="text-end">{{ detailLokasi.title }}</Heading1>
        </div>
    
      </div>
      <div class="w-full">
          <LokasiSection></LokasiSection>
        </div>
    </div>
  </div>
  <div v-else>
    <p>Data tidak ditemukan.</p>
  </div>
</template>

<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'

import LokasiSection from '../molecules/LokasiSection.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const detailLokasi = ref(null)
const route = useRoute()
const slug = route.params.slug

onMounted(async () => {
  try {
    const res = await fetch('/DetailLokasi.json')
    const data = await res.json()

    // cari berdasarkan slug
    const found = data.find(item => item.slug === slug)
    detailLokasi.value = found || null
  } catch (error) {
    console.error('Gagal memuat data Detail Lokasi: ', error)
  }
})
</script>
