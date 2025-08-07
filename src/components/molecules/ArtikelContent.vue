<template>
  <div class="w-[500px]">
    <div
      v-for="index in 6"
      :key="index"
      :class="[
        'flex gap-x-8 items-center justify-center border-b-2 border-gray-400 w-[500px] h-[500px]',
        index % 2 === 0 ? 'flex-row-reverse' : '',
      ]"
    >
      <Image class="w-[339px] h-[223px]" src="/images/artikelimage_img_url.png" />
      <div class="">
        <Image class="w-[153px] h-[40px]" src="/images/artikellabel_img_url.png" />
        <h1 class="text-blue-800 text-2xl">
          5 Alasan Mengapa Kamu Harus Tambal Gigi Berlubang di Passion Dental Care!
        </h1>
        <Image class="w-[226px]" src="/images/artikelwriter_img_url.png" />
      </div>
    </div>
    <div class="flex justify-between items-center mt-8">
      <!-- Newer Post -->
      <div class="flex items-center gap-x-2">
        <div
          class="bg-blue-800 rounded-full text-white w-8 h-8 flex items-center justify-center text-2xl"
        >
          &lt;
        </div>
        <p class="text-gray-800 font-medium">Newer Post</p>
      </div>

      <!-- Older Post -->
      <div class="flex items-center gap-x-2">
        <p class="text-gray-800 font-medium">Older Post</p>
        <div
          class="bg-blue-800 rounded-full text-white w-8 h-8 flex items-center justify-center text-2xl"
        >
          &gt;
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
</script>
