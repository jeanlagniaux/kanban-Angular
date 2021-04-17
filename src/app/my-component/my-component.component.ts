import { Component, OnInit } from '@angular/core';
import { board } from '../model/board';
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

  constructor(private boardService: ApiBoardServiceService,
    private cardService: ApiCardServiceService, private userService: ApiUserServiceService) { }

  ngOnInit(): void {
    this.boardService.getBoardById().subscribe((data) => {
      console.log(data)
    }
    )
  }

}
