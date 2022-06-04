<template>
    <div class="heart-icons flex gap-1">
        <i v-for="index in total - used" :key="`filled-${index}`" class="pi pi-heart-fill" />
        <i v-for="index in used" :key="`empty-${index}`" class="pi pi-heart" />
    </div>
</template>

<script setup lang="ts">
import { PropType, reactive, watchEffect } from "vue";

const props = defineProps({
    total: {
        type: Number as PropType<number>,
        required: true,
    },
    used: {
        type: Number as PropType<number>,
        required: true,
    },
});

const lives = reactive({
    total: props.total,
    used: props.used,
});

watchEffect(() => {
    lives.total = props.total;
    lives.used = props.used;
});
</script>

<style lang="scss" scoped>
.heart-icons i {
    font-size: 1.5rem;
}
</style>
