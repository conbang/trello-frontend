import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import {MainBoardComponent} from './main-board/main-board.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserModule} from '../user.module';
import { CardEditFormComponent } from './card-edit-form/card-edit-form.component';
import { CardCreateFormComponent } from './card-create-form/card-create-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BoardComponent} from './board.component';

@NgModule({
  declarations: [
    MainBoardComponent,
    CardEditFormComponent,
    CardCreateFormComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    BoardRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    UserModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  entryComponents: [
    CardCreateFormComponent,
    CardEditFormComponent,
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
