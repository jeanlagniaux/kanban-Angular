export interface CardService {
    CardID:      number;
    CardName:    string;
    CardNote:    string;
    CardTODO:    number;
    CardStatus:  string;
    CardEndDate: number;
    tag:         any[];
    CardUrl:     null;
    CardBoard:   CardBoard;
}

export interface CardBoard {
    BoardID:   number;
    BoardName: string;
    BoardDesc: string;
}


export class card {

    constructor(public CardID: number, public CardName: String, public CardNote: String) {
    }
}