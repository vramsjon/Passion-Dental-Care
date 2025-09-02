<template>
  <div class="bg-white rounded-2xl flex">
    <div class="w-full space-y-6">
      <!-- Jika sudah submit, tampilkan halaman terima kasih -->
      <div v-if="isSubmitted" class="flex justify-center items-center h-96">
        <h1 class="text-3xl font-bold text-center">Terima kasih sudah mengisi survei!</h1>
      </div>

      <!-- Form survey, tampilkan jika belum submit -->
      <div v-else>
        <!-- Progress Bar -->

        <div class="flex justify-between">
          <div>
            <div class="flex gap-1 mb-2">
              <div
                v-for="n in totalPages"
                :key="n"
                class="w-6 h-2 rounded-full"
                :class="n <= currentPage ? 'bg-[#1FAAA5]' : 'bg-gray-200'"
              />
            </div>
            <div class="text-sm text-gray-400 font-medium">
              Langkah {{ currentPage }} dari {{ totalPages }}
            </div>
          </div>
          <div>
            <Image class="w-[40px] h-[40px]" src="/logo.png" />
          </div>
        </div>

        <!-- Daftar Pertanyaan -->
        <div class="text-lg font-bold text-gray-700 mb-4 mt-4">
          {{ categories[currentPage - 1] }}
        </div>
        <div
          v-for="(question, index) in questionBank[currentPage - 1] || []"
          :key="index"
          class="space-y-2 pb-4"
        >
          <p class="font-semibold text-gray-800">{{ index + 1 }}. {{ question.title }}</p>

          <div class="text-sm text-gray-600">
            <p v-if="typeof question.subtitle === 'string'">
              {{ question.subtitle }}
            </p>
            <div v-else>
              <p v-for="(line, i) in question.subtitle" :key="i">
                {{ line.text || line }}
              </p>
            </div>
          </div>

          <!-- Rating -->
          <RatingStar
            v-if="responseData[currentPage - 1]"
            v-model="responseData[currentPage - 1][index].rating"
          />

          <!-- Komentar -->
          <label class="block text-sm text-gray-500 mt-1">Komentar (Opsional)</label>
          <textarea
            v-if="responseData[currentPage - 1]"
            v-model="responseData[currentPage - 1][index].comment"
            rows="2"
            placeholder="Tulis komentar Anda di sini..."
            class="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm resize-none"
          />
        </div>

        <!-- Navigasi -->
        <div class="flex justify-between pt-6">
          <button
            @click="prevPage"
            class="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-medium"
      
          >
            Kembali
          </button>
          <button
            v-if="currentPage < totalPages"
            @click="nextPage"
            class="px-4 py-2 bg-[#092A62] text-white rounded-lg font-medium"
          >
            Selanjutnya
          </button>
          <button
            v-else
            @click="postSurvey"
            class="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import SurveyPage1 from './SurveyPage1.vue'
import Swal from 'sweetalert2'
import { ref, onMounted, watch } from 'vue'
import RatingStar from '../molecules/RatingStar.vue'
import Image from '../atoms/Image.vue'
import surveyService from '@/services/surveyService'

const emit = defineEmits(['back'])
const totalPages = ref(0)
const currentPage = ref(1)
const STORAGE_KEY = 'surveyAnswersOnly'
const questionBank = ref([])
const responseData = ref([])
const isSubmitted = ref(false)
const categories = ref([])


const props = defineProps({
  uuid: {
    type: String,
    required: true
  }
})

onMounted(async () => {
  try {
    const res = await surveyService.getQuestionsByUserId(props.uuid)

    const mappedQuestions = Array.isArray(res.kategori)
      ? res.kategori.map((kat) => ({
          category: kat.category,
          questions: Array.isArray(kat.questions)
            ? kat.questions.map((q) => ({
                id: q.id,
                title: q.value.split('\n')[0],
                subtitle: q.value.split('\n').slice(1).filter(Boolean),
              }))
            : [],
        }))
      : []

    questionBank.value = mappedQuestions.map((item) => item.questions)
    categories.value = mappedQuestions.map((item) => item.category)
    totalPages.value = questionBank.value.length

    let initialData = questionBank.value.map((questions) =>
      questions.map(() => ({
        rating: 0,
        comment: '',
      })),
    )

    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        if (Array.isArray(parsed)) {
          initialData = initialData.map((page, pIndex) =>
            page.map((item, qIndex) => ({
              rating: parsed?.[pIndex]?.[qIndex]?.rating ?? 0,
              comment: parsed?.[pIndex]?.[qIndex]?.comment ?? '',
            })),
          )
        }
      } catch (e) {
        console.warn('Gagal parse data lama:', e)
      }
    }

    responseData.value = initialData
  } catch (error) {
    console.error('Error saat mengambil data pertanyaan:', error)
    await Swal.fire({
      icon: 'error',
      title: 'Gagal Memuat Data',
      text: 'Terjadi kesalahan saat mengambil data pertanyaan. Silakan coba lagi.',
      confirmButtonText: 'OK',
    })
    return
  }
})

watch(
  responseData,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true },
)

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1){
    currentPage.value--
  }else{
    emit('back') // Emit back event if already on the first page
  } 

}

const postSurvey = async () => {
  try {
    const averageRating = await surveyService.submitSurveyAnswers(
      props.uuid,
      responseData.value,
      questionBank.value,
    )
    localStorage.removeItem(STORAGE_KEY)
    await Swal.fire({
      icon: 'success',
      title: 'Survei Berhasil',
      text: `Terima kasih sudah mengisi survei! Nilai rata-rata: ${averageRating}`,
      confirmButtonText: 'OK',
    })
    isSubmitted.value = true
  } catch (error) {
    console.error('Error saat mengirim survei:', error)
    await Swal.fire({
      icon: 'error',
      title: 'Gagal Mengirim Survei',
      text: `Tidak dapat mengirim survey: ${error.message || ''}`,
      confirmButtonText: 'OK',
    })
  }
}
</script>
