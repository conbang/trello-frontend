import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './form/login/login.component';
import {RegisterComponent} from './form/register/register.component';
import {LayoutWithSidebarComponent} from './layout/layout-with-sidebar/layout-with-sidebar.component';
import {UserModule} from './user/user.module';
import {UpdateComponent} from './user/update/update.component';
import {CreateListComponent} from './user/board/list/create-list/create-list.component';
import {ShowListComponent} from './user/board/list/show-list/show-list.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutWithSidebarComponent,
    loadChildren: () => UserModule
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'update',
    component: UpdateComponent
  }, {
  path: 'create-list',
    component: CreateListComponent
  }, {
  path: 'show-list',
    component: ShowListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
