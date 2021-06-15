import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {SidebarComponent } from './sidebar/sidebar.component';
import {FormModule} from '../form/form.module';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatSelectModule, MatToolbarModule,
} from '@angular/material';
import { GroupFormComponent } from './navbar/group-form/group-form.component';
import {FormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { GroupMenuComponent } from './sidebar/group-menu/group-menu.component';
import { NoftificationComponent } from './navbar/noftification/noftification.component';
import { BoardFormComponent } from './navbar/board-form/board-form.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    GroupFormComponent,
    AlertComponent,
    NoftificationComponent,
    BoardFormComponent,
    GroupMenuComponent
  ],
  entryComponents: [BoardFormComponent],
  imports: [
    FormModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ShareRoutingModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    GroupMenuComponent,
  ],
})
export class ShareModule { }
