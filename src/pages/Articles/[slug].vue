<template>
    <div class="w-full p-5 mt-5 lg:py-14 lg:px-28 lg:mt-18">
        <!-- Loading State -->
        <div v-if="loading" class="flex flex-col items-center justify-center min-h-96 text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p class="text-gray-600">Memuat detail artikel...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex justify-center items-center min-h-96">
            <div class="bg-white border-2 border-red-500 rounded-xl p-8 text-center max-w-md shadow-lg">
                <div class="text-5xl mb-4">⚠️</div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Terjadi Kesalahan</h3>
                <p class="text-red-600 mb-4 font-medium">{{ error.message }}</p>
                <div v-if="error.type" class="mb-4 p-3 bg-gray-50 rounded-lg">
                    <small class="block text-gray-600">Tipe Error: {{ error.type }}</small>
                    <small v-if="error.status" class="block text-gray-600">Status: {{ error.status }}</small>
                </div>
                <button @click="handleRetry"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Coba Lagi
                </button>
            </div>
        </div>

        <!-- Article Content -->
        <div v-else-if="article" class="pt-5 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20 md:pt-8 md:pb-10 lg:pt-10 lg:pb-14">
            <div class="lg:col-span-2 flex flex-col gap-3">
                <h1 class="text-[#1F2937] font-bold text-3xl leading-[150%] text-center">
                    {{ article.title }}
                </h1>
                <div class="flex gap-2 justify-center items-center">
                    <span class="text-[#71747D] leading-[150%] font-normal text-sm tracing-[-2%] text-center">
                        {{ formatDate(article.created_at) }}
                    </span>
                    <span class="w-1 h-1 rounded-full bg-[#71747D]"></span>
                    <span class="text-[#71747D] leading-[150%] font-normal text-sm tracing-[-2%] text-center">
                        {{ getTime24Hour(article.created_at) }}
                    </span>
                </div>

                <!-- Article Body -->
                <div v-html="article.html" class="w-full overflow-auto"></div>
            </div>

            <div class="lg:col-span-1 flex flex-col">
                <!-- <div class="flex flex-col">
                    <h2 class="text-xl font-bold mb-4">Daftar Isi</h2>
                    <ul class="space-y-2">
                        <li v-for="category in article.categories" :key="category.id"
                            class="bg-gray-100 px-2 py-1 rounded">
                            {{ category.name }}
                        </li>
                    </ul>
                </div> -->
                <div class="flex flex-col gap-4 py-4">
                    <h3 class="text-xl font-bold">Rekomendasi Artikel</h3>
                    <CardRekomendasiArticle v-for="article in limitedArticles" :key="article.slug || article.code"
                        :name="getAuthorName(article)" :alt="article.title || 'Artikel Image'"
                        :image="getArticleImage(article)" :title="article.title || 'Judul Artikel'"
                        :date="formatDate(article.created_at)" :slug="article.slug || article.code" />
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
            <p class="text-gray-600 mb-4">Artikel tidak ditemukan</p>
            <router-link to="/artikel"
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 transition-colors inline-block">
                Kembali ke Daftar Artikel
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import { formatDate, getTime24Hour } from '../../utils/dateUtils.js'
import { useBlogDetail } from '../../composables/useBlogDetail.js'
import { useBlog } from '../../composables/useBlog.js'
import { useRoute } from 'vue-router'
import CardRekomendasiArticle from '../../components/UI/CardRekomendasiArticle.vue'

const { article, loading, error, fetchBlogDetail, retryFetch } = useBlogDetail()
const { articles, fetchBlogs } = useBlog()
const falseResponses = [null, ''];

const route = useRoute()

const slug = computed(() => route.params.slug)

const limitedArticles = computed(() => {
    if (!articles.value || !Array.isArray(articles.value)) {
        return []
    }
    
    return articles.value
        .filter(item => item.slug !== slug.value && item.code !== slug.value)
        .slice(0, 3)
})

watch(slug, async (newSlug, oldSlug) => {
    if (newSlug && newSlug !== oldSlug) {
        console.log('Slug berubah dari', oldSlug, 'ke', newSlug)
        await fetchBlogDetail(newSlug)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}, { immediate: false })

onMounted(async () => {
    if (slug.value) {
        await fetchBlogDetail(slug.value)
    }
    await fetchBlogs()
})

const getAuthorName = (article) => {
    return article.user_created || article.user_updated || 'Admin'
}

const handleRetry = async () => {
    if (slug.value) {
        await retryFetch(slug.value)
    }
}

const getArticleImage = (article) => {
    if (!falseResponses.includes(article.file_path)) {
        return article.file_path
    }

    if (article?.html) {
        const imgMatch = article.html.match(/<img[^>]+src=\"([^\"]+)\"/)
        if (imgMatch && imgMatch[1]) {
            return imgMatch[1]
        }
    }
    return '/default_thumbnail_article.jpg'
}
</script>
