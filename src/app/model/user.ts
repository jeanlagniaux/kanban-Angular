export interface UserService {
    mail:     string;
    name:     string;
    myBoards: MyBoardService[];
    cards:    CardService[];
}

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

export class user {

    constructor(public mail: string, public name: String) {
    }
}
