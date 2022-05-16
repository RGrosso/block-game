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
            const memorizeTiles = createLenghtArrayOf(this.currentLevel.memorizeCount, TileState.HiddenMemorize);
            const emptyTiles = createLenghtArrayOf(
                this.currentLevel.tileCount - this.currentLevel.memorizeCount,
                TileState.Empty
            );
            const tileArray = shuffleArray([...memorizeTiles, ...emptyTiles]);

            // map positions to a multi-dimensional array
            const positions: State["positions"] = [];
            const gridTileWidth = Math.sqrt(tileArray.length);
            for (let i = 0; i < gridTileWidth; i++) {
                const offset = i * gridTileWidth;
                positions.push([tileArray[offset], tileArray[offset + 1], tileArray[offset + 2]]);
            }

            this.positions = positions;
            console.log(this.positions);
        },
        selectTile(rowIndex: number, columnIndex: number) {
            switch (this.positions[rowIndex][columnIndex]) {
                case TileState.HiddenMemorize:
                    // user selected a correct position.
                    this.positions[rowIndex][columnIndex] = TileState.VisibleMemorize;
                    break;

                case TileState.Empty:
                    // user selected a tile without a memorize tile
                    this.lives.used++;
                    this.positions[rowIndex][columnIndex] = TileState.Incorrect;
                    break;

                default:
                    // for all others, do nothing
                    break;
            }
        },
    },
    getters: {
        currentLevel: (state) => state.levelsConfig[state.level],
        levelLost: (state) => state.lives.total === state.lives.used,
        gridRowCount: (state) => (state.positions.length !== 0 ? Math.sqrt(state.positions.length) : 0),
    },
});
