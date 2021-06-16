import {NgModule, OnInit, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FormModule} from '../form/form.module';
import {
  MatDialogModule, MatExpansionModule,
  MatInputModule, MatSelectModule,
} from '@angular/material';
import {GroupFormComponent} from './navbar/group-form/group-form.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BsModalService} from 'ngx-bootstrap/modal';
import {NoticficationService} from '../service/notificationService/noticfication.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AlertComponent} from './alert/alert.component';
import {GroupMenuComponent} from './sidebar/group-menu/group-menu.component';
import {NoftificationComponent} from './navbar/noftification/noftification.component';
import {BoardFormComponent} from './navbar/board-form/board-form.component';
import {AuthenServiceService} from '../service/authenServie/authen.service';

@NgModule({
  providers: [BsModalService],
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
  entryComponents: [AlertComponent,
    BoardFormComponent],
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
    BsDropdownModule.forRoot(),
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
export class ShareModule implements OnInit {
  notifications: Notification[] = [];
  // @ts-ignore
  modalRef: BsModalRef;

  constructor(public authenService: AuthenServiceService,
              private modalService: BsModalService,
              private noticficationService: NoticficationService) {
  }

  ngOnInit(): void {
    this.getNotification();
    this.connect();
  }

  getNotification() {
    this.noticficationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }

  clearNotification() {
    this.noticficationService.deleteNotificationByUser().subscribe(
      () => {
        this.getNotification();
      }
    );
  }

  connect() {
    this.noticficationService._connect(this);
  }

  getConnect() {
    this.getNotification();
  }
}
