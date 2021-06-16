import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdateComponent} from './update/update.component';
import {ListBoardComponent} from './list-board/list-board.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  }, {
    path: 'boards',
    component: ListBoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
