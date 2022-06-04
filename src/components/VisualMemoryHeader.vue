<template>
    <div class="flex justify-content-center align-items-center gap-3 text-2xl">
        <p>Level: {{ levelNumber + 1 }}</p>
        <LevelLives :total="visualMemory.gameLives.total" :used="visualMemory.gameLives.used" />
    </div>
</template>

<script setup lang="ts">
import { useVisualMemoryStore } from "@/stores/visual-memory";
import { GameState } from "@/stores/types/visual-memory";
import { ref, watch } from "vue";
import LevelLives from "./LevelLives.vue";

const visualMemory = useVisualMemoryStore();
const levelNumber = ref(visualMemory.level);

watch(
    () => visualMemory.gameState,
    () => {
        if (visualMemory.gameState === GameState.Active) {
            levelNumber.value = visualMemory.level;
        }
    }
);
</script>
