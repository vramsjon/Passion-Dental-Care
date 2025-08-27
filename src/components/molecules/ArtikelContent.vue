<template>
  <div class="w-full max-w-[500px] mx-auto px-4">
    <div
      v-for="index in 6"
      :key="index"
      :class="[
        'flex gap-6 items-center justify-center border-b-2 border-gray-400 py-6 flex-col sm:flex-row',
        index % 2 === 0 ? 'sm:flex-row-reverse' : '',
      ]"
    >
      <Image
        class="w-full sm:w-[339px] h-auto object-cover"
        src="/images/artikelimage_img_url.png"
      />
      <div class="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
        <Image
          class="w-[153px] h-auto"
          src="/images/artikellabel_img_url.png"
        />
        <h1 class="text-blue-800 text-lg sm:text-2xl leading-snug">
          5 Alasan Mengapa Kamu Harus Tambal Gigi Berlubang di Passion Dental Care!
        </h1>
        <Image
          class="w-[226px] h-auto"
          src="/images/artikelwriter_img_url.png"
        />
      </div>
    </div>

    <!-- Navigasi -->
    <div class="flex justify-between items-center mt-8">
      <!-- Newer Post -->
      <div class="flex items-center gap-2 cursor-pointer">
        <div
          class="bg-blue-800 rounded-full text-white w-8 h-8 flex items-center justify-center text-lg"
        >
          &lt;
        </div>
        <p class="text-gray-800 font-medium">Newer Post</p>
      </div>

      <!-- Older Post -->
      <div class="flex items-center gap-2 cursor-pointer">
        <p class="text-gray-800 font-medium">Older Post</p>
        <div
          class="bg-blue-800 rounded-full text-white w-8 h-8 flex items-center justify-center text-lg"
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
