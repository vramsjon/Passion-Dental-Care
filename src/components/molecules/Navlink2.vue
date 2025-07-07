<template>
  <div class="flex flex-wrap justify-between items-center w-full gap-4 md:gap-0">
    <Link>
      <TextBold>Promo</TextBold>
    </Link>
    <Link>
      <TextBold>Artikel</TextBold>
    </Link>
    <Link>
      <TextBold>Lokasi</TextBold>
    </Link>
    <Link>
      <TextBold>Reservasi</TextBold>
    </Link>
  </div>
</template>
<script setup>
import TextBold from '../atoms/TextBold.vue'
import Link from '../atoms/Link.vue'
</script>
