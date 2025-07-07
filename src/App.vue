<template>
  <header>
    <!-- <Navbar></Navbar> -->
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    
  </footer>
</template>

<script setup>
import Navbar from './components/organisms/Navbar.vue'
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
