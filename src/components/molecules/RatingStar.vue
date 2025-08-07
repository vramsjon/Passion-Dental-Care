<script setup>
const props = defineProps(['modelValue']) // nilai rating dari 1 sampai 5
const emit = defineEmits(['update:modelValue'])

const setRating = (val) => emit('update:modelValue', val)
</script>

<template>
  <div class="flex gap-1">
    <img
      v-for="i in 5"
      :key="i"
      :src="i <= modelValue ? '/images/startgold.png' : '/images/stargray.png'"
      class="w-6 h-6 cursor-pointer transition"
      @click="setRating(i)"
      alt="bintang"
    />
  </div>
</template>
