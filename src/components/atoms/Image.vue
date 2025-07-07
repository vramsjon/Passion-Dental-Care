<template>
    <img :src="src" :alt="alt">
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
    src:{
        type: String,
        required: true,
    },
    alt:{
        Type: String,
        default: 'Image',
    }
})

</script>