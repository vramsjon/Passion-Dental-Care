<template>
  <div v-if="isOpen" class="fixed top-0 left-0 z-50 w-[60%] bg-[#01BAB4] flex flex-col p-4 gap-y-5">
    <!-- Daftar menu -->
    <Link><TextBold class="border-b border-gray-200">Beranda</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Tentang</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Layanan</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Dokter</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Promo</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Artikel</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Lokasi</TextBold></Link>
    <Link><TextBold class="border-b border-gray-200">Reservasi</TextBold></Link>

    <!-- Tombol X di pojok kanan bawah -->
    <div
      class="absolute top-[45%] right-[-10px] text-sm text-gray-600 cursor-pointer rounded-[100%] text-center bg-[#01BAB4] font-bold px-[2px] py-[8px] "
      @click="$emit('close')"
    >
      <<      
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Link from '../atoms/Link.vue'
import TextBold from '../atoms/TextBold.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])
</script>
