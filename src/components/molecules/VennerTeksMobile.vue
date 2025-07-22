<template>
  <div v-if="layanan" class="mt-40 flex flex-col items-center gap-90">
    <div>
      <Paragraph1 class="text-center">{{ layanan.service }}</Paragraph1>
      <Heading1>{{ layanan.title }}</Heading1>
    </div>
    <div class="bg-[#092A62]/80 rounded-xl w-[250px] p-4 justify-end items-end">
      <Paragraph1 class="text-end">
          {{ layanan.description }}
        </Paragraph1>
      <div v-if="VennerGigi">
        <div class="flex justify-end items-end gap-6">
          <div>
            <Heading2>{{ layanan.price }}</Heading2>
            <Paragraph1 class="text-end">{{ layanan.type }}</Paragraph1>
          </div>
          <Image class="w-8" :src="layanan.icon" />
        </div>
      </div>
      <div v-else-if="BehelGigi" class="flex flex-col items-end">
        <div class="flex gap-4">
          <div class="">
            <Heading2 class="text-nowrap">{{ layanan.pricePasangBehel }}</Heading2>
            <Paragraph3 class="text-end">{{ layanan.type1 }}</Paragraph3>
          </div>
          <Image class="w-[45px] h-[45px]" :src="layanan.icon" />
        </div>
        <div class="flex gap-4">
          <div>
            <Heading2>{{ layanan.priceKontrolGigi }}</Heading2>
            <Paragraph3 class="text-end">{{ layanan.type2 }}</Paragraph3>
          </div>
          <Image class="w-[45px] h-[45px]" :src="layanan.icon" />
        </div>
        <Paragraph3>{{ layanan.text }}</Paragraph3>
      </div>
      <div v-else-if="GigiTiruan" class="flex gap-2">
        <div class="">
          <div class="flex gap-2 text-nowrap">
            <Heading2>{{ layanan.priceGigiPertama }}</Heading2>
            <Paragraph3>{{ layanan.type1 }}</Paragraph3>
          </div>
          <div class="flex gap-2 text-nowrap">
            <Heading2>{{ layanan.priceGigiBerikut }}</Heading2>
            <Paragraph3>{{ layanan.type2 }}</Paragraph3>
          </div>
        </div>
        <Image class="w-[45px] h-[45px]" :src="layanan.icon" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Heading1 from '../atoms/Heading1.vue'
import Paragraph1 from '../atoms/Paragraph1.vue'
import Image from '../atoms/Image.vue'
import Heading2 from '../atoms/Heading2.vue'
import Paragraph3 from '../atoms/Paragraph3.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const layanan = ref(null)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  layanan.value = data.find((item) => item.slug === route.params.slug)
})

const VennerGigi = ref(false)
const BehelGigi = ref(false)
const GigiTiruan = ref(false)
onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  layanan.value = data.find((item) => item.slug === route.params.slug)

  if (layanan.value) {
    if (layanan.value.code === 'VENNER GIGI' || layanan.value.code === 'BLEACHING' || layanan.value.code === 'TAMBALAN ELASTIS' || layanan.value.code === 'GUM LIFTING' || layanan.value.code === 'SCALING') {
      VennerGigi.value = true
    } else if (layanan.value.code === 'BEHEL GIGI') {
      BehelGigi.value = true
    } else if (layanan.value.code === 'GIGI TIRUAN') {
      GigiTiruan.value = true
    }
  }
})
</script>
