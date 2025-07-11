<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
    <div class="flex justify-between w-full py-2 px-4 items-center">
      <Image class="w-20" src="/images/logo.png" />
      <div
        @click="toggleMenu"
        class="text-2xl font-extrabold text-blue-900 cursor-pointer bg-white rounded-lg px-[6px] text-center border border-gray-300 h-10"
      >
        ☰
      </div>
    </div>

    <!-- Menu dengan animasi slide turun -->
    <transition
      name="slide-down"
      enter-active-class="transition duration-600 ease-out"
      leave-active-class="transition duration-600 ease-in"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div v-if="showMenu" class="flex flex-col p-4 gap-y-5">
        <Link><TextBold class="border-b border-gray-200">Beranda</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Tentang</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Layanan</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Dokter</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Promo</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Artikel</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Lokasi</TextBold></Link>
        <Link><TextBold class="border-b border-gray-200">Reservasi</TextBold></Link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Link from '../atoms/Link.vue'
import TextBold from '../atoms/TextBold.vue'
import Image from '../atoms/Image.vue'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
