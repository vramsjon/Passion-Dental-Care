<template>
  <div class="flex flex-wrap justify-between items-center w-full gap-4 md:gap-0">
    <Link>
      <TextBold>Beranda</TextBold>
    </Link>
    <Link>
      <TextBold>Tentang</TextBold>
    </Link>
    <Link>
      <TextBold>Layanan</TextBold>
    </Link>
    <Link>
      <TextBold>Dokter</TextBold>
    </Link>
  </div>
</template>
<script setup>
import Link from '../atoms/Link.vue'
import TextBold from '../atoms/TextBold.vue'
</script>
