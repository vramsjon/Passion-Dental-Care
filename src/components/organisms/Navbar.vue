<template>
  <div class="lg:flex items-center gap-10 lg:px-30 absolute w-full">
    <NavLink1></NavLink1>
    <Image class="w-[121px]" src="/images/logo.png" />
    <NavLink2></NavLink2>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import NavLink1 from '../molecules/Navlink1.vue'
import NavLink2 from '../molecules/Navlink2.vue'
</script>