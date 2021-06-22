import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdateComponent} from './update/update.component';
import {ListBoardComponent} from './list-board/list-board-private/list-board.component';
import {ListBoardGroupComponent} from './list-board/list-board-group/list-board-group.component';
import {ListBoardPublicComponent} from './list-board/list-board-public/list-board-public.component';
import {MemberComponent} from './member/member.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'boards/private',
    component: ListBoardComponent
  },
  {
    path: 'boards/groups/:id',
    component: ListBoardGroupComponent
  },
  {
    path: 'boards/public',
    component: ListBoardPublicComponent
  },
  {
    path: 'groups/:id/members',
    component: MemberComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
