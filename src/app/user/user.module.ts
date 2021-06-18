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
  MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {CardComponent} from './board/card/card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    WorkspaceComponent,
    UpdateComponent,
    HomeComponent,
    CardComponent,
  ],
  exports: [
    UpdateComponent,
    HomeComponent,
    CardComponent,
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
    MatMenuModule
  ]
})
export class UserModule { }
