import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './form/login/login.component';
import {RegisterComponent} from './form/register/register.component';
import {LayoutWithSidebarComponent} from './layout/layout-with-sidebar/layout-with-sidebar.component';
import {UserModule} from './user/user.module';
import {UpdateComponent} from './user/update/update.component';


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
  },{
    path: 'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
