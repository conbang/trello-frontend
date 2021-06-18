import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdateComponent} from './update/update.component';
import {BoardComponent} from './board/board.component';
import {ListBoardComponent} from './list-board/list-board-private/list-board.component';
import {ListBoardGroupComponent} from './list-board/list-board-group/list-board-group.component';
import {ListBoardPublicComponent} from './list-board/list-board-public/list-board-public.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'board/:id',
    component: BoardComponent,
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'listBoardPrivate',
    component: ListBoardComponent
  },
  {
    path: 'listBoardGroup',
    component: ListBoardGroupComponent
  },
  {
    path: 'listBoardPublic',
    component: ListBoardPublicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
