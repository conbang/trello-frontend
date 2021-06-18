import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
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
  MatListModule, MatSelectModule, MatExpansionModule,
  MatSidenavModule, MatTableModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {CardComponent} from './board/card/card.component';
import { MemberComponent } from './member/member.component';
import { ListBoardComponent } from './list-board/list-board-private/list-board.component';
import { ListBoardGroupComponent } from './list-board/list-board-group/list-board-group.component';
import { ListBoardPublicComponent } from './list-board/list-board-public/list-board-public.component';
import { InviteFormComponent } from './board/invite-form/invite-form.component';

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
    InviteFormComponent
  ],
  entryComponents: [
    InviteFormComponent
  ],
  exports: [
    UpdateComponent,
    HomeComponent,
    CardComponent,
    MemberComponent
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
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule
  ]
})
export class UserModule { }
