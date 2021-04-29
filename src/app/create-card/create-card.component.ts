import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { card } from '../model/card';
import { ApiCardServiceService } from '../service/api-card-service.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  myBoardid: number;
  cards: card[] = [];
  checkoutForm = this.formBuilder.group({
    CardName: '',
    CardStatus: '',
    CardEndDate: '',
    CardNote: '',
    CardBoard: {
      BoardID: Number(this.routeActive.snapshot.paramMap.get('tab'))
    }
  })

  constructor(private routeActive: ActivatedRoute, private formBuilder: FormBuilder, private cardService: ApiCardServiceService) { 
  }

  ngOnInit(): void {
    this.myBoardid = Number(this.routeActive.snapshot.paramMap.get('tab'));
    console.log(this.myBoardid);
  }

  onSubmit(): void {
    console.log(this.myBoardid);
    console.warn('Création de la carte avec les données :', this.checkoutForm.value);
    this.cardService.postCreatCard(this.checkoutForm.value).subscribe(res => console.log(res))
    //this.checkoutForm.reset();
  }



}
