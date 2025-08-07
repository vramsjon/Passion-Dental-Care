<template>
  <div>
    <div class="bg-[url(/public/images/promobg_img_url.png)] w-full h-[700px] bg-cover bg-center relative">
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
</template>
<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import ArtikelContent from '../molecules/ArtikelContent.vue';
import ArtikelRecents from '../molecules/ArtikelRecents.vue';
</script>
