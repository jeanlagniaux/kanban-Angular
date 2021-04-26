import { Component, OnInit } from '@angular/core';
import { IBoard } from '../model/board';
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
  boards: IBoard[] = [];
  boardName: string = '';

  constructor(private boardService: ApiBoardServiceService,
    private cardService: ApiCardServiceService, private userService: ApiUserServiceService) { }

  // ngOnInit(): void {
  //   this.boardService.getBoards().subscribe((data) => {
  //     data.results.forEach((e, index) => {
  //       console.log(e.BoardID)
  //       this.boards.push(new board(e.BoardID, e.BoardName, e.BoardDesc));
  //     });
  //   });
  // }

  call() {
    this.boardService.getBoards().subscribe( res => {
      this.boards = res.body
    });
  }

  ngOnInit(): void {
     this.call();
    }

}
