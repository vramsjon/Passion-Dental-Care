import { ref } from 'vue'

export function usePromo() {
    const promos = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchPromos = async () => {
        loading.value = true
        error.value = null

        try {
            const response = await fetch('https://dev.fitur.remedis.id/api/client/blog?type=PROMO', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                signal: AbortSignal.timeout(10000)
            })

            if (!response.ok) {
                let errorMessage = 'Terjadi kesalahan saat mengambil data promo'
                let errorType = 'HTTP_ERROR'

                switch (response.status) {
                    case 400:
                        errorMessage = 'Permintaan tidak valid. Silakan coba lagi.'
                        errorType = 'BAD_REQUEST'
                        break
                    case 401:
                        errorMessage = 'Akses tidak diizinkan. Silakan login kembali.'
                        errorType = 'UNAUTHORIZED'
                        break
                    case 403:
                        errorMessage = 'Akses ditolak. Anda tidak memiliki izin untuk mengakses data ini.'
                        errorType = 'FORBIDDEN'
                        break
                    case 404:
                        errorMessage = 'Data artikel tidak ditemukan.'
                        errorType = 'NOT_FOUND'
                        break
                    case 429:
                        errorMessage = 'Terlalu banyak permintaan. Silakan tunggu sebentar dan coba lagi.'
                        errorType = 'RATE_LIMIT'
                        break
                    case 500:
                        errorMessage = 'Terjadi kesalahan pada server. Silakan coba lagi nanti.'
                        errorType = 'SERVER_ERROR'
                        break
                    case 502:
                    case 503:
                    case 504:
                        errorMessage = 'Server sedang tidak tersedia. Silakan coba lagi nanti.'
                        errorType = 'SERVICE_UNAVAILABLE'
                        break
                    default:
                        errorMessage = `Terjadi kesalahan: ${response.status} - ${response.statusText}`
                        errorType = 'HTTP_ERROR'
                }

                throw new Error(JSON.stringify({
                    type: errorType,
                    message: errorMessage,
                    status: response.status
                }))
            }

            const data = await response.json()

            if (data && data.data && Array.isArray(data.data)) {
                promos.value = data.data
            } else {
                promos.value = []
                console.warn('Unexpected API response structure:', data)
            }

            return {
                success: true,
                data: data
            }

        } catch (err) {
            let errorMessage = 'Terjadi kesalahan saat mengambil data artikel'
            let errorType = 'UNKNOWN_ERROR'
            let statusCode = null

            if (err.name === 'TimeoutError' || err.name === 'AbortError') {
                errorMessage = 'Koneksi timeout. Silakan coba lagi.'
                errorType = 'TIMEOUT_ERROR'
            } else if (err.name === 'TypeError' && err.message.includes('fetch')) {
                errorMessage = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.'
                errorType = 'NETWORK_ERROR'
            } else if (err.message.startsWith('{')) {
                try {
                    const parsedError = JSON.parse(err.message)
                    errorMessage = parsedError.message
                    errorType = parsedError.type
                    statusCode = parsedError.status
                } catch {
                    errorMessage = 'Terjadi kesalahan saat memproses respons server'
                    errorType = 'PARSE_ERROR'
                    statusCode = 500
                }
            } else if (err instanceof SyntaxError) {
                errorMessage = 'Respons server tidak valid. Silakan coba lagi.'
                errorType = 'PARSE_ERROR'
            }

            error.value = {
                type: errorType,
                message: errorMessage,
                status: statusCode,
                originalError: err.message
            }

            console.error('Promo Fetch Error:', {
                type: errorType,
                message: errorMessage,
                status: statusCode,
                originalError: err.message,
                url: 'https://dev.fitur.remedis.id/api/client/blog'
            })

            return {
                success: false,
                error: error.value
            }
        } finally {
            loading.value = false
        }
    }

    const retryFetch = () => {
        return fetchPromos()
    }

    return {
        promos,
        loading,
        error,
        fetchPromos,
        retryFetch
    }
}