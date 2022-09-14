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
                :disabled="
                    visualMemory.gameState === GameState.Starting || visualMemory.isTileIncorrect(rowIndex, index)
                "
                type="button"
                @click="handleClick(rowIndex, index)"
                @mousedown="popDownSound.play()"
                @mouseup="popUpOffSound.play()"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { GameState } from "@/stores/types/visual-memory";
import { useVisualMemoryStore } from "@/stores/visual-memory";
import useSound from "@/composables/useSound";
import popDown from "@/assets/audio/pop-down.mp3";
import popUpOff from "@/assets/audio/pop-up-off.mp3";

const visualMemory = useVisualMemoryStore();
const popDownSound = useSound(popDown, { volume: 1 });
const popUpOffSound = useSound(popUpOff, { volume: 1 });

const handleClick = (rowIndex: number, index: number) => {
    visualMemory.selectTile(rowIndex, index);
};
</script>
