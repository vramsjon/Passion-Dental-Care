<template>
  <ContainerBlue c>
    <div class="bg-white rounded-3xl w-[1,392px] h-[976px] p-6 flex gap-12">
      <div>
        <Image class="w-[480px] h-[912px] grayscale" src="/images/imagesurvey.png" />
      </div>
      <div class="space-y-12">
        <div class="flex w-[700px] justify-between">
          <div class="flex gap-2">
            <div class="bg-[#1FAAA5] rounded-lg w-[48px] h-[12px] p-2"></div>
            <div class="bg-[#1FAAA5] rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-[#1FAAA5] rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-[#1FAAA5] rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-[#1FAAA5] rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-[#1FAAA5] rounded-xl w-[48px] h-[12px] p-2"></div>
          </div>
          <div>
            <Image class="w-[40px] h-[40px]" src="/images/logo.png" />
          </div>
        </div>
        <div class="space-y-4">
          <Teks1Blue>Masukan Anda Sangat Berharga</Teks1Blue>
          <TeksGray
            >Terima kasih banyak atas waktu dan masukan berharga yang Anda berikan melalui survei
            ini. Setiap tanggapan Anda adalah motivasi bagi kami di Passion Dental Care untuk terus
            memberikan pelayanan terbaik.</TeksGray
          >
          <TeksGray>Ikuti Kami di:</TeksGray>
          <div class="flex gap-4">
            <Image class="w-[56px] h-[56px]" src="/images/youtube2.png" />
            <Image class="w-[56px] h-[56px]" src="/images/Instagram3.png" />
            <Image class="w-[56px] h-[56px]" src="/images/tiktok1.png" />
            <div class="bg-gray-200 rounded-4xl w-[200px] py-4 px-4">
                <p class="text-blue-900 text-center font-medium text-nowrap">Kunjungi Website Kami</p>
            </div>
          </div>
          <TeksGray>Kami nantikan kunjungan Anda berikutnya!</TeksGray>
        </div>
      </div>
    </div>
  </ContainerBlue>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import FontSurvey from '../atoms/FontSurvey.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import ContainerBlue from '../atoms/ContainerBlue.vue'
import TeksGray from '../atoms/TeksGray.vue'
import Button from '../atoms/Button.vue'
</script>
