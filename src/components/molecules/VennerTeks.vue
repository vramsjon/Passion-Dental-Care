<template>
  <div class="flex flex-col justify-end w-[330px] items-end mr-40 mt-20 space-y-8">
    <div class="flex flex-col justify-end items-end">
      <Paragraph1>Pelayanan</Paragraph1>
      <Heading1>Venner Gigi</Heading1>
    </div>

    <Paragraph3 class="text-end"
      >NikNikmati CICILAN 0% s/d 12 BULAN dengan menggunakan Kartu Kredit BCA! *harga mulai
      dari</Paragraph3
    >
    <div class="flex gap-8">
      <div>
        <div class="flex">
          <Heading2>Rp 600.000</Heading2>
          <Paragraph1>/ Gigi</Paragraph1>
        </div>
        <Paragraph3>Venner Komposit*</Paragraph3>
      </div>
      <Image class="w-[75px]" src="/images/wallet.png" />
    </div>
  </div>
</template>
<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Paragraph3 from '../atoms/Paragraph3.vue'
import Heading2 from '../atoms/Heading2.vue'
import Image from '../atoms/Image.vue'
</script>
