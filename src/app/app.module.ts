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
import {BoardModule} from './user/board/board.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        ShareModule,
        UserModule,
        BoardModule,
      ModalModule.forRoot(),
      MDBBootstrapModule.forRoot()
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule {
}
