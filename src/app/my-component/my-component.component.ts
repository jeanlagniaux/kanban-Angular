import { Component, OnInit } from '@angular/core';
import { IBoard, board } from '../model/board';
import { card } from '../model/card';
import { ApiBoardServiceService } from '../service/api-board-service.service';
import { ApiCardServiceService } from '../service/api-card-service.service';
import { ApiUserServiceService } from '../service/api-user-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ApiBoardServiceService, ApiCardServiceService, ApiUserServiceService]
})

export class MyComponentComponent implements OnInit {
  boards: board[] = [];
  cards: card[] = [];
  selectedBoardId!: board
  boardName: string = '';

  constructor(private boardService: ApiBoardServiceService,
    private cardService: ApiCardServiceService, private userService: ApiUserServiceService) { }

  ngOnInit(): void {

    this.boardService.getBoards().subscribe((data) => {
      data.forEach((e, index) => {
        this.boards.push(new board(e.BoardID, e.BoardName, e.BoardDesc));
      });
      console.log(this.boards)
    });
  }

  onClickGo() {
    if (this.selectedBoardId != null) {
      this.cardService.getCardByBoardId(this.selectedBoardId.BoardID).subscribe((data) => {
        data.forEach((e, index) => {
          this.cards.push(new card(e.CardID, e.CardName, e.CardNote));
        });
      }); 
    }
    
  }


  // call() {
  //   this.boardService.getBoards().subscribe( res => {
  //     this.boards = res.body
  //     console.log(res)
  //   });
  // }

  // ngOnInit(): void {
  //    this.call();
  //   }

}
