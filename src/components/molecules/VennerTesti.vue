<template>
  <div v-if="vennerContent" class="flex flex-col items-center">
    <div class="flex flex-col items-center gap-2 mb-6">
      <Heading1Blue>{{ vennerContent.title }}</Heading1Blue>
      <Teks1Blue class="text-center">{{ vennerContent.description }}</Teks1Blue>
    </div>

    <div>
      <div
        v-if="isLargeScreen"
        class=" w-full min-h-[340px] bg-center bg-no-repeat bg-cover bg- object-contain lg:w-[1066px] lg:h-[540px] rounded-4xl flex lg:mt-40 relative"
        :style="`background-image: url(${vennerContent.background})`"
        >
        <div
          class="rounded-4xl bg-[#092A62] h-[210px] lg:w-[865px] lg:h-[389px] lg:left-[200px] lg:top-[80px] lg:relative z-3"
        >
          <Image
            class="lg:w-[546px] lg:h-[708px] lg:absolute lg:left-[-250px] lg:top-[-248px]"
            :src="vennerContent.talent"
          />
          <Image
            class="lg:w-[605px] lg:absolute lg:left-[200px] lg:top-[80px]"
            :src="vennerContent.image"
          />
        </div>
      </div>

      <div v-else class="relative">
        <div class="p-6">
          <div
            class="w-full min-h-[340px] bg-center bg-no-repeat bg-cover object-contain rounded-4xl flex flex-col items-center justify-center relative"
            :style="`background-image: url(${vennerContent.background})`"
            >
            <Image
              class="w-[306px] h-auto absolute top-[-100px] left-[20px]"
              :src="vennerContent.talent"
            />
          </div>
        </div>
        <div
          class="bg-[#092A62] h-[210px] w-[100%] flex items-center mt-[-200px] p-6 z-48 relative"
        >
          <Image class="w-full h-auto" :src="vennerContent.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Heading1Blue from '../atoms/Heading1Blue.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import Image from '../atoms/Image.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const vennerContent = ref(null)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[3]
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
