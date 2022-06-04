import { createLenghtArrayOf, shuffleArray } from "@/utils/grid";
import { defineStore } from "pinia";
import { State, GameLevel, TileState, GameState } from "./types/visual-memory";

export const useVisualMemoryStore = defineStore("visual-memory", {
    state: (): State => ({
        level: 0,
        levelsConfig: [],
        roundlives: {
            total: 3,
            used: 0,
        },
        gameLives: {
            total: 3,
            used: 0,
        },
        positions: [],
        gameState: GameState.Starting,
    }),
    actions: {
        initialise(levels: GameLevel[]) {
            this.level = 0;
            if (levels[0].lives !== undefined) {
                this.gameLives.total = levels[0].lives;
            }
            this.gameLives.used = 0;

            if (levels.length > 0) {
                this.levelsConfig = levels;
            }
            this.mapPositions();
            this.gameState = GameState.Starting;
            this.startGame();
        },
        startGame() {
            // set timeout for a delay for animation
            setTimeout(() => {
                this.gameState = GameState.Active;
            }, 1000);
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
                const positionArray: TileState[] = [];
                for (let n = offset; n < offset + gridTileWidth; n++) {
                    positionArray.push(tileArray[n]);
                }
                positions.push(positionArray);
            }

            this.positions = positions;
        },
        selectTile(rowIndex: number, index: number) {
            switch (this.positions[rowIndex][index]) {
                case TileState.HiddenMemorize:
                    // show
                    this.positions[rowIndex][index] = TileState.VisibleMemorize;
                    this.checkRemaingTiles();
                    return;

                case TileState.Empty:
                    // incorrect
                    this.positions[rowIndex][index] = TileState.Incorrect;
                    this.removeRoundLife();
                    break;

                default:
                    break;
            }
        },
        removeRoundLife() {
            this.roundlives.used += 1;

            if (this.roundlives.total !== this.roundlives.used) {
                // exit as user still has more round lives
                return;
            }

            // otherwise increment their game lives used
            this.gameLives.used += 1;

            if (this.gameLives.total !== this.gameLives.used) {
                // restart the current level
                this.gameState = GameState.Restarting;
                this.startRound(true);
                return;
            }

            this.gameState = GameState.GameOver;
        },
        checkRemaingTiles() {
            if (this.positions.flat().findIndex((position) => position === TileState.HiddenMemorize) !== -1) {
                // still has hidden memorize tile left
                return;
            }

            this.gameState =
                this.level + 1 === this.levelsConfig.length ? GameState.GameComplete : GameState.RoundComplete;
            this.startRound();
        },
        startRound(restartCurrentRound = false) {
            if (this.gameState !== GameState.RoundComplete && this.gameState !== GameState.Restarting) {
                return;
            }

            setTimeout(() => {
                if (!restartCurrentRound) {
                    this.level++;
                }
                const levelConfig = this.levelsConfig[this.level];

                this.roundlives.used = 0;
                if (levelConfig.lives) {
                    this.roundlives.total = levelConfig.lives;
                }

                this.mapPositions();
                this.gameState = GameState.Starting;
                this.startGame();
            }, 2000);
        },
        isTileVisible(rowIndex: number, index: number) {
            const tile = this.positions[rowIndex][index];

            const isRoundStartingAnim = this.gameState === GameState.Starting && tile === TileState.HiddenMemorize;
            const isTileCorrectlySelected = tile === TileState.VisibleMemorize;

            return isRoundStartingAnim || isTileCorrectlySelected;
        },
        isTileIncorrect(rowIndex: number, index: number) {
            return this.positions[rowIndex][index] === TileState.Incorrect;
        },
    },
    getters: {
        currentLevel: (state) => state.levelsConfig[state.level],
        levelLost: (state) => state.gameLives.total === state.gameLives.used,
        gridRowCount: (state) => (state.positions.length !== 0 ? Math.sqrt(state.positions.length) : 0),
    },
});
