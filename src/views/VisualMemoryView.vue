<template>
    <div>
        <h1 class="text-center">Visual Memory</h1>
    </div>
</template>

<script setup lang="ts">
import { useVisualMemoryStore } from "@/stores/visual-memory";

const visualMemory = useVisualMemoryStore();
visualMemory.initialise([
    { memorizeCount: 3, tileCount: 9, lives: 3 },
    { memorizeCount: 4, tileCount: 9, lives: 3 },
]);
</script>
