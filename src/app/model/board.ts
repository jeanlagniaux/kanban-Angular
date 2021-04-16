export interface BoardService {
    id:          number;
    name:        string;
    description: string;
}

export class board {

    constructor(public id: number, public name: String, public description: String) {
    }
}