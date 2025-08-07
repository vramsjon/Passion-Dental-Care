<template>
  <div class="flex flex-col justify-end w-[330px] items-end mr-40 mt-20 space-y-8">
    <div class="flex flex-col justify-end items-end">
      <Paragraph1>Pelayanan</Paragraph1>
      <Heading1>Venner Gigi</Heading1>
    </div>
    <Paragraph3 class="text-end">{{ layanan.description }}</Paragraph3>
    <div>
      <div v-if="VennerGigi" class="flex gap-8">
        <div>
          <div class="flex">
            <Heading2 class="text-nowrap">{{ layanan.price }}</Heading2>
          </div>
          <Paragraph3 class="text-end text-nowrap">{{ layanan.type }}</Paragraph3>

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
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const layanan = ref(null)
const VennerGigi = ref(false)
const BehelGigi = ref(false)
const GigiTiruan = ref(false)
onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  layanan.value = data.find((item) => item.slug === route.params.slug)

  if (layanan.value) {
    if (layanan.value.code === 'VENNER GIGI' || layanan.value.code === 'BLEACHING' || layanan.value.code === 'TAMBALAN ELASTIS' || layanan.value.code === 'GUM LIFTING' || layanan.value.code === 'SCALING' || layanan.value.code === 'CABUT GIGI' || layanan.value.code === 'IMPLAN GIGI' || layanan.value.code === 'GIGI BUNGSU' || layanan.value.code === 'SARAF GIGI' || layanan.value.code === 'GIGI ANAK' ){
      VennerGigi.value = true
    }else if (layanan.value.code === "BEHEL GIGI"){
      BehelGigi.value = true
    }else if (layanan.value.code === "GIGI TIRUAN"){
      GigiTiruan.value = true
    }
  }
})
</script>
