<template>
  <div class="lg:w-[577.79px] lg:h-[445.92px] lg:space-y-10 flex lg:items-start justify-center items-center flex-col">
    <div class="flex flex-col lg:items-start items-center justify-center">
      <Teks4>Buat Janji Temu dengan</Teks4>
      <TeksBig>Dokter Gigi</TeksBig>
    </div>

    <Paragraph1 class="lg:text-start text-center w-[75%]">
      Buat janji temu dan kami akan memberikan prioritas kepada pasien yang datang tepat waktu serta
      telah melakukan reservasi terlebih dahulu.
    </Paragraph1>
    <Button class="bg-blue-900 rounded-full py-2 lg:py-4 px-12">
      <Teks2>Jadwal Dokter</Teks2>
    </Button>
    <div class="flex flex-col justify-center items-center lg:mt-6">
      <p class="text-white text-xl italic font-bold">Ikuti untuk informasi lainnya!</p>
      <div class="flex justify-start items-center gap-4">
        <div>
          <Image class="lg:w-[60px] w-[50px]" src="/images/ig.png" />
        </div>
        <div class="lg:gap-5 gap-5 flex">
          <div >
            <Image class="lg:w-[45px] w-[40px]" src="/images/yt.png" />
          </div>
          <div>
            <Image class="lg:w-[45px] w-[40px]" src="/images/tiktok.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TeksBig from '../atoms/TeksBig.vue'
import Teks4 from '../atoms/Teks4.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Button from '../atoms/Button.vue'
import Teks2 from '../atoms/Teks2.vue'
import Image from '../atoms/Image.vue'
</script>
