<template>
  <div class="flex justify-between items-center w-full gap-4 lg:gap-6">
    <RouterLink to="/">
      <Link>
        <TextBold>Beranda</TextBold>
      </Link>
    </RouterLink>
    <RouterLink to="/tentang-kami">
      <Link>
        <TextBold class="text-nowrap">Tentang</TextBold>
      </Link>
    </RouterLink>
    <RouterLink to="/layanan">
      <Link>
        <TextBold>Layanan</TextBold>
      </Link>
    </RouterLink>

    <RouterLink to="/tim-dokter">
      <Link>
        <TextBold>Tim Dokter</TextBold>
      </Link>
    </RouterLink>
  </div>
</template>
<script setup>
import Link from '../atoms/Link.vue'
import TextBold from '../atoms/TextBold.vue'
</script>
