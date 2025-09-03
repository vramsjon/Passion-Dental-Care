// src/repositories/surveyRepository.js
import api from '../lib/axios'

export default {
  async getQuestionsByUserId(uuid) {
    try {
      console.log(uuid)
      const response = await api.get(`/api/client/questions/${uuid}`)
      return response.data.data // hanya bagian data, bukan seluruh response
    } catch (error) {
      console.error('Gagal mengambil pertanyaan:', error)
      throw error
    }
  },

  async submitSurveyAnswers(uuid, rawAnswers, questionBank) {
    try {
      if (!questionBank || !Array.isArray(questionBank)) {
        throw new Error('questionBank kosong atau bukan array')
      }

      // mapping ke format sesuai REQ BODY
      const payload = questionBank.flatMap((page, pageIndex) =>
        page.map((q, qIndex) => ({
          id: q.id,
          value: rawAnswers[pageIndex][qIndex].rating,
          comment: rawAnswers[pageIndex][qIndex].comment || null,
        })),
      )

      console.log('📦 Payload yang dikirim:', payload)

      const response = await api.post(`${import.meta.env.VITE_API_URL_REMEDIS}api/client/questions/${uuid}`, payload)
      return response.data // kembalikan data full biar service bisa ambil rata-rata
    } catch (error) {
      console.error('Gagal mengirim jawaban survei:', error)
      throw error
    }
  },
}
