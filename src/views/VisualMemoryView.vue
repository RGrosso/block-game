<template>
    <div>
        <h1 class="text-center">Visual Memory</h1>
        <section class="w-full surface-card p-4">
            <div class="game-square mx-auto">
                <VisualMemoryGrid />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useVisualMemoryStore } from "@/stores/visual-memory";
import VisualMemoryGrid from "@/components/VisualMemoryGrid.vue";

const visualMemory = useVisualMemoryStore();
visualMemory.initialise([
    { memorizeCount: 3, tileCount: 9, lives: 3 },
    { memorizeCount: 4, tileCount: 9, lives: 3 },
]);
</script>
