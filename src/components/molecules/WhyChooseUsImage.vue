<template>
  <div
    class="max-w-screen-lg grid grid-cols-3 gap-x-[60px] gap-y-[20px] lg:flex lg:flex-wrap lg:gap-6 lg:max-w-[1200px] lg:justify-center"
  >
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/tempat.png"
        alt="Tempat Nyaman"
      />
      <Teks2>Tempat Nyaman</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/profesional.png"
        alt="Profesional"
      />
      <Teks2>Profesional</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/teknologi.png"
        alt="Teknologi Terkini"
      />
      <Teks2>Teknologi Terkini</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/hasil.png"
        alt="Hasil Maksimal"
      />
      <Teks2>Hasil Maksimal</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/hidden.png"
        alt="No Hidden Price"
      />
      <Teks2>No Hidden Price</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/garansi.png"
        alt="Garansi Perawatan"
      />
      <Teks2>Garansi Perawatan</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/pengalaman.png"
        alt="Pengalaman Berkesan"
      />
      <Teks2>Pengalaman Berkesan</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/pembayaran.png"
        alt="Kemudahan Pembayaran"
      />
      <Teks2>Kemudahan Pembayaran</Teks2>
    </div>
    <div class="flex flex-col items-center text-center w-full lg:basis-[calc(20%-24px)]">
      <Image
        class="max-w-[100px] max-h-[100px] w-full h-full object-contain"
        src="/src/assets/images/wifi.png"
        alt="Free Wifi"
      />
      <Teks2>Free Wifi</Teks2>
    </div>
  </div>
</template>

<script setup>
import Image from '../atoms/Image.vue'
import Teks2 from '../atoms/Teks2.vue'
</script>
