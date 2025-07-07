<template>
  <div class="bg-[#3A5481]/90 rounded-[2rem] w-[250px] lg:w-full max-w-[572px] p-2 lg:p-6 md:p-8 space-y-2 lg:space-y-6">
    <div>
      <Heading1>Passion Kids</Heading1>
      <p class="text-white text-lg lg:text-2xl">Perawatan Gigi untuk si Kecil</p>
    </div>

    <Paragraph1>
      Hai Moms, untuk mencegah karies atau gigi berlubang pada anak balita, sangat penting untuk
      melakukan cek dini sejak anak berusia 1 tahun. Yuk Konsultasi sekarang di klinik Gigi Bandung
      terdekat!
    </Paragraph1>

    <Button class="bg-white py-2 lg:py-4 md:py-5 px-8 md:px-10">
      <TeksBlueBold>Mulai Konsultasi ></TeksBlueBold>
    </Button>
  </div>
</template>

<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Button from '../atoms/Button.vue'
import TeksBlueBold from '../atoms/TeksBlueBold.vue'
</script>
