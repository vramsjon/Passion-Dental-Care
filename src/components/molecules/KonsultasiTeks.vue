<template>
  <div
    class="bg-[#092A62]/80 rounded-3xl p-3 md:px-12 lg:py-7 
           lg:w-full w-[200px] max-w-[572px] mx-auto"
  >
    <div class="w-full max-w-[494px] lg:space-y-4">
      <Paragraph1>
        Sampaikan Masalah gigi mu
      </Paragraph1>

      <Heading2 class="w-full">
        Nikmati Sesi Konsultasi
      </Heading2>

      <TeksBig>
        GRATIS!
      </TeksBig>

      <Paragraph1>
        Dengan dokter gigi profesional, Passion Dental Care sebagai Klinik Gigi Bandung terpercaya siap
        memnberikan solusi dan kepuasan dengan konsultasi gratis untuk setiap pasien
      </Paragraph1>

      <div class="flex flex-col lg:flex-row lg:gap-10">
        <div class="flex flex-row lg:flex-col items-start gap-5 lg:gap-[2px]">
          <Heading2>99,9%</Heading2>
          <Teks5 class="w-[6.5rem]">Pasien Puas</Teks5>
        </div>
        <div class="flex flex-row lg:flex-col items-start gap-3 lg:gap-[2px]">
          <Heading2>1.000+</Heading2>
          <Teks5>Pasien/Bulan</Teks5>
        </div>
        <div class="flex flex-row lg:flex-col items-start gap-10 lg:gap-[2px]">
          <Heading2>13h</Heading2>
          <Teks5 class="lg:w-[200px]">Jam Pelayanan</Teks5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Paragraph1 from '../atoms/Paragraph1.vue';
import Teks5 from '../atoms/Teks5.vue';
import TeksBig from '../atoms/TeksBig.vue';
import Heading2 from '../atoms/Heading2.vue';

</script>