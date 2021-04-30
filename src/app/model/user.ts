export interface UserService {
    mail:  string;
    name:  string;
    board: Iboard[];
    card:  CardService[];
}

export interface Iboard {
    BoardID:   number;
    BoardName: string;
    BoardDesc: string;
}

export interface CardService {
    CardID:      number;
    CardName:    string;
    CardNote:    string;
    CardTODO:    number;
    CardStatus:  string;
    CardEndDate: null;
    tag:         any[];
    CardUrl:     null;
    CardBoard:   Iboard;
}


export class user {

    constructor(public mail: string, public name: String) {
    }
}
