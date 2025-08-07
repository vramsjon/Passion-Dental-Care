import api from '../lib/axios'

export default {
    async getUserById(id) {
    const response = await api.get(`/users/${id}`)
    return response.data;
    },
    
    async createSurvey(payload) {
    try {
      console.log(' Payload dikirim ke /survey:', payload)
      const response = await api.post('/api/client/', payload)
      return response.data
    } catch (error) {
      console.error('Gagal mengirim survey (repository):', {
        response: error.response?.data,
        status: error.response?.status,
        message: error.message
      })
      throw error
    }
  }
}