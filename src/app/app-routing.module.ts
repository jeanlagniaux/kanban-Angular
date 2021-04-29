import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {path : 'createCard/:tab', component: CreateCardComponent},
  //{path : 'createCard/', component: CreateCardComponent},
  {path : '', component: MyComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
