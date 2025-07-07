<template>
  <div class="bg-[#092A62]/80 rounded-4xl lg:px-30 lg:w-[576px] lg:h-[721px] flex flex-col justify-center px-20 py-4">
    <div class="flex">
      <Heading1>Jadwal</Heading1>
      <Image class="max-w-10 lg:max-w-15 w-full h-auto " src="/src/assets/images/star.png" />
    </div>
    <Heading1>Operasional</Heading1>
    <div class="lg:space-y-6 lg:mt-10 lg:max-w-[300px]">
        <div class="flex justify-between">
            <Paragraph1>Minggu</Paragraph1><Paragraph1>08.00-21.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Senin</Paragraph1><Paragraph1>08.00-21.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Selasa</Paragraph1><Paragraph1>08.00-21.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Rabu</Paragraph1><Paragraph1>08.00-21.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Kamis</Paragraph1><Paragraph1>08.00-17.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Jumat</Paragraph1><Paragraph1>08.00-21.00</Paragraph1>
        </div>
        <div class="flex justify-between">
            <Paragraph1>Sabtu</Paragraph1><Paragraph1>Libur</Paragraph1>
        </div>
        
    </div>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue';
</script>
