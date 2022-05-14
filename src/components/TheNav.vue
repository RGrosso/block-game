<template>
    <nav>
        <Menubar :model="items" class="w-full flex justify-content-center" />
    </nav>
</template>

<script setup lang="ts">
import { MenuItem } from "primevue/menuitem";
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref<MenuItem[]>([
    {
        label: "Home",
        icon: "pi pi-home",
        to: { name: "home" },
    },
    {
        label: "Visual Memory",
        icon: "pi pi-th-large",
        to: { name: "visualMemory" },
    },
]);
</script>

<style lang="scss">
.p-menubar-root-list {
    margin: 0 auto;
}

.p-menuitem-link.router-link-active-exact span {
    color: var(--primary-500) !important;
}

.p-menuitem-link:hover span {
    color: var(--primary-600) !important;
}
</style>
