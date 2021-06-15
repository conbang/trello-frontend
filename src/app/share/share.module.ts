import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {SidebarComponent, SidebarDialog} from './sidebar/sidebar.component';
import {FormModule} from '../form/form.module';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import { AddPrivateBoardComponent } from './navbar/add-private-board/add-private-board.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SidebarDialog,
    AddPrivateBoardComponent
  ],
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
    MatDialogModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SidebarDialog
  ],
  entryComponents: [
    SidebarDialog
  ]
})
export class ShareModule { }
