import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import {ShareModule} from '../share/share.module';
import {UserRoutingModule} from './user-routing.module';
import {UpdateComponent} from './update/update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {IgxAvatarModule} from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
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
import { MemberComponent } from './member/member.component';
import { ListBoardComponent } from './list-board/list-board-private/list-board.component';
import { ListBoardGroupComponent } from './list-board/list-board-group/list-board-group.component';
import { ListBoardPublicComponent } from './list-board/list-board-public/list-board-public.component';
import {AddMemberForCardComponent} from './board/add-member-for-card/add-member-for-card.component';
import {CardDetailComponent} from './board/card-detail/card-detail.component';
import {CommentComponent} from './board/comment/comment.component';
import {CreateLabelComponent} from './board/create-label/create-label.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
    AddMemberForCardComponent,
    CommentComponent,
    CreateLabelComponent,
  ],
  exports: [
    UpdateComponent,
    HomeComponent,
    CardComponent,
    MemberComponent,
    AddMemberForCardComponent,
    CommentComponent,
    CreateLabelComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    MemberComponent,
    ListBoardComponent,
    ListBoardGroupComponent,
    ListBoardPublicComponent
  ],
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
  ]
})
export class UserModule { }
