<template>
  <ContainerBlue>
    
    <div class="bg-white rounded-3xl p-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start mt-12">
      <div>
      <!-- Progress Bar -->
        <div class="flex justify-between items-center w-full max-w-lg mx-auto lg:mx-0">
          <div class="flex gap-2">
            <div v-for="n in 6" :key="n" 
                 class="bg-[#1FAAA5] rounded-lg max-h-3 max-w-12">
            </div>
          </div>
          <Image class="w-10 h-10" src="/images/logo.png" />
        </div>
    </div>
      
      <!-- Gambar Kiri -->
      <div class="flex-shrink-0 w-full lg:w-[480px]">
        <Image 
          class="w-full h-auto max-h-[500px] object-cover grayscale rounded-2xl" 
          src="/images/imagesurvey.png" 
        />
      </div>

      <!-- Konten Kanan -->
      <div class="flex-1 space-y-8 text-center lg:text-left">
        
        

        <!-- Teks -->
        <div class="space-y-4">
          <Teks1Blue>Masukan Anda Sangat Berharga</Teks1Blue>
          <TeksGray>
            Terima kasih banyak atas waktu dan masukan berharga yang Anda berikan melalui survei ini.
            Setiap tanggapan Anda adalah motivasi bagi kami di Passion Dental Care untuk terus memberikan pelayanan terbaik.
          </TeksGray>

          <TeksGray>Ikuti Kami di:</TeksGray>

          <!-- Sosmed -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <Image class="w-14 h-14" src="/images/youtube2.png" />
            <Image class="w-14 h-14" src="/images/Instagram3.png" />
            <Image class="w-14 h-14" src="/images/tiktok1.png" />
            <div class="bg-gray-200 rounded-4xl px-4 py-3">
              <p class="text-blue-900 text-center font-medium whitespace-nowrap">
                Kunjungi Website Kami
              </p>
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
import Teks1Blue from '../atoms/Teks1Blue.vue'
import ContainerBlue from '../atoms/ContainerBlue.vue'
import TeksGray from '../atoms/TeksGray.vue'
</script>
