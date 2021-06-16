import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MainBoardComponent} from './main-board.component';
import {DialogModule} from '../dialog/dialog.module';
@NgModule({
  declarations: [
    MainBoardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    DialogModule
  ],
  exports: [
    MainBoardComponent
  ]
})
export class HeaderModule { }
