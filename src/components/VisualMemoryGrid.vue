<template>
    <div class="tile-container">
        <div v-for="(positions, rowIndex) in visualMemory.positions" :key="`row-${rowIndex}`" class="tile-row">
            <button
                v-for="(tile, index) in visualMemory.positions[rowIndex]"
                :key="`tile-${index}`"
                class="tile"
                :class="{
                    correct: visualMemory.isTileVisible(rowIndex, index),
                    incorrect: visualMemory.isTileIncorrect(rowIndex, index),
                }"
                :disabled="visualMemory.gameState === GameState.Starting"
                type="button"
                @click="visualMemory.selectTile(rowIndex, index)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { GameState } from "@/stores/types/visual-memory";
import { useVisualMemoryStore } from "@/stores/visual-memory";

const visualMemory = useVisualMemoryStore();
</script>
