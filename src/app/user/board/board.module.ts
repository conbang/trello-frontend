import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoardRoutingModule} from './board-routing.module';
import {MainBoardComponent} from './main-board/main-board.component';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserModule} from '../user.module';
import {CardEditFormComponent} from './card-edit-form/card-edit-form.component';
import {CardCreateFormComponent} from './card-create-form/card-create-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IgxAvatarModule} from 'igniteui-angular';
import { InviteFormComponent } from './invite-form/invite-form.component';

@NgModule({
  declarations: [
    MainBoardComponent,
    CardEditFormComponent,
    CardCreateFormComponent,
    InviteFormComponent,
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
    FormsModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    IgxAvatarModule,
    MatToolbarModule,
    MatCardModule
  ],
  entryComponents: [
    InviteFormComponent,
    CardCreateFormComponent,
    CardEditFormComponent,
  ],
  exports: [
    MainBoardComponent,
    CardEditFormComponent
  ]
})
export class BoardModule {
}
