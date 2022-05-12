<template>
    <div>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useTitle } from "@vueuse/core";

const title = useTitle();

router.afterEach((to) => {
    title.value = to.meta.title;
});
</script>
