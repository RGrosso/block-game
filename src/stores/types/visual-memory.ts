export interface State {
    level: number;
    levelsConfig: GameLevel[];
    roundlives: GameLives;
    gameLives: GameLives;
    positions: TileState[][];
    gameState: GameState;
}

export interface GameLevel {
    tileCount: number;
    memorizeCount: number;
    lives?: number;
}

export interface GameLives {
    total: number;
    used: number;
}

export enum TileState {
    Empty,
    HiddenMemorize,
    VisibleMemorize,
    Incorrect,
}

export enum GameState {
    Starting,
    Active,
    RoundComplete,
    GameOver,
    GameComplete,
    Restarting,
}
