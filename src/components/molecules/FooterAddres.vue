<template>
  <div class="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-10 lg:gap-y-20">
    <div class="bg-[#144572] rounded-2xl lg:w-[341px] h-[102px] lg:h-[162px] w-full relative">
      <Image class="absolute w-30 lg:w-50 lg:left-[-15px] top-[6px]" src="/images/tracking.png" />

      <Teks3 class="absolute lg:left-[100px] lg:top-[30px] left-[50px] top-[15px]">Lokasi Klinik Bandung</Teks3>
      <Teks2 class="absolute lg:left-[130px] lg:top-[60px] left-[60px] top-[30px]">Passion Dental Care</Teks2>
    </div>
    <div class="w-full lg:w-[341px] lg:h-[162px]">
      <div class="flex lg:gap-4 gap-2 justify-center items-center">
        <Image class="w-5 lg:w-[40px] h-5 lg:h-[48px]" src="/images/alamat.png" />
        <Heading2>Passion Dental Care Gegerkalong</Heading2>
      </div>
      <div>
        <Paragraph3 class="pl-6 lg:pl-15">
          Jl. Sukahaji No. 12, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152,
          0812-9009-9562
        </Paragraph3>
      </div>
    </div>
    <div class="w-full lg:w-[380px] lg:h-[162px]">
      <div class="flex gap-2 lg:gap-4 justify-center items-center">
        <Image class="w-4 h-5 lg:w-[40px] lg:h-[48px]" src="/images/alamat.png" />
        <Heading2>Passion Dental Care Parongpong-Lembang</Heading2>
      </div>
      <div>
        <Paragraph3 class="pl-6 lg:pl-15">
          Komplek Villa Istana Bunga, Jl. Kolonel Masturi No. 6, Kec. Parongpong, Kab. Bandung Barat, Jawa Barat 40559, 0896-4647-2860
        </Paragraph3>
      </div>
    </div>
    <div class="w-full lg:w-[341px] lg:h-[162px]">
      <div class="flex gap-2 lg:gap-4 justify-center items-center">
        <Image class="w-4 h-5 lg:w-[40px] lg:h-[48px]" src="/images/alamat.png" />
        <Heading2>Passion Dental Care Buah Batu-Ciwastra</Heading2>
      </div>
      <div>
        <Paragraph3 class="pl-6 lg:pl-15">
          Jl. Ciwastra 99, Margasari, Kec. Buahbatu, Kota Bandung, Jawa Barat 40287, 0821-1700-0614
        </Paragraph3>
      </div>
    </div>
    <div class="w-full lg:w-[341px] lg:h-[162px]">
      <div class="flex gap-2 lg:gap-4 justify-center items-center">
        <Image class="w-4 h-5 lg:w-[40px] lg:h-[48px]" src="/images/alamat.png" />
        <Heading2>Passion Dental Care Buah Sarijadi</Heading2>
      </div>
      <div>
        <Paragraph3 class="pl-6 lg:pl-15">
          Jl Perintis No. 7, Sarijadi, Kec. Sukasari, Kota Bandung, 0812-1380-7090
        </Paragraph3>
      </div>
    </div>
    <div class="lg:w-[341px] lg:h-[162px]">
      <div class="flex gap-2 lg:gap-4 justify-center items-center">
        <Image class="w-4 h-5 lg:w-[40px] lg:h-[48px]" src="/images/alamat.png" />
        <Heading2>Passion Dental Care Melong Cijerah</Heading2>
      </div>
      <div>
        <Paragraph3 class="pl-6 lg:pl-15">
          Jl. Bojong Raya No.101, Caringin, Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40212, 0821-1700-0624
        </Paragraph3>
      </div>
    </div>
  </div>
  <div class="bg-white h-[3px] w-full mt-20"></div>
  <div class="flex justify-between mt-10">
    <div>
        <Paragraph3>2025 Passion Dental Care</Paragraph3>
    </div>
    <div class="flex gap-6">
        <Paragraph3>Terms and Conditions</Paragraph3>
        <Paragraph3>Privacy Policy</Paragraph3>
        <Paragraph3>FAQ</Paragraph3>
    </div>
  </div>
</template>
<script setup>
import Image from '../atoms/Image.vue'
import Teks2 from '../atoms/Teks2.vue'
import Teks3 from '../atoms/Teks3.vue'
import Heading2 from '../atoms/Heading2.vue'
import Paragraph3 from '../atoms/Paragraph3.vue'
</script>
