<template>
  <ContainerBlue>
    <div
      class="bg-white rounded-3xl w-full lg:w-full min-h-[976px] p-6 flex flex-col lg:flex-row gap-12"
    >
      <!-- Gambar Kiri (Hide di Mobile/Tablet) -->
      <div class="hidden lg:block">
        <Image class="w-[480px] h-[912px] grayscale" src="/images/imagesurvey.png" />
      </div>

      <!-- Konten Kanan -->
      <div v-if="!isSurveyStarted" class="space-y-12 w-full">
        <!-- Step dan Logo -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          <div class="flex gap-2">
            <div class="bg-gray-300 rounded-lg w-[48px] h-[12px] p-2"></div>
            <div class="bg-gray-300 rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-gray-300 rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-gray-300 rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-gray-300 rounded-xl w-[48px] h-[12px] p-2"></div>
            <div class="bg-gray-300 rounded-xl w-[48px] h-[12px] p-2"></div>
          </div>
          <div>
            <Image class="w-[40px] h-[40px]" src="/images/logo.png" />
          </div>
        </div>

        <!-- Judul dan Deskripsi -->
        <div class="space-y-4">
          <Teks1Blue>Survei Kepuasan Pelanggan Passion Dental Care</Teks1Blue>
          <TeksGray>
            Kami sangat menghargai waktu Anda untuk mengisi survei ini. Masukan Anda akan membantu
            kami meningkatkan kualitas layanan di Passion Dental Care.
          </TeksGray>

          <!-- Data Umum -->
          <FontSurvey>Data Umum</FontSurvey>
          <div class="border border-gray-300 rounded-3xl">
            <div class="flex flex-col md:flex-row md:gap-24 p-4 gap-4">
              <div>
                <div>
                  <TeksGray>Nama Lengkap</TeksGray>
                  <TeksGray1>{{ user?.nama ?? '-' }}</TeksGray1>
                </div>
                <div>
                  <TeksGray>Cabang Klinik</TeksGray>
                  <TeksGray1>{{ user?.cabang ?? '-' }}</TeksGray1>
                </div>
              </div>
              <div>
                <div>
                  <TeksGray>Tanggal Kunjungan</TeksGray>
                  <TeksGray1>{{ user?.tanggal_kunjungan ?? '-' }}</TeksGray1>
                </div>
                <div>
                  <TeksGray>Dokter yang Menangani</TeksGray>
                  <TeksGray1>{{ user?.dokter ?? '-' }}</TeksGray1>
                </div>
              </div>
            </div>
          </div>

          <!-- Panduan -->
          <FontSurvey>Cara Pengisian:</FontSurvey>
          <TeksGray>
            <ul class="list-disc space-y-2">
              <li>Untuk pertanyaan dengan skala bintang, berikut panduannya:</li>
              <Image class="w-[265px] h-[44px]" src="/images/starrate.png" />
              <ul class="list-disc ml-6 space-y-1">
                <li>1 Bintang: Sangat Tidak Puas / Sangat Tidak Baik</li>
                <li>2 Bintang: Tidak Puas / Kurang Baik</li>
                <li>3 Bintang: Cukup Puas / Biasa Saja / Cukup Baik</li>
                <li>4 Bintang: Puas / Baik</li>
                <li>5 Bintang: Sangat Puas / Sangat Baik</li>
              </ul>
              <li>Pilih jawaban yang paling sesuai untuk setiap pertanyaan.</li>
              <li>Anda dapat memberikan komentar tambahan pada kolom yang tersedia (opsional).</li>
              <li>Gunakan tombol "Selanjutnya" untuk berpindah antar bagian.</li>
              <li>
                Survei akan selesai setelah Anda menekan tombol "Kirim Survei" di halaman terakhir
              </li>
            </ul>
          </TeksGray>
        </div>

        <!-- Tombol hanya muncul jika uuid sudah tersedia -->
        <Button @click="startSurvey" class="bg-blue-900 w-full sm:w-[405px] h-[56px] text-white font-medium" :disabled="!uuid">
          Selanjutnya
        </Button>
      </div>
      <div v-else>
        <SurveyForm :uuid="uuid" />
      </div>
    </div>
  </ContainerBlue>
</template>

<script setup>
import surveyService from '@/services/surveyService'

import Image from '../atoms/Image.vue'
import FontSurvey from '../atoms/FontSurvey.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import ContainerBlue from '../atoms/ContainerBlue.vue'
import TeksGray from '../atoms/TeksGray.vue'
import TeksGray1 from '../atoms/TeksGray1.vue'
import Button from '../atoms/Button.vue'

import SurveyForm from './SurveyForm.vue'

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isSurveyStarted = ref(false)

const user = ref(null)
const questions = ref([])
const uuid = ref(null)

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  try {
    // Ambil uuid dari params route dulu
    if (route.params.uuid) {
      uuid.value = route.params.uuid
    } else {
      alert('UUID tidak ditemukan')
    }

    // Panggil API pakai uuid yang sudah ditentukan
    const data = await surveyService.getQuestionsByUserId(uuid.value)

    if (data) {
      user.value = {
        nama: data.pasien,
        tanggal_kunjungan: data.date,
        cabang: data.branch,
        dokter: data.dokter,
      }
      questions.value = data.kategori

      // Jika route params berbeda, push ke route dengan uuid terbaru
      if (route.params.uuid !== uuid.value) {
        router.push({ name: 'SurveyPage1', params: { uuid: uuid.value } })
      }
    } else {
      console.warn('Data survey tidak ditemukan')
    }
  } catch (error) {
    console.error('Gagal ambil data:', error)
  }
})

function startSurvey() {
  isSurveyStarted.value = true
}
</script>
