<template>
    <div>
        <h1 class="text-center">Visual Memory</h1>
        <section class="w-full surface-card p-4">
            <div class="game-square mx-auto">
                <VisualMemoryHeader />
                <VisualMemoryGrid />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useVisualMemoryStore } from "@/stores/visual-memory";
import VisualMemoryGrid from "@/components/VisualMemoryGrid.vue";
import VisualMemoryHeader from "@/components/VisualMemoryHeader.vue";
import Levels from "@/data/visual-memory.json";

const visualMemory = useVisualMemoryStore();
visualMemory.initialise(Levels.levels);
</script>
