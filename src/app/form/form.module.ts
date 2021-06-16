import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormRoutingModule } from './form-routing.module';
import {FormsModule} from '@angular/forms';
import { DialogComponent } from './register/dialog/dialog.component';
import {MatDialogModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DialogComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    FormRoutingModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class FormModule {}
