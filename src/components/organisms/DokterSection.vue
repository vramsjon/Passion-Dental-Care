<template>
  <div class="flex justify-center items-center flex-col">
     <Heading1Blue>{{ title }}</Heading1Blue>
    <Teks1Blue class="text-center">
       {{ description }}
    </Teks1Blue>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40 flex-wrap">
    <div v-for="(dokterItem, index) in timDokter" :key="index" class="m-4 mb-40">
      <!-- Urutan ganjil: gambar kiri, teks kanan -->
      <div v-if="index % 2 === 0">
        <div v-if="isLargeScreen">
          <TimDokterCard class="relative">
            <Image class="w-[622px] absolute left-[-150px] top-[-90px]" :src="dokterItem.image" />
            <div class="absolute right-0 top-[60px]">
              <div class="flex flex-col w-[494px] space-y-4">
                <div class="flex">
                  <p class="text-5xl text-white"></p>
                  <Heading1>{{ dokterItem.name }}</Heading1>
                </div>
                <Paragraph3 class="pr-4">
                  {{ dokterItem.description }}
                </Paragraph3>
              </div>
            </div>
            <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
              <Teks2>Jadwal Dokter</Teks2>
            </Button>
          </TimDokterCard>
        </div>
        <div v-else class="flex justify-center items-center mt-40">
          <TimDokterCard class="relative">
            <Image class="absolute top-[-125px]" :src="dokterItem.image" />
            <div class="absolute top-[160px]">
              <div class="flex flex-col space-y-4">
                <div class="flex justify-center">
                  <p class="text-2xl text-white"></p>
                  <Heading1>{{ dokterItem.name }}</Heading1>
                </div>
                <Paragraph3 class="px-4 text-center">
                  {{ dokterItem.description }}
                </Paragraph3>
              </div>
            </div>
            <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
              <Teks2>Jadwal Dokter</Teks2>
            </Button>
          </TimDokterCard>
        </div>
      </div>

      <!-- Urutan genap: gambar kanan, teks kiri -->
      <div v-else>
        <div v-if="isLargeScreen">
          <TimDokterCard class="relative">
            <Image class="w-[622px] absolute right-[-150px] top-[-90px]" :src="dokterItem.image" />
            <div class="absolute left-0 top-[60px]">
              <div class="flex flex-col w-[494px] space-y-4">
                <div class="flex">
                  <p class="text-5xl text-white"></p>
                  <Heading1>{{ dokterItem.name }}</Heading1>
                </div>
                <Paragraph3 class="pr-4">
                  {{ dokterItem.description }}
                </Paragraph3>
              </div>
            </div>
            <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
              <Teks2>Jadwal Dokter</Teks2>
            </Button>
          </TimDokterCard>
        </div>
        <div v-else class="flex justify-center items-center mt-40">
          <TimDokterCard class="relative">
            <Image class="absolute top-[-125px]" :src="dokterItem.image" />
            <div class="absolute top-[160px]">
              <div class="flex flex-col space-y-4">
                <div class="flex justify-center">
                  <p class="text-2xl text-white"></p>
                  <Heading1>{{ dokterItem.name }}</Heading1>
                </div>
                <Paragraph3 class="px-4 text-center">
                  {{ dokterItem.description }}
                </Paragraph3>
              </div>
            </div>
            <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
              <Teks2>Jadwal Dokter</Teks2>
            </Button>
          </TimDokterCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Heading1Blue from '../atoms/Heading1Blue.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import TimDokterCard from '../molecules/TimDokterCard.vue'
import Image from '../atoms/Image.vue'
import Heading1 from '../atoms/Heading1.vue'
import Paragraph3 from '../atoms/Paragraph3.vue'
import Button from '../atoms/Button.vue'
import Teks2 from '../atoms/Teks2.vue'
import { ref, onMounted, onUnmounted } from 'vue'


import TimDokterService from '../../services/TimDokterService'


const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


// Konten dari JSON
const title = ref('')
const description = ref('')
const timDokter = ref([])

onMounted(async () => {
  const res = await fetch('/TimDokter.json')
  const data = await res.json()

  title.value = data.title
  description.value = data.description
  timDokter.value = data.timDokter
})

//implementasi API
// onMounted(async () => {
//   try {
//     const data = await TimDokterService.getTimDokter()
//     title.value = response.data.title
//     description.value = response.data.description
//     timDokter.value = response.data.timDokter
//   } catch (error) {
//     console.error('Error fetching Tim Dokter:', error)
//   }
// })  
</script>
