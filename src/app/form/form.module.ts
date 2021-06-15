import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormRoutingModule } from './form-routing.module';
import {FormsModule} from '@angular/forms';
import {IgxAvatarModule} from 'igniteui-angular';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormRoutingModule,
    IgxAvatarModule
  ]
})
export class FormModule { }
