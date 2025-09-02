<template>
    <div @click="openModal"
        class="flex flex-col lg:flex-row relative rounded-3xl border-[1px] border-[#E5E7EB] shadow-[0px_4px_10px_0px_#5151510D] h-full cursor-pointer hover:shadow-lg transition-shadow lg:p-8 lg:gap-12 lg:w-full lg:shadow-[0px_11.97px_29.91px_0px_#5151510D] bg-[#FFFFFF] ">
        <img :src="image" :alt="alt" class="w-full h-[438px] lg:h-[246px] lg:w-[196px] object-cover rounded-t-3xl">
        <!-- Separator -->
        <div class="border-b-4 border-dashed border-[#E5E7EB] hidden lg:border-r lg:h-full relative items-center lg:flex flex-col">
            <div class="w-[50px] h-[25px] overflow-hidden absolute -bottom-9 z-10">
                <div class="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div class="w-[50px] h-[25px] overflow-hidden absolute -top-8 z-10">
                <div class="w-[50px] h-[50px] rounded-full bg-[#D9D9D9] translate-y-[-25px]"></div>
            </div>
        </div>

        <div class="flex flex-col rounded-t-3xl p-4 gap-4 lg:justify-between w-full">
            <div class="flex flex-col gap-3">
                <h3 class="text-base font-semibold leading-[100%]">{{ title }}</h3>
                <p class="text-xs leading-[150%] text-[#71747D]">{{ subtitle }}</p>
            </div>

            <div class="flex flex-col">
                <span class="border-b border-[#E5E7EB]"></span>
    
                <div class="flex justify-between mt-4 w-full">
                    <div class="flex gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                fill="#06376C" />
                            <path d="M10.6667 1.33333V4" stroke="white" stroke-width="1.33333" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M5.33333 1.33333V4" stroke="white" stroke-width="1.33333" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M2 6.66667H14" stroke="white" stroke-width="1.33333" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p class="text-xs leading-[150%] text-[#6B7280]">{{ formatDate(date) }}</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <img src="/images/wa.svg" alt="WhatsApp" @click.stop="shareWhatsApp">
                        <img src="/images/share.svg" alt="Share" @click.stop="sharePromo">
                    </div>
                </div>
            </div>
        </div>

        <img src="/images/Tag_Promo.png" alt="tag_promo" class="-top-5 -right-4 absolute">
    </div>

    <!-- Modal -->
    <PromoModal :is-open="isModalOpen" :promo="promoData" @close="closeModal" />
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import PromoModal from './PromoModal.vue'

const props = defineProps({
    slug: String,
    image: String,
    alt: String,
    title: String,
    subtitle: String,
    date: String,
    html: String
})

const emit = defineEmits(['open-modal'])

const isModalOpen = ref(false)
const promoData = ref(null)

const openModal = () => {
    promoData.value = {
        slug: props.slug,
        image: props.image,
        title: props.title,
        subtitle: props.subtitle,
        date: props.date,
        html: props.html
    }
    isModalOpen.value = true
    emit('open-modal', promoData.value)
}

const closeModal = () => {
    isModalOpen.value = false
    promoData.value = null
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

const shareWhatsApp = () => {
    const text = encodeURIComponent(`Lihat promo menarik: ${props.title}`)
    const url = `https://wa.me/?text=${text}`
    window.open(url, '_blank')
}

const sharePromo = () => {
    if (navigator.share) {
        navigator.share({
            title: props.title,
            text: props.subtitle,
            url: window.location.href
        })
    } else {
        navigator.clipboard.writeText(window.location.href)
        alert('Link berhasil disalin!')
    }
}
</script>