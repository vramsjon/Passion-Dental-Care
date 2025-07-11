<template>
  <div
    :class="[
      'fixed top-0 left-0 z-50 w-full transition duration-300 ease-in-out',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="lg:flex items-center gap-10 lg:px-30 py-4 px-4">
      <NavLink1 />
      <Image class="w-[121px]" src="/images/logo.png" />
      <NavLink2 />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Image from '../atoms/Image.vue'
import NavLink1 from '../molecules/Navlink1.vue'
import NavLink2 from '../molecules/Navlink2.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
