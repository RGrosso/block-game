import { createLenghtArrayOf, shuffleArray } from "@/utils/grid";
import { defineStore } from "pinia";
import { State, GameLevel, TileState } from "./types/visual-memory";

export const useVisualMemoryStore = defineStore("visual-memory", {
    state: (): State => ({
        level: 0,
        levelsConfig: [],
        lives: {
            total: 3,
            used: 0,
        },
        positions: [],
    }),
    actions: {
        initialise(levels: GameLevel[]) {
            this.level = 0;
            if (levels[0].lives !== undefined) {
                this.lives.total = levels[0].lives;
            }
            this.lives.used = 0;

            if (levels.length > 0) {
                this.levelsConfig = levels;
            }
            this.mapPositions();
        },
        mapPositions() {
            // creates array with x hidden tiles and the remaining tiles being empty
            this.positions = shuffleArray([
                ...createLenghtArrayOf(this.currentLevel.memorizeCount, TileState.HiddenMemorize),
                ...createLenghtArrayOf(this.currentLevel.tileCount - this.currentLevel.memorizeCount, TileState.Empty),
            ]);
        },
    },
    getters: {
        currentLevel: (state) => state.levelsConfig[state.level],
    },
});
