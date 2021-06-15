import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdateComponent} from './update/update.component';
import {BoardComponent} from './board/board.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
