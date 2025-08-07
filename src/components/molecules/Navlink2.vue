<template>
  <div class="flex flex-wrap justify-between items-center w-full gap-4 md:gap-0">
    <RouterLink to="/promo">
      <Link>
        <TextBold>Promo</TextBold>
      </Link>
    </RouterLink>
    <RouterLink to="/artikel">
      <Link>
        <TextBold>Artikel</TextBold>
      </Link>
    </RouterLink>
    <RouterLink to="/lokasi-klinik">
      <Link>
      <TextBold>Lokasi</TextBold>
    </Link>
    </RouterLink>
    
    <Link>
      <TextBold>Reservasi</TextBold>
    </Link>
  </div>
</template>
<script setup>
import TextBold from '../atoms/TextBold.vue'
import Link from '../atoms/Link.vue'
</script>
