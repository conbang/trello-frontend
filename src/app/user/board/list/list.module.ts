import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ShowListComponent } from './show-list/show-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import { CreateListComponent } from './create-list/create-list.component';

import { EditTitleListComponent } from './edit-title-list/edit-title-list.component';

import {FilterCardLabelComponent} from './filter-card-label/filter-card-label.component';
// @ts-ignore
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterCardUserComponent } from './filter-card-user/filter-card-user.component';
import {FormModule} from '../../../form/form.module';
import {UserModule} from '../../user.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    // ShowListComponent,
    // CreateListComponent,
    // EditTitleListComponent,
    // FilterCardLabelComponent,
    // FilterCardUserComponent
  ],
  exports: [
    // FilterCardUserComponent,
    // EditTitleListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    UserModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    FormModule,
    NgbDropdownModule,
  ]
})
export class ListModule { }
