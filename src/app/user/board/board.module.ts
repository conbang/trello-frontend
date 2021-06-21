import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoardRoutingModule} from './board-routing.module';
import {MainBoardComponent} from './main-board/main-board.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule,
  MatExpansionModule, MatGridListModule,
  MatInputModule, MatListModule, MatSidenavModule, MatChipsModule, MatAutocompleteModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserModule} from '../user.module';
import { CardEditFormComponent } from './card-edit-form/card-edit-form.component';
import { CardCreateFormComponent } from './card-create-form/card-create-form.component';
import {BoardComponent} from './board.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IgxAvatarModule} from 'igniteui-angular';
// import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    MainBoardComponent,
    CardEditFormComponent,
    CardCreateFormComponent,
    CardCreateFormComponent,
    BoardComponent,
    // ToolsComponent
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
    MatSidenavModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    CardCreateFormComponent,
    CardEditFormComponent,
    // ToolsComponent
  ],
  exports: [
    MainBoardComponent,
    CardEditFormComponent,
    BoardComponent
  ]
})
export class BoardModule {
}
