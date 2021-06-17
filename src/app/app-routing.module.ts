import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './form/login/login.component';
import {RegisterComponent} from './form/register/register.component';
import {LayoutWithSidebarComponent} from './layout/layout-with-sidebar/layout-with-sidebar.component';
import {UserModule} from './user/user.module';
import {AuthGuard} from './helper/auth-guard';
import {HomeComponent} from './user/home/home.component';
import {BoardComponent} from './user/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWithSidebarComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => UserModule
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'board',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
