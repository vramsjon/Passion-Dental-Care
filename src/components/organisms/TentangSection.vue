<template>
  <div>
    <div v-if="isLargeScreen" class="flex justify-center items-center w-full">
      <div
        class="relative bg-[url('/images/Background.png')] bg-cover bg-center w-[1062px] h-[1127px] rounded-[70px]"
      >
        <Image
          class="absolute w-[497px] h-[1127px] right-0 bottom-1"
          src="/images/talenttentang1.png"
        />
        <TentangKamiParagraf class="absolute top-40 left-[-45px]"></TentangKamiParagraf>
      </div>
    </div>
    <div v-else>
        <TentangKamiParagraf></TentangKamiParagraf>
    </div>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import TentangKamiParagraf from '../molecules/TentangKamiParagraf.vue'
import { ref, onMounted, onUnmounted } from 'vue'

//cek ukuran layar
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
