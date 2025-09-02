<template>
    <router-link :to="`/artikel/${slug}`" class="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <img 
            :src="image" 
            :alt="alt" 
            class="w-full h-56 object-cover"
            @error="$event.target.src = '/default_thumbnail_article.jpg'"
        />
        <div class="py-3 px-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <span class="rounded-sm bg-[#1FAAA5] py-0.5 px-1.5 flex gap-2.5 text-white w-fit">Article</span>
            <div class="flex items-center text-sm text-[#71747D] gap-2">
                <span>
                    {{ name }}
                </span>
                <span class="w-2 h-2 bg-[#71747D] rounded-full"></span>
                <span>
                    {{ date }}
                </span>
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