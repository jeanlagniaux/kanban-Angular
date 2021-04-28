import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  myBoardid: string;

  constructor(private routeActive: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.myBoardid = this.routeActive.snapshot.paramMap.get('tab');
  }

}
