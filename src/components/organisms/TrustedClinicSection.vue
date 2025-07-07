<template>
  <div class="px-12">
    <div
      class="bg-[url('/src/assets/images/Background.png')] bg-cover bg-center bg-no-repeat w-full min-h-[240px] md:min-h-[600px] lg:w-[1066px] lg:h-[650px] lg:mx-auto relative lg:overflow-visible lg:mt-[300px] flex px-5 gap-y-3 mt-10 rounded-2xl"
    >
      <TrustedClinickText
        class="absolute left-[-15px] top-3 lg:mt-20 sm:left-[-5px] sm:mt-10 text-sm sm:text-base"
      />

      <Image
        class="absolute left-34 top-[-35px] lg:left-[500px] lg:top-[-200px] lg:h-[831px] h-[275px] w-auto"
        src="/src/assets/images/Talent2.png"
      />
    </div>
  </div>
</template>
<script setup>
import TrustedClinickText from '../molecules/TrustedClinickText.vue'
import Image from '../atoms/Image.vue'
</script>
