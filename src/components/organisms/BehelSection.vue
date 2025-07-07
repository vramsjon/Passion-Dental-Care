<template>
  <div class="lg:mt-30 mt-10">
    <div
      class="bg-[url('/src/assets/images/behelbg.png')] bg-cover bg-center bg-no-repeat w-full 
             h-[250px] md:h-[500px] lg:h-[572px]
             flex 
             px-5  md:px-20 lg:px-40 py-10 lg:py-30"
    >
      <BehelTeks />
    </div>
  </div>
</template>

<script setup>
import BehelTeks from '../molecules/BehelTeks.vue'
</script>
