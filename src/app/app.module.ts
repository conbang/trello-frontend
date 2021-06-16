import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ShareModule} from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {TokenInterceptor} from './helper/token-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
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
    ShareModule,
    NgbModule,
    NgbDropdownModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    // CardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    NgbDropdownConfig
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditTalkComponent,
    ColorPickerDialogComponent,
    DialogBodyComponent,
    AppComponent
  ]
})
export class AppModule {
}
