<template>
    <router-link :to="`/artikel/${props.slug}`"
        class="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-[1px] border-[#E5E7EB]">
        <div class="flex">
            <img :src="image" :alt="alt" class="w-[107px] h-[107px] object-cover"
                @error="$event.target.src = '/default_thumbnail_article.jpg'" />
            <div class="p-3 lg:p-0 lg:py-3 lg:px-4 flex flex-col gap-2 justify-between">
                <h3 class="text-sm lg:text-lg font-semibold">{{ title }}</h3>
                <div class="flex flex-col gap-2">
                    <span class="text-[10px] lg:text-sm rounded-sm bg-[#1FAAA5] py-0.5 px-1.5 flex gap-2.5 text-white w-fit">Article</span>
                    <div class="flex items-center text-sm text-[#71747D] gap-2 text-[10px]">
                        <span>
                            {{ name }}
                        </span>
                        <span class="w-1 h-1 bg-[#71747D] rounded-full"></span>
                        <span>
                            {{ date }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'Admin'
    },
    alt: {
        type: String,
        default: 'Artikel Image'
    },
    image: {
        type: String,
        default: '/default_thumbnail_article.jpg'
    },
    title: {
        type: String,
        default: 'Judul Artikel'
    },
    date: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: true
    }
})
</script>