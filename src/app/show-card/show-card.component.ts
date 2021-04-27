import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
  

  constructor() {
  }

  ngOnDestroy(): void {
    this.cards = [];
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
