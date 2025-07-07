<template>
  <div class="bg-[#164975]/90 w-full px-4 py-6 lg:py-16 relative">
    <!-- Judul -->
    <div class="flex justify-center mb-12">
      <div class="bg-[#164975] rounded-full text-center px-6 md:px-20 lg:py-4 absolute top-[-35px]">
        <Heading1>Senyum yang Sehat Berawal dari Sini</Heading1>
      </div>
    </div>

    <!-- Grid 3 kolom tetap, ukuran item menyesuaikan -->
    <div class="grid grid-cols-3 gap-2 w-full max-w-[1100px] mx-auto">
      <div
        v-for="(item, index) in galeriItems"
        :key="index"
        class="bg-white rounded-lg lg:rounded-[30px] overflow-hidden relative"
      >
        <Image
          :src="item.src"
          class="w-full aspect-[4/3] object-cover"
        />
        <TeksBlueBold class="absolute bottom-0 w-full bg-white text-center lg:py-2 font-bold text-xs sm:text-sm">
          {{ item.label }}
        </TeksBlueBold>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image from '../atoms/Image.vue'
import Heading1 from '../atoms/Heading1.vue'
import TeksBlueBold from '../atoms/TeksBlueBold.vue'

const galeriItems = [
  { src: '/src/assets/images/galeri11.png', label: 'Teknologi Canggih' },
  { src: '/src/assets/images/galeri22.png', label: 'Perawatan Scalling Gigi' },
  { src: '/src/assets/images/galeri33.png', label: 'Terapi Pijat Rahang Sesudah Perawatan' },
  { src: '/src/assets/images/galeri44.png', label: 'Penambalan Gigi' },
  { src: '/src/assets/images/galeri55.png', label: 'Perawatan Estetik & Fungsionalitas' },
  { src: '/src/assets/images/galeri66.png', label: 'Pemeriksaan Gigi' },
]
</script>
