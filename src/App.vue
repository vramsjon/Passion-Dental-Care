<template>
  <header>
    <div>
      <Navbar v-if="isLargeScreen"></Navbar>

      <div v-else>
        <!-- Menu -->
        <NavlinkResponsif :isOpen="showMenu" @close="showMenu = false" />
      </div>
    </div>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <JanjiTemuSection></JanjiTemuSection>
    <FooterSection></FooterSection>
  </footer>
</template>

<script setup>
import Navbar from './components/organisms/Navbar.vue'
import JanjiTemuSection from './components/organisms/JanjiTemuSection.vue'
import FooterSection from './components/organisms/FooterSection.vue'
import NavlinkResponsif from './components/molecules/NavlinkResponsif.vue'

import { ref, onMounted, onUnmounted } from 'vue'


// Cek ukuran layar
const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Toggle menu mobile
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style>
body::-webkit-scrollbar,
#app::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

body,
#app {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
