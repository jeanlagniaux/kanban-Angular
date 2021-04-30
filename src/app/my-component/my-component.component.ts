import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBoard, board } from '../model/board';
import { card } from '../model/card';
import { ApiBoardServiceService } from '../service/api-board-service.service';
import { ApiCardServiceService } from '../service/api-card-service.service';
import { ApiUserServiceService } from '../service/api-user-service.service';
import { Router } from '@angular/router';
import { CreateCardComponent } from '../create-card/create-card.component';
import { user } from '../model/user';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ApiBoardServiceService, ApiCardServiceService, ApiUserServiceService, CreateCardComponent]
})

export class MyComponentComponent implements OnInit{
  boards: IBoard[] = [];
  cards: card[] = [];
  users: user[] = [];
  selectedBoardId!: board;
  boardName: String = '';
  boardId: String;

  constructor(private boardService: ApiBoardServiceService,
    private cardService: ApiCardServiceService, private userService: ApiUserServiceService,) { }

  ngOnInit(): void {
    this.boardService.getBoards().subscribe(res => this.boards = res.body)
    this.getUser();
  }

  onClickGo() {
    if (this.selectedBoardId != null) {
      this.cardService.getCardByBoardId(this.selectedBoardId.BoardID).subscribe( res => this.cards = res.body);
      this.boardId = String(this.selectedBoardId.BoardID);
    }
  }

  getUser(){
    this.userService.getUser().subscribe(res => this.users = res.body);
  }

}
