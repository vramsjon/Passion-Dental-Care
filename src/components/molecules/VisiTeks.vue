<template>
  <div class="bg-[#092A62]/80 rounded-3xl pl-4 py-4 lg:p-8 lg:pl-6 lg:pr-50 w-[320px] lg:w-[930px] lg:space-y-5 space-y-2">
    <heading1>Visi</heading1>
    <Heading2>A Perfect Smile</Heading2>
    <paragraph1 class="text-justify w-[180px] lg:w-[550px]">
      Menjadi klinik gigi & mulut unggulan keluarga Indonesia yang terkini dan mudah diakses
      (dijangkau) demi mewujudkan masyarakat Indonesia yang sadar akan kesehatan gigi dan mulut,
      Sehingga dapat meningkatkan kualitas diri dan kehidupan masyarakat yang lebih baik.
    </paragraph1>

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
</template>

<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Heading2 from '../atoms/Heading2.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Teks5 from '../atoms/Teks5.vue'
</script>
