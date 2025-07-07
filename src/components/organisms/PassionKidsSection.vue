<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="relative bg-[url('/src/assets/images/background.png')] bg-contain bg-no-repeat bg-center w-full max-w-[1100px] aspect-[1100/650] mt-20 lg:mt-52"
    >
      <div class="absolute top-4 left-5 lg:top-[3%] lg:left-[-1%] lg:w-[90%] z-10">
        <PassionKidsTeks  />
      </div>
      <Image
        class="absolute  left-45 lg:top-[3%] lg:left-[35%] w-[50%] lg:w-[664px] lg:max-h-[629px]"
        src="/src/assets/images/girl.png"
      />
      <Image
        class="absolute top-[66%] left-[2%] w-[96%] z-60"
        src="/src/assets/images/gradasi.png"
      />
    </div>
    <Image class="lg:w-[1165px] lg:h-[581px] mt-10 lg:mt-40" src="/src/assets/images/childgaleri.png" />
  </div>
</template>
<script setup>
import PassionKidsTeks from '../molecules/PassionKidsTeks.vue'
import Image from '../atoms/Image.vue'
</script>
