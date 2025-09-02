<template>
    <Hero title="Artikel"
        description="Membantu Anda untuk terus up to date dengan informasi dan perkembangan terkait dengan kesehatan gigi." />

    <div class="py-8 px-4 sm:py-10 sm:px-8 md:py-12 md:px-16 lg:py-14 lg:px-24 xl:py-14 xl:px-28 flex flex-col gap-9">
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <div class="ml-4 text-lg text-gray-600">Memuat artikel...</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-6 mx-auto max-w-2xl">
            <div class="flex items-center mb-3">
                <svg class="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-lg font-semibold text-red-800">Gagal Memuat Artikel</h3>
            </div>
            <p class="text-red-700 mb-4">{{ error.message }}</p>
            <div class="text-sm text-red-600 mb-4">
                <strong>Jenis Error:</strong> {{ error.type }}
                <span v-if="error.status"> | <strong>Status:</strong> {{ error.status }}</span>
            </div>
            <button @click="retryFetch"
                class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                :disabled="loading">
                {{ loading ? 'Mencoba...' : 'Coba Lagi' }}
            </button>
        </div>

        <!-- Success State -->
        <div v-else-if="articles && articles.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <CardArtikel v-for="article in articles" :key="article.slug || article.code"
                    :name="getAuthorName(article)" :alt="article.title || 'Artikel Image'"
                    :image="getArticleImage(article)" :title="article.title || 'Judul Artikel'"
                    :date="formatDate(article.created_at)" :slug="article.slug || article.code" />
            </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                </path>
            </svg>
            <div class="text-gray-500 text-lg mb-2">Belum ada artikel tersedia</div>
            <button @click="retryFetch" class="text-blue-600 hover:text-blue-800 underline">
                Muat ulang
            </button>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center gap-2">
            <button
                class="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                :disabled="currentPage === 1"
                @click="currentPage--"
            >
                &laquo;
            </button>
            <span>
                Halaman {{ currentPage }} dari {{ totalPages }}
            </span>
            <button
                class="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                :disabled="currentPage === totalPages"
                @click="currentPage++"
            >
                &raquo;
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Hero from '../../components/Hero.vue'
import CardArtikel from '../../components/UI/CardArticle.vue'
import { useBlog } from '../../composables/useBlog.js'
import { formatDate } from '../../utils/dateUtils.js'

const { articles, loading, error, fetchBlogs, retryFetch } = useBlog()

onMounted(() => {
    fetchBlogs()
})

const getAuthorName = (article) => {
    return article.user_created || article.user_updated || 'Admin'
}

const getArticleImage = (article) => {
    if (article.html) {
        const imgMatch = article.html.match(/<img[^>]+src="([^"]+)"/)
        if (imgMatch && imgMatch[1]) {
            return imgMatch[1]
        }
    }

    return '/default_thumbnail_article.jpg'
}
</script>
