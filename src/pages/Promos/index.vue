<template>
    <div class="flex flex-col">
        <Hero title="Klaim Promo Segera!"
            description="Dapatkan penawaran terbaik untuk perawatan gigimu di Passion Dental Care" />

        <div class="flex flex-col gap-9 p-4 sm:p-5 md:p-6 lg:p-8 xl:py-9 xl:px-48 w-full mx-auto">
            <div class="flex flex-col md:flex-row gap-3 justify-between md:items-center">
                <div class="flex flex-col max-w-[748px] gap-2">
                    <h2 class="font-semibold text-xl leading-[150%] md:text-2xl">Penawaran Terbaik Bulan Ini</h2>
                    <p class="text-base leading-[150%] font-normal text-[#71747D]">
                        Nikmati harga khusus untuk pemasangan behel, scaling, tambal gigi, dan perawatan lainnya. Penawaran
                        terbaik untuk senyum sehatmu ada di sini!
                    </p>
                </div>
                <button class="bg-[#0D316F] text-white px-4 py-2 rounded-lg w-fit h-fit">
                    Mulai Konsultasi →
                </button>
            </div>

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
            <div v-else-if="promos && promos.length > 0">
                <div class="grid grid-cols-1 gap-6 w-full">
                    <CardPromo v-for="promo in promos" :key="promo.slug || promo.code"
                        :alt="promo.title || 'Promo Image'" :title="promo.title" :html="promo.html" :date="promo.created_at"
                        :subtitle="promo.subtitle" :image="getPromoImage(promo)" :slug="promo.slug" />
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

        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Hero from '../../components/Hero.vue';
import CardPromo from '../../components/UI/CardPromo.vue';
import { usePromo } from '../../composables/usePromo';

const { promos, loading, error, fetchPromos } = usePromo()

onMounted(async () => {
    await fetchPromos()
})

const getPromoImage = (promo) => {
    if (promo.html) {
        const imgMatch = promo.html.match(/<img[^>]+src="([^"]+)"/)
        if (imgMatch && imgMatch[1]) {
            return imgMatch[1]
        }
    }

    return '/images/promo.png'
}
</script>