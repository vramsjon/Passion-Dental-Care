<template>
  <div>
    <div
      v-if="isLargeScreen"
      class="bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat w-full min-h-[240px] md:min-h-[600px] lg:w-[1066px] lg:h-[650px] lg:mx-auto relative lg:overflow-visible lg:mt-[300px] flex px-5 gap-y-3 mt-10 rounded-2xl"
    >
      <VisiTeks class="absolute top-[60px] left-[-20px]" />

      <Image
        class="absolute left-34 top-[-35px] lg:left-[500px] lg:top-[-200px] lg:h-[831px] h-[275px] w-auto"
        src="/images/Talent2.png"
      />
    </div>
    <div v-else class="px-12 flex justify-center items-center flex-col relative">
      <div
        class="bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat h-[320px] w-[250px] lg:overflow-visible flex gap-y-3 mt-10 rounded-2xl"
      ></div>
       <VisiTeks class="absolute bottom-7" />
       <Image class="absolute right-[-6px] bottom-0 scale-x-[-1] w-[200px]" src="/images/Talent2.png" />
    </div>
  </div>
</template>
<script setup>
import VisiTeks from '../molecules/VisiTeks.vue'
import Image from '../atoms/Image.vue'

import { ref, onMounted, onUnmounted } from 'vue'

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
</script>
