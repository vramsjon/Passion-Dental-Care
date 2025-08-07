<template>
  <ContainerBlue class="p-6">
    <div class="bg-white rounded-2xl flex p-6">
      <!-- Gambar Kiri -->
      <div class="hidden md:block">
        <img src="/images/imagesurvey.png" class="w-[480px] h-full object-cover grayscale" />
      </div>

      <!-- Survey Form -->
      <div class="w-full md:w-1/2 p-8 space-y-6">
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
            <Image class="w-[40px] h-[40px]" src="/images/logo.png" />
          </div>
        </div>

        <!-- Daftar Pertanyaan -->
        <div
          v-for="(question, index) in questionBank[currentPage - 1]"
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
            v-if="currentPage < totalPages"
            v-model="responseData[currentPage - 1][index].rating"
          />

          <!-- Komentar -->
          <label class="block text-sm text-gray-500 mt-1">Komentar (Opsional)</label>
          <textarea
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
            :disabled="currentPage === 1"
          >
            Sebelumnya
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
            <RouterLink to="/survey-page2">Kirim</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </ContainerBlue>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import ContainerBlue from '../atoms/ContainerBlue.vue'
import RatingStar from '../molecules/RatingStar.vue'
import Image from '../atoms/Image.vue'
import surveyService from '@/services/surveyService'

const totalPages = 6
const currentPage = ref(1)
const STORAGE_KEY = 'surveyAnswersOnly'

// ✅ Daftar Pertanyaan Lengkap
const questionBank = [
  [
    {
      title: 'Kepuasan Pelayanan Dokter Gigi',
      subtitle: 'Seberapa puas Anda dengan pelayanan dokter gigi yang menangani Anda?',
    },
    {
      title: 'Penjelasan Prosedur dan Tindakan Medis',
      subtitle: 'Apakah dokter menjelaskan prosedur atau tindakan medis dengan jelas dan mudah dimengerti?',
    },
  ],
  [
    {
      title: 'Keramahan dan Sikap Staf Klinik',
      subtitle: 'Bagaimana penilaian Anda terhadap keramahan dan sikap staf (resepsionis/perawat) di klinik kami?',
    },
    {
      title: 'Kebersihan dan Kenyamanan Klinik',
      subtitle: [
        {
          text: 'Apakah Anda merasa nyaman dengan fasilitas di klinik kami?',
        },
        {
          text: 'Bagaimana penilaian Anda terhadap kebersihan klinik kami?',
        },
      ],
    },
  ],
  [
    {
      title: 'Transparansi Biaya',
      subtitle: 'Bagaimana penilaian Anda terhadap kejelasan dan keterbukaan biaya yang dikenakan untuk perawatan Anda?',
    },
    {
      title: 'Kemudahan Proses Follow-up',
      subtitle: 'Apakah proses pengingat atau follow-up (misalnya: jadwal kontrol berikutnya) dari klinik mudah dilakukan dan informatif?',
    },
  ],
  [
    {
      title: 'Cara Admin Menjawab Pertanyaan',
      subtitle: 'Bagaimana penilaian Anda terhadap cara admin klinik menjawab pertanyaan Anda melalui WhatsApp atau media komunikasi lainnya?',
    },
    {
      title: 'Kemudahan Proses Booking',
      subtitle: 'Seberapa mudah proses booking atau penjadwalan janji di klinik kami?',
    },
    {
      title: 'Keramahan Admin saat Membalas Pesan',
      subtitle: 'Bagaimana penilaian Anda terhadap keramahan admin saat membalas pesan Anda?',
    },
  ],
  [
    {
      title: 'Kepuasan Keseluruhan',
      subtitle: 'Secara keseluruhan, seberapa puas Anda dengan layanan yang Anda terima di Passion Dental Care?',
    },
    {
      title: 'Kemungkinan Rekomendasi',
      subtitle: 'Apakah Anda bersedia merekomendasikan Passion Dental Care kepada orang lain (teman/keluarga)?',
    },
  ],
  [
    {
      title: 'Saran, Kritik, atau Pengalaman Tambahan',
      subtitle: 'Kami sangat terbuka untuk saran dan kritik. Silakan sampaikan pengalaman, saran, atau masukan Anda selama berkunjung ke klinik kami.',
    },
  ],
]

// ✅ State jawaban
const responseData = ref(
  questionBank.map((page) =>
    page.map(() => ({
      rating: 0,
      comment: ''
    }))
  )
)

// ✅ Ambil dari localStorage
// onMounted(async () => {
//   const saved = localStorage.getItem(STORAGE_KEY)
//   if (saved) {
//     responseData.value = JSON.parse(saved)
//   }

//   try {
//     const user = await surveyService.getUserById(1)
//     console.log('User:', user)
//   } catch (error) {
//     console.error('Gagal ambil user:', error)
//   }
// })

// ✅ Simpan ke localStorage saat isi berubah
watch(
  responseData,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true }
)

// Navigasi
const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

// ✅ Submit
  const postSurvey = async () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      alert('Data survey tidak ditemukan.')
      return
    }

    try {
      const response = await surveyService.sendSurvey(JSON.parse(data))
      console.log('✅ Respon server:', response.message)
      localStorage.removeItem(STORAGE_KEY)
      alert(response.message || 'Survei berhasil dikirim. Terima kasih!')
    } catch (error) {
      console.error('Error saat mengirim survei:', error)  
      alert('Terjadi kesalahan saat mengirim survei: \n' + error.message)
    }
}
</script>
