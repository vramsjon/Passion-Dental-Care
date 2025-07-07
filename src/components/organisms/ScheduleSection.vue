<template>
  <div
    class="bg-[url('/src/assets/images/Background.png')] bg-cover bg-center bg-no-repeat w-full min-h-[90px] sm:min-h-[400px] md:min-h-[600px] lg:w-[1066px] lg:h-[650px] lg:mx-auto lg:relative lg:overflow-visible mt-20 lg:mt-[300px] flex flex-col px-5 gap-y-3"
  >
    <!-- ScheduleList bisa digeser bebas -->
    <ScheduleList class="lg:absolute lg:left-[-40px] lg:top-[-40px]" />

    <!-- ScheduleImage juga bisa digeser bebas -->
    <ScheduleImage class="lg:absolute lg:bottom-[-30px] lg:left-140" />
  </div>
</template>

<script setup>
import ScheduleList from '../molecules/ScheduleList.vue'
import ScheduleImage from '../molecules/ScheduleImage.vue'
</script>
