import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {ShareModule} from '../share/share.module';
import {UserRoutingModule} from './user-routing.module';
import {UpdateComponent} from './update/update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {IgxAvatarModule} from 'igniteui-angular';
import {HomeComponent} from './home/home.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {CardComponent} from './board/card/card.component';
import {MemberComponent} from './member/member.component';
import {ListBoardComponent} from './list-board/list-board-private/list-board.component';
import {ListBoardGroupComponent} from './list-board/list-board-group/list-board-group.component';
import {ListBoardPublicComponent} from './list-board/list-board-public/list-board-public.component';
import {CreateLabelComponent} from './board/create-label/create-label.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { InviteFormComponent } from './member/invite-form/invite-form.component';
import { ConfirmDeleteComponent } from './member/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    HomepageComponent,
    WorkspaceComponent,
    UpdateComponent,
    HomeComponent,
    CardComponent,
    MemberComponent,
    ListBoardComponent,
    ListBoardGroupComponent,
    ListBoardPublicComponent,
    CreateLabelComponent,
    InviteFormComponent,
    ConfirmDeleteComponent,
  ],
  exports: [
    UpdateComponent,
    HomeComponent,
    CardComponent,
    MemberComponent,
    CreateLabelComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
    MemberComponent,
    ListBoardComponent,
    ListBoardGroupComponent,
    ListBoardPublicComponent
  ],
  entryComponents: [InviteFormComponent, ConfirmDeleteComponent],

  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    IgxAvatarModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
  ],
})
export class UserModule {
}
