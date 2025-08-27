<template>
  <div v-if="vennerContent" class="mt-20">
    <div>
      <Heading1Blue class="text-center">{{ vennerContent.title }}</Heading1Blue>
      <Teks1Blue class="text-center">{{ vennerContent.description }}</Teks1Blue>
    </div>
    <div
      v-if="vennerContent.type"
      class="flex flex-col items-center justify-center space-y-8 mt-16"
    >
      <div
        v-for="(item, index) in vennerContent.type"
        :key="index"
        :class="['relative text-center space-y-4', GigiTiruan ? 'mb-[350px]' : 'mb-60']"
      >
        <Image class="w-full h-[160px]" :src="item.image" />
        <div>
          <div
            v-if="GigiTiruan"
            class="bg-[#092A62]/90 w-full h-[395px] rounded-b-4xl p-4 flex flex-col justify-center absolute top-[120px] space-y-2"
          >
            <Heading2>{{ item.title }}</Heading2>
            <div v-for="(itemTitle, i) in item.description" :key="i">
              <Paragraph2 class="text-start">{{ itemTitle.title }}</Paragraph2>
              <ul class="list-disc ml-5 text-white text-sm space-y-1">
                <li v-for="(itemText, j) in itemTitle.description" :key="j" class="text-start">
                  {{ itemText.text }}
                </li>
              </ul>
            </div>
          </div>
          <div
            v-else
            class="bg-[#092A62]/90 w-full h-[250px] rounded-b-4xl p-4 flex flex-col justify-center absolute top-[120px] space-y-8"
          >
            <Heading2>{{ item.title }}</Heading2>
            <Paragraph2 class="text-justify">{{ item.description }}</Paragraph2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1Blue from '../atoms/Heading1Blue.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import Image from '../atoms/Image.vue'
import Heading2 from '../atoms/Heading2.vue'
import Paragraph2 from '../atoms/Paragraph2.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const vennerContent = ref(null)

const GigiTiruan = ref(false)

onMounted(async () => {
  const res = await fetch('/LayananKontent.json')
  const data = await res.json()

  const layanan = data.find((item) => item.slug === route.params.slug)

  if (layanan) {
    vennerContent.value = layanan.content[2]
    if (layanan.code === 'GIGI TIRUAN') {
      GigiTiruan.value = true
    }
  }
})
</script>