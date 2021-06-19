import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import {MainBoardComponent} from './main-board/main-board.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserModule} from '../user.module';
import { CardEditFormComponent } from './card-edit-form/card-edit-form.component';
import { CardCreateFormComponent } from './card-create-form/card-create-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    MainBoardComponent,
    CardEditFormComponent,
    CardCreateFormComponent,
    CardDetailComponent
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
        MatInputModule,
        FormsModule
    ],
  entryComponents: [
    CardCreateFormComponent,
    CardEditFormComponent,
  ],
  exports: [
    MainBoardComponent,
    CardDetailComponent,
    CardEditFormComponent
  ]
})
export class BoardModule { }
