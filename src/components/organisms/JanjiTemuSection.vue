<template>
  <div class="flex mt-20 lg:mt-52 w-full">
    <div class="w-screen">
      <div
        v-if="isLargeScreen"
        class="w-full h-[730px] bg-[url('/src/assets/images/talentbg.png')] sm:left-20 bg-contain bg-no-repeat bg-center flex lg:items-end justify-center flex-col"
      >
        <JanjiTemuTeks />
      </div>

      <div
        v-else
        class=" w-[100%] h-[500px] relative bg-[url('/src/assets/images/bgresponsif.png')] bg-cover bg-no-repeat bg-center flex justify-center flex-col py-10  lg:items-end"
      >
        <Image class="w-[90%] mx-auto z-10" src="/src/assets/images/talentresponsif.png" />
        <JanjiTemuTeks class="absolute z-20 top-[250px]"></JanjiTemuTeks>
      </div>
    </div>
  </div>
</template>

<script setup>
import JanjiTemuTeks from '../molecules/JanjiTemuTeks.vue'
import Image from '../atoms/Image.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
