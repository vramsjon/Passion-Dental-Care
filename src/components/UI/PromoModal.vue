<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center">
        <div class="fixed inset-0 bg-black/80" @click="closeModal"></div>
        
        <div class="relative z-30 max-w-2xl w-full">
            <!-- Close Button -->
            <button @click="closeModal"
                class="absolute p-0.5 -top-3 -right-2 lg:-right-12 bg-[#DC2626] shadow-[0px_4px_10px_0px_#5151510D] rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>


        <!-- Modal Content -->
        <div class="relative rounded-lg max-w-2xl w-full lg:max-w-[750px] mx-4 max-h-[90vh] bg-[#FAFAFA] p-4 lg:p-6 overflow-y-auto">

            <!-- Header -->
            <div class="flex justify-between items-center lg:mb-4">
                <h2 class="text-xl font-semibold">Detail Promo</h2>
            </div>

            <!-- Body -->
            <div v-if="promo" class="flex flex-col lg:flex-row gap-5">
                <img v-if="promo.image" :src="promo.image" :alt="promo.title"
                    class="w-full h-96 object-cover rounded-lg lg:w-[232px] lg:h-[291px]">

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <h3 class="font-semibold text-base lg:text-lg text-[#1F2937]">{{ promo.title }}</h3>
                        <p class="text-[#6B7280] lg:text-xs">{{ formatDate(promo.date) }}</p>
                    </div>

                    <div v-html="promo.html" class="lg:hidden"></div>
                    <div v-html="promo.html" class="hidden p-4 lg:flex flex-col gap-3 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-[0px_4px_10px_0px_#5151510D]"></div>

                    <div class="lg:flex justify-between items-center gap-3 hidden">
                        <div class="flex gap-2 py-2 px-3 rounded-3xl bg-white border border-[#E5E7EB] shadow-[0px_4px_10px_0px_#5151510D] w-full items-center justify-center">
                            <img src="/images/share.svg" alt="wa">
                            <p class="text-base leading-[150%]">Reservasi</p>
                        </div>
                        <div class="flex gap-2 py-2 px-3 rounded-3xl bg-white border border-[#E5E7EB] shadow-[0px_4px_10px_0px_#5151510D] w-full items-center justify-center">
                            <img src="/images/wa.svg" alt="wa">
                            <p class="text-base leading-[150%]">Reservasi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center py-8">
                <p class="text-gray-500">Loading...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    promo: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>