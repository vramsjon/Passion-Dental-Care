<template>
    <div class="flex justify-center items-center px-6">
        <div class="relative bg-[url('/src/assets/images/bg2.png')] bg-cover lg:bg-contain bg-no-repeat bg-center w-full max-w-[1100px] h-[300px] lg:h-auto aspect-[1100/650] mt-20 lg:mt-52 ">
            <div class="absolute lg:top-[40px] left-[-10px] lg:left-[-30px]">
                <KonsultasiTeks></KonsultasiTeks>
            </div>
        </div>
    </div>
</template>
<script setup>
import KonsultasiTeks from '../molecules/KonsultasiTeks.vue';
</script>