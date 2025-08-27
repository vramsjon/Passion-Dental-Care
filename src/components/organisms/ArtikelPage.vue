<template>
  <div>
    <div v-if="isLargeScreen">
      <div
        class="bg-[url(/public/images/promobg_img_url.png)] w-full h-[700px] bg-cover bg-center relative"
      >
        <div class="absolute text-end w-[500px] right-40 top-60">
          <Heading1>Artikel</Heading1>
          <Paragraph1>
            Membantu Anda untuk terus up to date dengan informasi dan perkembangan terkait dengan
            kesehatan gigi.
          </Paragraph1>
        </div>
      </div>
      <div class="flex px-40 gap-x-30">
        <ArtikelContent></ArtikelContent>
        <ArtikelRecents></ArtikelRecents>
      </div>
    </div>

    <div v-else class="w-full">
      <div
        class="bg-[url(/public/images/bgmobartikel.png)] min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      >
        <div class="bg-black/50 p-4 rounded-lg">
          <Heading1 class="text-white text-lg">Artikel</Heading1>
          <Paragraph1 class="text-white text-sm">
            Membantu Anda untuk terus up to date dengan informasi dan perkembangan terkait kesehatan
            gigi.
          </Paragraph1>
        </div>
      </div>

      <!-- Konten ditumpuk vertikal -->
      <div class="flex flex-col gap-y-6 p-4">
        <ArtikelContent />
        <ArtikelRecents />
      </div>
    </div>
  </div>
</template>
<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import ArtikelContent from '../molecules/ArtikelContent.vue'
import ArtikelRecents from '../molecules/ArtikelRecents.vue'

import { ref, onMounted, onUnmounted } from 'vue'

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
