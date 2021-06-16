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
import { CardComponent } from './board/card/card.component';
import {ModalBackdropComponent, ModalModule} from 'ngx-bootstrap/modal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatButtonModule, MatCardModule, MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {DrawerComponent} from './board/drawer/drawer.component';
import {EditTalkComponent} from './board/edit-talk/edit-talk.component';
import {NavbarComponent} from '../share/navbar/navbar.component';
import {ColorPickerDialogComponent} from './board/color-picker-dialog/color-picker-dialog.component';
import {ColorChromeModule} from 'ngx-color/chrome';
import {DialogModule} from './board/dialog/dialog.module';

@NgModule({
  providers: [ModalBackdropComponent],
  declarations: [
    HomepageComponent,
    BoardComponent,
    WorkspaceComponent,
    UpdateComponent,
    CardComponent,
    EditTalkComponent,
    DrawerComponent,
    ColorPickerDialogComponent,
  ],
  exports: [
    UpdateComponent,
    NavbarComponent,
    CardComponent,
    DrawerComponent,
    ColorPickerDialogComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ShareModule,
        FormsModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
        IgxAvatarModule,
        ModalModule.forRoot(),
        DragDropModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatSelectModule,
        ColorChromeModule,
        DialogModule,

    ]
})
export class UserModule { }
