<template>
    <div>
        <TheNav />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import router from "@/router";
import TheNav from "./components/TheNav.vue";

const title = useTitle();

router.afterEach((to) => {
    title.value = to.meta.title;
});
</script>
