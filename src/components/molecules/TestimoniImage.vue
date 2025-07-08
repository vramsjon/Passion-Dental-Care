<template>
  <div class="flex flex-col justify-center items-center space-y-10  lg:pl-25">
    <!-- Gambar 1 -->
    <div class="w-[80%] lg:flex lg:justify-center lg:items-center">
      <Image
        v-if="isLargeScreen"
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi1.png"
        link="https://www.youtube.com/shorts/PkXM-9HEJAw"
      />
      <Image
        v-else
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi11.png"
        link="https://www.youtube.com/shorts/PkXM-9HEJAw"
      />
    </div>

    <!-- Gambar 2 -->
    <div class="w-[80%] rounded-3xl">
      <Image
        v-if="isLargeScreen"
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi2.png"
        link="https://www.youtube.com/shorts/CoW0nPICLKg"
      />
      <Image
        v-else
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi22.png"
        link="https://www.youtube.com/shorts/CoW0nPICLKg"
      />
    </div>

    <!-- Gambar 3 -->
    <div class="w-[80%]">
      <Image
        v-if="isLargeScreen"
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi3.png"
        link="https://www.youtube.com/shorts/xLKp6Un6-Tc"
      />
      <Image
        v-else
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi33.png"
        link="https://www.youtube.com/shorts/xLKp6Un6-Tc"
      />
    </div>

    <!-- Gambar 4 -->
    <div class="w-[80%]">
      <Image
        v-if="isLargeScreen"
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi4.png"
        link="https://www.youtube.com/shorts/bzVViPHDg3U"
      />
      <Image
        v-else
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi44.png"
        link="https://www.youtube.com/shorts/bzVViPHDg3U"
      />
    </div>

    <!-- Gambar 5 -->
    <div class="w-[80%]">
      <Image
        v-if="isLargeScreen"
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi5.png"
        link="https://www.youtube.com/shorts/4FnJlzNtFb8"
      />
      <Image
        v-else
        class="w-full h-auto object-contain rounded-3xl"
        src="/src/assets/images/testi55.png"
        link="https://www.youtube.com/shorts/4FnJlzNtFb8"
      />
    </div>

    <div>
      <div
        v-if="isLargeScreen"
        class="bg-[url('/src/assets/images/Background.png')] w-full min-h-[340px] bg-center bg-no-repeat bg-cover bg- object-contain lg:w-[1066px] lg:h-[540px] rounded-4xl flex lg:mt-40 relative"
      >
        <div
          class="rounded-4xl bg-[#092A62] h-[210px] lg:w-[865px] lg:h-[389px] lg:left-[200px] lg:top-[80px] lg:relative z-3"
        >
          <Image
            class="lg:w-[546px] lg:h-[708px] lg:absolute lg:left-[-250px] lg:top-[-248px]"
            src="/src/assets/images/Talent2.png"
          />
          <Image
            class="lg:w-[605px] lg:absolute lg:left-[200px] lg:top-[80px]"
            src="/src/assets/images/coment.png"
          />
        </div>
      </div>

      <div v-else class="relative">
        <div class="p-6">
          <div
            class="bg-[url('/src/assets/images/Background.png')] w-full min-h-[340px] bg-center bg-no-repeat bg-cover object-contain rounded-4xl flex flex-col items-center justify-center relative"
          >
            <Image
              class="w-[306px] h-auto absolute top-[-100px] left-[20px]"
              src="/src/assets/images/Talent2.png"
            />
          </div>
        </div>
        <div class="bg-[#092A62] h-[210px] w-[100%] flex items-center mt-[-200px] p-6 z-60 relative">
          <Image class="w-full h-auto" src="/src/assets/images/coment.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Image from '../atoms/Image.vue'

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
