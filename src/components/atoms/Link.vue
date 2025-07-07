<template>
    <a :href="href"
    @click="handleClick">
        <slot></slot>
    </a>
</template>
<script setup>
import { defineProps, defineEmits  } from 'vue'

//props untuk link
defineProps({
    href:{
        type:String,
        default:'#'
    }
})

//emit untuk evenvt custom
const emit = defineEmits(['click']);

//Handle click link
const handleClick = (event) => {
    emit('click', event);
};
</script>