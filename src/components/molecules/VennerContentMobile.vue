<template>
  <div v-if="vennerContent" class="flex flex-col space-y-8">
    <div class="flex flex-col justify-center items-center space-y-8">
      <Heading2 class="w-full text-center">{{ vennerContent.title }}</Heading2>
      <div>
        <div v-if="TambalanElastis">
          <div class="space-y-4">
            <div v-for="(item, index) in vennerContent.description" :key="index">
              <Paragraph2 class="text-justify">{{ item.text }}</Paragraph2>
            </div>
          </div>
        </div>
        <Paragraph2 v-else class="text-justify">{{ vennerContent.description }}</Paragraph2>
      </div>
    </div>
    <div class="space-y-8">
      <Heading2 class="text-center">{{ vennerContent.subTitle }}</Heading2>
      <div>
        <div v-if="GigiTiruan">
          <div v-for="(item, index) in vennerContent.descriptionSubTitle" :key="index">
            <Paragraph2 class="text-justify">{{ item.text }}</Paragraph2>
          </div>
        </div>
        <div class="text-justify" v-else-if="bleaching">
          <div v-for="(item, index) in vennerContent.descriptionSubTitle" :key="index">
            <Heading2>{{ item.title }}</Heading2>
            <div v-for="(itemText, index) in item.description" :key="index">
              <Paragraph2>{{ itemText.text }}</Paragraph2>
            </div>

            <div v-for="(item, index) in item.note" :key="index">
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

        <Paragraph2 v-else class="text-center">{{ vennerContent.descriptionSubTitle }}</Paragraph2>
      </div>

      <div v-for="(item, index) in vennerContent.manfaat" :key="index">
        <Heading2 class="text-center">{{ item.title }}</Heading2>
        <Paragraph2 class="text-center">{{ item.description }}</Paragraph2>
        <div v-if="Scaling">
          <div v-for="(itemText, index) in item.manfaat" :key="index">
            <div class="space-y-8">
              <Heading2 class="text-center">{{ itemText.title }}</Heading2>
              <Paragraph2 class="text-center">{{ itemText.description }}</Paragraph2>
            </div>
          </div>
        </div>
      </div>
      <Teks2 class="text-center">{{ vennerContent.benefitDescription }}</Teks2>
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

const GigiTiruan = ref(false)
const bleaching = ref(false)
const TambalanElastis = ref(false)
const Scaling = ref(false)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[0]
    if (layanan.code === 'GIGI TIRUAN') {
      GigiTiruan.value = true
    } else if (layanan.code === 'BLEACHING') {
      bleaching.value = true
    } else if (layanan.code === 'TAMBALAN ELASTIS') {
      TambalanElastis.value = true
    } else if (layanan.code === 'SCALING') {
      Scaling.value = true
    }
  }
})
</script>
