import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {CreateListComponent} from './user/board/list/create-list/create-list.component';
import {ShowListComponent} from './user/board/list/show-list/show-list.component';
import {FilterCardLabelComponent} from './user/board/list/filter-card-label/filter-card-label.component';
import {ListModule} from './user/board/list/list.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FilterCardUserComponent} from './user/board/list/filter-card-user/filter-card-user.component';
import {EditTitleListComponent} from './user/board/list/edit-title-list/edit-title-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    ShowListComponent,
    FilterCardLabelComponent,
    FilterCardUserComponent,
    EditTitleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    UserModule,
    ListModule,
    DragDropModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
