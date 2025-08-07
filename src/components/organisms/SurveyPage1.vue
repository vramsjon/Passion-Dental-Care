<template>
  <ContainerBlue c>
    <div class="bg-white rounded-3xl w-[1,392px] h-[976px] p-6 flex gap-12">
      <div>
        <Image class="w-[480px] h-[912px] grayscale" src="/images/imagesurvey.png" />
      </div>
      <div class="space-y-12">
        <div class="flex w-[700px] justify-between">
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
        <div class="space-y-4">
          <Teks1Blue>Survei Kepuasan Pelanggan Passion Dental Care</Teks1Blue>
          <TeksGray
            >Kami sangat menghargai waktu Anda untuk mengisi survei ini. Masukan Anda akan membantu
            kami meningkatkan kualitas layanan di Passion Dental Care.</TeksGray
          >
          <FontSurvey>Data Umum</FontSurvey>
          <div class="border border-gray-300 rounded-3xl">
            <div>
              <div class="flex gap-24 p-4">
                <div>
                  <div>
                    <TeksGray>Nama Lengkap</TeksGray>
                    <TeksGray1>Eleanor Pena</TeksGray1>
                  </div>
                  <div>
                    <TeksGray>Cabang Klinik</TeksGray>
                    <TeksGray1>Passion Dental Care Geger Kalong</TeksGray1>
                  </div>
                </div>
                <div>
                  <div>
                    <TeksGray>Tanggal Kunjungan</TeksGray>
                    <TeksGray1>Kamis, 31 Juli 2025</TeksGray1>
                  </div>
                  <div>
                    <TeksGray>Dokter yang Menangani</TeksGray>
                    <TeksGray1>Drg. Fieki Izzatul Yazidah</TeksGray1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FontSurvey class="text-nowrap">Cara Pengisian: </FontSurvey>
          <TeksGray>
            <ul class="list-disc">
              <li>Untuk pertanyaan dengan skala bintang, berikut panduannya :</li>
              <Image class="w-[265px] x-[44px]" src="/images/starrate.png" />
              <ul class="list-disc ml-6">
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
        <RouterLink to="/survey-form">
          <div class="flex justify-end items-end w-[700px]">
            <Button class="bg-blue-900 w-[405px] h-[56px] text-white font-medium"
              >Selanjutnya</Button
            >
          </div>
        </RouterLink>
      </div>
    </div>
  </ContainerBlue>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import FontSurvey from '../atoms/FontSurvey.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import ContainerBlue from '../atoms/ContainerBlue.vue'
import TeksGray from '../atoms/TeksGray.vue'
import Button from '../atoms/Button.vue'
</script>
