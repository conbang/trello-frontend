import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {NgbDropdownConfig, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainBoardComponent} from './user/board/main-board/main-board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {EditTalkComponent} from './user/board/edit-talk/edit-talk.component';
import {ColorPickerDialogComponent} from './user/board/color-picker-dialog/color-picker-dialog.component';
import {DialogBodyComponent} from './user/board/dialog/dialog-body/dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    UserModule,
    NgbModule,
    NgbDropdownModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    // CardModule
  ],
  providers: [NgbDropdownConfig],
  exports: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditTalkComponent,
    ColorPickerDialogComponent,
    DialogBodyComponent
  ]
})
export class AppModule {
}
