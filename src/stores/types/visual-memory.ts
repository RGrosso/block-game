export interface State {
    level: number;
    levelsConfig: GameLevel[];
    lives: GameLives;
    positions: TileState[][];
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
