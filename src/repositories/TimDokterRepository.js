import axis from '../lib/axios'

export default {
    async getAllDokter() {
        try {
            const response = await axis.get('/dokter')
            return response.data
        } catch (error) {
            console.error('Gagal mengambil data dokter:', {
                response: error.response?.data,
                status: error.response?.status,
                message: error.message
            })
            throw error
        }
    }
}