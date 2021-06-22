import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './form/login/login.component';
import {RegisterComponent} from './form/register/register.component';
import {LayoutWithSidebarComponent} from './layout/layout-with-sidebar/layout-with-sidebar.component';
import {UserModule} from './user/user.module';
import {AuthGuard} from './helper/auth-guard';
import {HomeComponent} from './user/home/home.component';
import {LayoutNoSidebarComponent} from './layout/layout-no-sidebar/layout-no-sidebar.component';
import {BoardModule} from './user/board/board.module';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutWithSidebarComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => UserModule
  },

  {
    path: '',
    component: HomeComponent,
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
    path: 'board/:id',
    component: LayoutNoSidebarComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => BoardModule
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
