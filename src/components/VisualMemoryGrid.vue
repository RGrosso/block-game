<template>
    <div class="tile-container">
        <div v-for="(positions, rowIndex) in visualMemory.positions" :key="`row-${rowIndex}`" class="tile-row">
            <button
                v-for="(tile, index) in visualMemory.positions[rowIndex]"
                :key="`tile-${index}`"
                class="tile"
                :class="{
                    show: gameState === GameState.Starting && tile === TileState.HiddenMemorize,
                }"
                :disabled="gameState === GameState.Starting"
                type="button"
                @click="onTileClick"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useVisualMemoryStore } from "@/stores/visual-memory";
import { ref } from "vue";
import { TileState } from "@/stores/types/visual-memory";

enum GameState {
    Starting,
    Active,
}

const visualMemory = useVisualMemoryStore();
const gameState = ref(GameState.Starting);

const startGame = () => {
    setTimeout(() => {
        gameState.value = GameState.Active;
    }, 1000);
};

const onTileClick = () => {
    if (gameState.value === GameState.Starting) {
        return;
    }
};

startGame();
</script>
