<template>
  <div class="relative lg:w-full ">
    <GuaranteeParagaraph></GuaranteeParagaraph>
    <div class="absolute top-[60%] lg:top-[50%] lg:left-[17%]">
      <GuaranteeImage></GuaranteeImage>
    </div>
  </div>
</template>
<script setup>
import GuaranteeParagaraph from '../molecules/GuaranteeParagaraph.vue'
import GuaranteeImage from '../molecules/GuaranteeImage.vue'
</script>
