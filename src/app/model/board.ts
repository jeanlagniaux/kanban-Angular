export interface IBoard {
    BoardID:   number;
    BoardName: string;
    BoardDesc: string;
}

export class board {
    constructor(public BoardID: number, public BoardName: String, public BoardDesc: String) {
    }
}
