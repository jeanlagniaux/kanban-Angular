export interface CardService {
    id:       number;
    name:     string;
    note:     string;
    timeToDO: number;
    status:   string;
    endDate:  Date;
    tags:     string[];
    url:      string;
    myBoard:  MyBoardService;
}

export interface MyBoardService {
    id:          number;
    name:        string;
    description: string;
}

export class card {

    constructor(public id: number, public name: String, public note: String) {
    }
}