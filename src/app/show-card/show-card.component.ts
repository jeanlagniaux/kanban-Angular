import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { board } from '../model/board';
import { card } from '../model/card';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})

export class ShowCardComponent implements OnInit, OnDestroy {

  @Input('board')
  selectedBoardId!: board;

  @Input('card')
  cards!: card[];
  

  constructor(private router: Router) {
  }

  ngOnDestroy(): void {
    this.cards = [];
  }

  ngOnInit(): void {
  }
  
  creatCard() {
      this.router.navigate(['/createCard', this.selectedBoardId.BoardID]);    
  }

}
