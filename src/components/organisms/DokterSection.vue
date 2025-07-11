<template>
  <div class="flex justify-center items-center flex-col">
    <Heading1Blue> Pelayanan dan Perawatan </Heading1Blue>
    <Teks1Blue class="text-center">
      Passion Dental Care siap memberikan berbagai perawatan gigi bersama dokter tebaik untuk
      memberikan senyum sehat untukmu!
    </Teks1Blue>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter1.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Eva Risna</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah dokter gigi yang bekerja dengan penuh semangat,  ramah, suka cerita dan
              terbuka, kreatif & inovatif, suka belajar hal baru, detail dan teliti, terstruktur,
              telaten dan presisi dalam melakukan pekerjaannya sebagai dokter gigi. Saya mempunyai
              passion dalam membantu pasien agar pasien mendapatkan pengunyahan  dan senyum lebih
              baik dengan membuatkan gigi palsu terbaik untuk pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter1.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Eva Risna</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang bekerja dengan penuh semangat,  ramah, suka cerita dan
              terbuka, kreatif & inovatif, suka belajar hal baru, detail dan teliti, terstruktur,
              telaten dan presisi dalam melakukan pekerjaannya sebagai dokter gigi. Saya mempunyai
              passion dalam membantu pasien agar pasien mendapatkan pengunyahan  dan senyum lebih
              baik dengan membuatkan gigi palsu terbaik untuk pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter2.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Kelvin Gohan</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah seorang Periodontis yang menangani masalah jaringan pendukung gigi. Untuk
              Anda yang memiliki masalah seperti gigi goyang, gusi bengkak, infeksi pada gusi, dll.
              mari periksakan gigi Anda di PDC.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter2.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Kelvin Gohan</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah seorang Periodontis yang menangani masalah jaringan pendukung gigi. Untuk
              Anda yang memiliki masalah seperti gigi goyang, gusi bengkak, infeksi pada gusi, dll.
              mari periksakan gigi Anda di PDC.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter3.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Hanna</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah dokter gigi yang bekerja dengan penuh semangat,  ramah, suka cerita dan
              terbuka, kreatif & inovatif, suka belajar hal baru, detail dan teliti, terstruktur,
              telaten dan presisi dalam melakukan pekerjaannya sebagai dokter gigi. Saya mempunyai
              passion dalam membantu pasien agar pasien mendapatkan pengunyahan  dan senyum lebih
              baik dengan membuatkan gigi palsu terbaik untuk pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter3.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Hanna</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang bekerja dengan penuh semangat,  ramah, suka cerita dan
              terbuka, kreatif & inovatif, suka belajar hal baru, detail dan teliti, terstruktur,
              telaten dan presisi dalam melakukan pekerjaannya sebagai dokter gigi. Saya mempunyai
              passion dalam membantu pasien agar pasien mendapatkan pengunyahan  dan senyum lebih
              baik dengan membuatkan gigi palsu terbaik untuk pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter4.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Bela Pramesi</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah dokter gigi yang gaul, asyik, ramah, perfeksionis, suka belajar tentang
              hal baru, peduli, dan profesional. Saya suka mengerjakan penambalan gigi, pembersihan
              karang gigi, pembuatan gigi palsu, dan lainnya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter4.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Bela Pramesi</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang gaul, asyik, ramah, perfeksionis, suka belajar tentang
              hal baru, peduli, dan profesional. Saya suka mengerjakan penambalan gigi, pembersihan
              karang gigi, pembuatan gigi palsu, dan lainnya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter5.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Tiara Kusuma</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah Dokter gigi yang ramah, sabar, dan telaten terhadap pasien. Saya sabar
              dalam menangani dan membujuk pasien anak dalam perawatan. Sudah banyak kasus perawatan
              gigi yang saya tangani selama ini dan pasien merasa puas dengan pelayanan dan
              perawatannya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter5.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Tiara Kusuma</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah Dokter gigi yang ramah, sabar, dan telaten terhadap pasien. Saya sabar
              dalam menangani dan membujuk pasien anak dalam perawatan. Sudah banyak kasus perawatan
              gigi yang saya tangani selama ini dan pasien merasa puas dengan pelayanan dan
              perawatannya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter6.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Winda Galuh Pertiwi</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Halo, saya dokter gigi Winda Galuh Pertiwi, biasa dipanggil dokter Winda. Kata
              pasien-pasien saya, saya dokter gigi yang ramah, rame, sabar, dan telaten, jadi bikin
              mereka tidak takut kalau pas lagi perawatan. So, ayo jangan takut untuk pergi ke
              dokter gigi ya! Saya akan mendengarkan keluhan dan membantu merawat gigi anda dengan
              baik 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter6.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">winda Galuh Pertiwi</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Halo, saya dokter gigi Winda Galuh Pertiwi, biasa dipanggil dokter Winda. Kata
              pasien-pasien saya, saya dokter gigi yang ramah, rame, sabar, dan telaten, jadi bikin
              mereka tidak takut kalau pas lagi perawatan. So, ayo jangan takut untuk pergi ke
              dokter gigi ya! Saya akan mendengarkan keluhan dan membantu merawat gigi anda dengan
              baik 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter7.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Ilham Fadhilah</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Seorang dokter gigi, berasal dari generasi Z namun siap melayani semua pasien dari
              berbagai generasi:) Jangan takut ke dokter gigi! Because Oral health is your Overall
              health.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter7.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Ilham Fadhilah</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Seorang dokter gigi, berasal dari generasi Z namun siap melayani semua pasien dari
              berbagai generasi:) Jangan takut ke dokter gigi! Because Oral health is your Overall
              health.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter8.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Febe Airin Wijaya</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Sebagai drg saya mempunyai bekal dan keterampilan yang sangat baik dalam bidang saya.
              Diperlengkapi dengan karakter saya yang cukup teliti dan detail dalam menangani setiap
              masalah gigi. Saya akan membantu kamu untuk lebih menyadari pentingnya kesehatan gigi
              dan mencapai hal tersebut dengan maksimal.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter8.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Febe Airin Wijaya</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Sebagai drg saya mempunyai bekal dan keterampilan yang sangat baik dalam bidang saya.
              Diperlengkapi dengan karakter saya yang cukup teliti dan detail dalam menangani setiap
              masalah gigi. Saya akan membantu kamu untuk lebih menyadari pentingnya kesehatan gigi
              dan mencapai hal tersebut dengan maksimal.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter9.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Agata Ayu Pratiwi</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya dikenal sebagai dokter gigi yang ramah dan detail. Saya akan menjelaskan secara
              rinci dan bersedia menjawab segala pertanyaan mengenai masalah gigi dan mulut anda
              beserta tindakannya, mulai dari penambalan, pencabutan, pembersihan karang gigi,
              pencerahan warna gigi, gigi palsu dan lain-lain. Saya juga senang berinteraksi dengan
              pasien anak sehingga mereka merasa nyaman dalam menerima perawatan gigi dan mulutnya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter9.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Agata Ayu Pratiwi</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya dikenal sebagai dokter gigi yang ramah dan detail. Saya akan menjelaskan secara
              rinci dan bersedia menjawab segala pertanyaan mengenai masalah gigi dan mulut anda
              beserta tindakannya, mulai dari penambalan, pencabutan, pembersihan karang gigi,
              pencerahan warna gigi, gigi palsu dan lain-lain. Saya juga senang berinteraksi dengan
              pasien anak sehingga mereka merasa nyaman dalam menerima perawatan gigi dan mulutnya.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter10.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Zalfa</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Sebagai dokter gigi yang mencintai segala hal yang dikerjakan dengan detail dan
              hati-hati, saya selalu mengusahakan agar pasien mendapatkan pelayanan terbaik, because
              ur satisfaction is my pleasure
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter10.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Zalfa</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Sebagai dokter gigi yang mencintai segala hal yang dikerjakan dengan detail dan
              hati-hati, saya selalu mengusahakan agar pasien mendapatkan pelayanan terbaik, because
              ur satisfaction is my pleasure
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter11.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Siti Amirah Nublah Shabrina</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Hallo, saya biasa dipanggil drg. Shabrina. Saya adalah dokter gigi yang ramah, detail
              dan selalu berusaha memberikan pelayanan kepada pasien dengan sepenuh hati. Komunikasi
              kepada pasien selalu terjalin dengan baik agar pasien selalu merasa nyaman dan puas
              dengan perawatan yang diberikan. Yuk kita jaga kondisi kesehatan gigi dan mulut
              bersama – sama.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter11.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Siti Amirah Nublah Shabrina</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Hallo, saya biasa dipanggil drg. Shabrina. Saya adalah dokter gigi yang ramah, detail
              dan selalu berusaha memberikan pelayanan kepada pasien dengan sepenuh hati. Komunikasi
              kepada pasien selalu terjalin dengan baik agar pasien selalu merasa nyaman dan puas
              dengan perawatan yang diberikan. Yuk kita jaga kondisi kesehatan gigi dan mulut
              bersama – sama.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter12.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Silmi</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Hai, perkenalkan saya dokter gigi Silmi. Katanya sih pekerjaan dokter gigi ini adalah
              kombinasi dari science, art, dan technics. Maka dari itu saya senang membantu orang-
              orang untuk tidak hanya mendapatkan kesehatan gigi mulut saja, tapi juga senyum
              terbaiknya ! 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter12.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Silmi</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Hai, perkenalkan saya dokter gigi Silmi. Katanya sih pekerjaan dokter gigi ini adalah
              kombinasi dari science, art, dan technics. Maka dari itu saya senang membantu orang-
              orang untuk tidak hanya mendapatkan kesehatan gigi mulut saja, tapi juga senyum
              terbaiknya ! 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter13.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Ali L. Andri</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Sebagai dokter gigi yang ramah, komunikatif dan edukatif, Saya drg Ali L. Andri
              memiliki komitmen untuk memberikan pelayanan yang nyaman serta solusi yang terbaik
              secara profesional untuk meningkatkan quality of life anda.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter13.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Ali L. Andri</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Sebagai dokter gigi yang ramah, komunikatif dan edukatif, Saya drg Ali L. Andri
              memiliki komitmen untuk memberikan pelayanan yang nyaman serta solusi yang terbaik
              secara profesional untuk meningkatkan quality of life anda.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter14.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Christina S Healthyni</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya telah melayani lebih dari 20 tahun, saya menghargai dan mendengarkan keluhan
              pasien, memeriksa, menolong pasien memahami kondisi mulut dan giginya, Saya juga
              dikenal bersahabat, sabar dan efisien dalam melayani pasien lanjut usia dan anak. Saya
              memiliki minat khusus terhadap penelitian kanker mulut dan telah menjalani studi
              bioteknologi serta “Regenerative medicine and tissue engineering” di Italia untuk
              mempelajari penyembuhan jaringan yang lebih baik.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter14.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Christina S Healthyni</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya telah melayani lebih dari 20 tahun, saya menghargai dan mendengarkan keluhan
              pasien, memeriksa, menolong pasien memahami kondisi mulut dan giginya, Saya juga
              dikenal bersahabat, sabar dan efisien dalam melayani pasien lanjut usia dan anak. Saya
              memiliki minat khusus terhadap penelitian kanker mulut dan telah menjalani studi
              bioteknologi serta “Regenerative medicine and tissue engineering” di Italia untuk
              mempelajari penyembuhan jaringan yang lebih baik.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter15.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Charmelita Clara</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah dokter gigi yang bekerja dengan sepenuh hati, ramah, dan profesional dalam
              merawat pasien. Setiap pasien memiliki kebutuhan perawatan gigi yang berbeda, saya
              berusaha untuk mendengarkan keluhan pasien dengan baik dan merancangkan rencana
              perawatan yang sesuai dengan kebutuhan dan keinginan pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter15.png" />
        <div class="absolute top-[220px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class=""> Charmelita Clara</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang bekerja dengan sepenuh hati, ramah, dan profesional dalam
              merawat pasien. Setiap pasien memiliki kebutuhan perawatan gigi yang berbeda, saya
              berusaha untuk mendengarkan keluhan pasien dengan baik dan merancangkan rencana
              perawatan yang sesuai dengan kebutuhan dan keinginan pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter16.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Nisyah</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Hallo, saya drg Nisyah! Saya punya komitmen untuk terus belajar hal baru agar bisa
              bantu pasien – pasien saya memecahkan masalah gigi dan mulutnya, “Painless and Comfort
              treatment” selalu jadi tujuan utama saya. Saya juga suka ngobrol, jadi… yuk ngobrolin
              treatment gigi bareng saya. Salam sehat 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter16.png" />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Nisyah</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Hallo, saya drg Nisyah! Saya punya komitmen untuk terus belajar hal baru agar bisa
              bantu pasien – pasien saya memecahkan masalah gigi dan mulutnya, “Painless and Comfort
              treatment” selalu jadi tujuan utama saya. Saya juga suka ngobrol, jadi… yuk ngobrolin
              treatment gigi bareng saya. Salam sehat 
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter17.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Meriyati Pratama M</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Haii... Saya dokter Merry💕, sebagai dokter gigi yang ramah, komunikatif dan
              terampil.. Saya siap mengembalikan Senyum dan percaya diri kamu😉 yukkk Cek kesehatan
              gigi dan mulutmu di Passion Dental Care.. "Start your day with gratitude and beautiful
              smile✨"
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter17.png" />
        <div class="absolute top-[210px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Meriyati Pratama</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Haii... Saya dokter Merry💕, sebagai dokter gigi yang ramah, komunikatif dan
              terampil.. Saya siap mengembalikan Senyum dan percaya diri kamu😉 yukkk Cek kesehatan
              gigi dan mulutmu di Passion Dental Care.. "Start your day with gratitude and beautiful
              smile✨"
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter18.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <Heading1 class="text-nowrap">Felix Phang </Heading1>
              <p class="text-5xl text-white text-nowrap">drg., Sp.Prost</p>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah seorang dokter gigi spesialis prostodonsia yang menangani masalah
              fungsional pengunyahan dan estetika akibat kehilangan gigi. Saya mempunyai misi untuk
              membantu serta berdiskusi mengenai perawatan gigi tiruan yang tepat untuk anda. Untuk
              anda yang membutuhkan gigi tiruan lepasan, jembatan, crown, veneer, implant dll serta
              memiliki keluhanmengunyah, ingin senyuman lebih indah, mari konsultasikan bersama kami
              di klinik PDC.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter18.png" />
        <div class="absolute top-[190px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <Heading1 class="">Felix Phang</Heading1>
              <p class="text-2xl text-white text-nowrap">drg., Sp.Prost</p>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang bekerja dengan penuh semangat,  ramah, suka cerita dan
              terbuka, kreatif & inovatif, suka belajar hal baru, detail dan teliti, terstruktur,
              telaten dan presisi dalam melakukan pekerjaannya sebagai dokter gigi. Saya mempunyai
              passion dalam membantu pasien agar pasien mendapatkan pengunyahan  dan senyum lebih
              baik dengan membuatkan gigi palsu terbaik untuk pasien.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter19.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Fieki Izzatul Yazidah</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Sebagai dokter gigi, saya akan mengutamakan kepuasan pasien. Saya akan memeriksa
              pasien berdasarkan keluhan dan masalah gigi yg ada lalu menjelaskan kepada pasien apa
              saja masalah gigi yg ada dan tindakan yg perlu dilakukan. Saya sangat terbuka dengan
              pasien jika pasien bertanya tentang masalah yg ada di rongga mulut maupun macam-macam
              perawatan gigi yg pasien ingin ketahui. Saya juga berusaha untuk menyesuaikan kondisi
              ekonomi dan sosial pasien dengan perawatan yg bisa dilakukan untuk keluhan gigi
              pasien. Selain itu saya juga dikenal sebagai dokter gigi yg ramah dengan anak,
              sehingga pasien anak dapat merasa aman dan nyaman melakukan pemeriksaan dan perawatan
              gigi.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image
          class="absolute top-[-125px] left-6 w-[250px]"
          src="/images/dokter19.png"
        />
        <div class="absolute top-[140px]">
          <div class="flex flex-col space-y-2">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Fieki Izzatul Yazidah</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Sebagai dokter gigi, saya akan mengutamakan kepuasan pasien. Saya akan memeriksa
              pasien berdasarkan keluhan dan masalah gigi yg ada lalu menjelaskan kepada pasien apa
              saja masalah gigi yg ada dan tindakan yg perlu dilakukan. Saya sangat terbuka dengan
              pasien jika pasien bertanya tentang masalah yg ada di rongga mulut maupun macam-macam
              perawatan gigi yg pasien ingin ketahui. Saya juga berusaha untuk menyesuaikan kondisi
              ekonomi dan sosial pasien dengan perawatan yg bisa dilakukan untuk keluhan gigi
              pasien. Selain itu saya juga dikenal sebagai dokter gigi yg ramah dengan anak,
              sehingga pasien anak dapat merasa aman dan nyaman melakukan pemeriksaan dan perawatan
              gigi.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute right-[-150px] top-[-90px]"
          src="/images/dokter20.png"
        />
        <div class="absolute left-0 top-[60px] pl-4">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Faradilla Kharisma</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Saya adalah dokter gigi yang saat ini sedang menjalani pendidikan dokter gigi
              spesialis ortodonti Estetika gigi adalah kunci dalam senyum seseorang. scalling,
              penambalan gigi, pembuatan mahkota gigi, bleaching & pencabutan merupakan fokus utama
              perawatan yg akan saya berikan untuk menunjang estetika. Kenyamanan pasien, komunikasi
              dan efisiensi dalam perawatan menjadi kunci utama kami dalam memberikan perawatan.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] left-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image class="absolute top-[-125px]" src="/images/dokter20.png" />
        <div class="absolute top-[200px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Faradilla Kharisma</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Saya adalah dokter gigi yang saat ini sedang menjalani pendidikan dokter gigi
              spesialis ortodonti Estetika gigi adalah kunci dalam senyum seseorang. scalling,
              penambalan gigi, pembuatan mahkota gigi, bleaching & pencabutan merupakan fokus utama
              perawatan yg akan saya berikan untuk menunjang estetika. Kenyamanan pasien, komunikasi
              dan efisiensi dalam perawatan menjadi kunci utama kami dalam memberikan perawatan.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
  <div class="lg:flex lg:justify-center lg:items-center lg:mt-40">
    <div v-if="isLargeScreen">
      <TimDokterCard class="relative">
        <Image
          class="w-[622px] absolute left-[-150px] top-[-90px]"
          src="/images/dokter21.png"
        />
        <div class="absolute right-0 top-[60px]">
          <div class="flex flex-col w-[494px] space-y-4">
            <div class="flex">
              <p class="text-5xl text-white">Drg.</p>
              <Heading1>Dela Puspita</Heading1>
            </div>
            <Paragraph3 class="pr-4">
              Dokter gigi berpengalaman dalam memberikan pelayanan beekualitas tinggi, Berkomitemen
              kuat terhadap kesehatan gigi pasien dan kemahiran dalam mendiagnosis dan merawat
              berbagai penyakit mulut. Memiliki keterampilan komunikasi yang baik, mampu membangun
              hubungan yang kuat dan mengedukasi pasien untuk menjaga kebersihan mulut yang tepat.
              Dan mahir dalam menggunakan teknologi gigi terbaru dan berusaha memanfaatkan
              keterampilan dan pengalaman untuk memberikan pelayanan gigi yang maksimal.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[280px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
    <div v-else class="flex justify-center items-center mt-40">
      <TimDokterCard class="relative">
        <Image
          class="absolute top-[-125px] left-6 w-[250px]"
          src="/images/dokter21.png"
        />
        <div class="absolute top-[160px]">
          <div class="flex flex-col space-y-4">
            <div class="flex justify-center">
              <p class="text-2xl text-white">Drg.</p>
              <Heading1 class="">Dela Puspita</Heading1>
            </div>
            <Paragraph3 class="px-4 text-center">
              Dokter gigi berpengalaman dalam memberikan pelayanan beekualitas tinggi, Berkomitemen
              kuat terhadap kesehatan gigi pasien dan kemahiran dalam mendiagnosis dan merawat
              berbagai penyakit mulut. Memiliki keterampilan komunikasi yang baik, mampu membangun
              hubungan yang kuat dan mengedukasi pasien untuk menjaga kebersihan mulut yang tepat.
              Dan mahir dalam menggunakan teknologi gigi terbaru dan berusaha memanfaatkan
              keterampilan dan pengalaman untuk memberikan pelayanan gigi yang maksimal.
            </Paragraph3>
          </div>
        </div>
        <Button class="absolute bg-[#144572] py-4 px-12 bottom-[-25px] right-[70px]">
          <Teks2>Jadwal Dokter</Teks2>
        </Button>
      </TimDokterCard>
    </div>
  </div>
</template>
<script setup>
import Heading1Blue from '../atoms/Heading1Blue.vue'
import Teks1Blue from '../atoms/Teks1Blue.vue'
import TimDokterCard from '../molecules/TimDokterCard.vue'
import Image from '../atoms/Image.vue'
import Heading1 from '../atoms/Heading1.vue'
import Paragraph3 from '../atoms/Paragraph3.vue'
import Button from '../atoms/Button.vue'
import Teks2 from '../atoms/Teks2.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Cek ukuran layar
const isLargeScreen = ref(window.innerWidth >= 1024)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
