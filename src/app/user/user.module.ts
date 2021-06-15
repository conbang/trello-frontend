import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import {ShareModule} from '../share/share.module';
import {UserRoutingModule} from './user-routing.module';
import {UpdateComponent} from './update/update.component';
import {FormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {IgxAvatarModule} from 'igniteui-angular';
import { ListComponent } from './board/list/list.component';
import { CardComponent } from './board/card/card.component';
import { LabelComponent } from './board/label/label.component';
import {ModalBackdropComponent, ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  providers: [ModalBackdropComponent],
  declarations: [
    HomepageComponent,
    BoardComponent,
    WorkspaceComponent,
    UpdateComponent
  ],
  exports: [
    UpdateComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ShareModule,
        FormsModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
        IgxAvatarModule,
      ModalModule.forRoot()
    ]
})
export class UserModule { }
