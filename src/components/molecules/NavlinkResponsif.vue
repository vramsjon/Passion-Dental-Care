<template>
  <div v-if="isOpen" class="fixed top-0 left-0 z-50 w-full bg-white grid grid-cols-4 p-2 pb-10 rounded-b-xl">
    <!-- Daftar menu -->
    <Link><TextBold>Beranda</TextBold></Link>
    <Link><TextBold>Tentang</TextBold></Link>
    <Link><TextBold>Layanan</TextBold></Link>
    <Link><TextBold>Dokter</TextBold></Link>
    <Link><TextBold>Promo</TextBold></Link>
    <Link><TextBold>Artikel</TextBold></Link>
    <Link><TextBold>Lokasi</TextBold></Link>
    <Link><TextBold>Reservasi</TextBold></Link>

    <!-- Tombol X di pojok kanan bawah -->
    <div
      class="absolute top-23 right-[45%] text-sm text-white cursor-pointer rounded-[100%] text-center bg-red-700 font-bold px-[7px] py-[2px] "
      @click="$emit('close')"
    >
      ✕
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
