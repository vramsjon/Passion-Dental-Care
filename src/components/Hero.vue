<template>
    <div
        class="w-full h-[700px] md:h-[545px] lg:h-[600px] xl:h-[645px] 2xl:h-[700px] bg-[url(/images/hero_mobile.png)] md:bg-[url(/images/hero.png)] bg-cover bg-center flex pt-20 md:pt-0 md:items-center justify-center md:justify-end">
        <div class="flex flex-col text-center px-6 md:px-0 md:text-end md:mr-16 lg:mr-32 xl:mr-40 max-w-[500px]">
            <h1
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold md:font-bold text-white leading-8 md:leading-12">
                {{ title }}
            </h1>
            <p class="text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-white leading-[150%] md:leading-10">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

</script>