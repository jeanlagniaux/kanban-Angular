import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path : 'createCard/:tab', component: CreateCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
