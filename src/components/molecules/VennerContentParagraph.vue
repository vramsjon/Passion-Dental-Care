<template>
  <div v-if="vennerContent" class="flex flex-col space-y-8">
    <div class="flex flex-col justify-center items-center space-y-8">
      <Heading2 class="w-[600px] text-center">{{ vennerContent.title }}</Heading2>
      <div>
        <div v-if="TambalanElastis">
          <div class="space-y-8">
            <div v-for="(item, index) in vennerContent.description" :key="index">
              <Paragraph2 class="text-justify">{{ item.text }}</Paragraph2>
            </div>
          </div>
        </div>
        <Paragraph2 v-else>{{ vennerContent.description }}</Paragraph2>
      </div>
    </div>
    <div class="space-y-8">
      <Heading2 class="text-start">{{ vennerContent.subTitle }}</Heading2>
      <div>
        <div v-if="GigiTiruan">
          <div class="mb-4" v-for="(item, index) in vennerContent.descriptionSubTitle" :key="index">
            <Paragraph2>{{ item.text }}</Paragraph2>
          </div>
        </div>
        <div v-else-if="bleaching">
          <div v-for="(item, index) in vennerContent.descriptionSubTitle" :key="index">
            <Heading2>{{ item.title }}</Heading2>
            <div class="space-y-4">
              <div v-for="(itemText, index) in item.description" :key="index">
                <Paragraph2 class="text-justify">{{ itemText.text }}</Paragraph2>
              </div>
            </div>
            <div class="mt-8" v-for="(item, index) in item.note" :key="index">
              <Heading2>{{ item.title }}</Heading2>
              <ul
                class="text-white list-disc pl-8"
                v-for="(itemText, index) in item.description"
                :key="index"
              >
                <li>{{ itemText.text }}</li>
              </ul>
              <Paragraph2>{{ item.text }}</Paragraph2>
            </div>
          </div>
        </div>
        <Paragraph2 v-else>{{ vennerContent.descriptionSubTitle }}</Paragraph2>
      </div>

      <div>
        <div v-if="VennerGigi || Scaling">
          <div class="" v-for="(item, index) in vennerContent.manfaat" :key="index">
            <Heading2>{{ item.title }}</Heading2>
            <Paragraph2>{{ item.description }}</Paragraph2>
            <div>
              <div class="grid grid-cols-2 gap-y-10 gap-x-40 my-8" v-if="Scaling">
                <div v-for="(itemText, index) in item.manfaat" :key="index">
                  <Heading2>{{ itemText.title }}</Heading2>
                  <Paragraph2>{{ itemText.description }}</Paragraph2>
                  <Teks2 class="text-nowrap text-center ml-20">{{ itemText.note }}</Teks2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="BehelGigi || GigiTiruan || GumLifting || CabutGigi || ImplanGigi"
          class="grid grid-cols-2 gap-x-40 gap-y-10"
        >
          <div v-for="(item, index) in vennerContent.manfaat" :key="index">
            <Heading2 class="">{{ item.title }}</Heading2>
            <div>
              <div v-if="ImplanGigi">
                <ul
                  v-for="(itemText, index) in item.description"
                  :key="index"
                  class="text-white list-disc"
                >
                  <li class="ml-8">{{ itemText.text }}</li>
                </ul>
              </div>
              <Paragraph2 v-else class="text-justify">{{ item.description }}</Paragraph2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-6" v-else-if="SarafGigi">
          <div v-for="(item, index) in vennerContent.manfaat" :key="index">
            <Heading2>{{ item.title }}</Heading2>
            <div class="space-y-4 text-justify">
              <div v-for="(itemText, index) in item.description" :key="index">
                <Paragraph2>{{ itemText.text }}</Paragraph2>
              </div>
            </div>

            <ul
              class="text-white list-disc ml-10"
              v-for="(itemText, index) in item.list"
              :key="index"
            >
              <li>{{ itemText.text }}</li>
            </ul>
          </div>
        </div>
      </div>
      <Teks2>{{ vennerContent.benefitDescription }}</Teks2>
    </div>
  </div>
</template>
<script setup>
import Heading2 from '../atoms/Heading2.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Paragraph2 from '../atoms/Paragraph2.vue'
import Teks2 from '../atoms/Teks2.vue'

const route = useRoute()
const vennerContent = ref(null)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[0]
  }
})

const VennerGigi = ref(false)
const BehelGigi = ref(false)
const GigiTiruan = ref(false)
const bleaching = ref(false)
const TambalanElastis = ref(false)
const GumLifting = ref(false)
const Scaling = ref(false)
const CabutGigi = ref(false)
const ImplanGigi = ref(false)
const SarafGigi = ref(false)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[0]

    if (layanan.code === 'VENNER GIGI') {
      VennerGigi.value = true
    } else if (layanan.code === 'BEHEL GIGI') {
      BehelGigi.value = true
    } else if (layanan.code === 'GIGI TIRUAN') {
      GigiTiruan.value = true
    } else if (layanan.code === 'BLEACHING') {
      bleaching.value = true
    } else if (layanan.code === 'TAMBALAN ELASTIS' || layanan.code === 'GIGI BUNGSU') {
      TambalanElastis.value = true
    } else if (layanan.code === 'GUM LIFTING') {
      GumLifting.value = true
    } else if (layanan.code === 'SCALING') {
      Scaling.value = true
    } else if (layanan.code === 'CABUT GIGI') {
      CabutGigi.value = true
    } else if (layanan.code === 'IMPLAN GIGI') {
      ImplanGigi.value = true
    } else if (layanan.code === 'SARAF GIGI') {
      SarafGigi.value = true
    }
  }
})
</script>
