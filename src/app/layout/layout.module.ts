import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutWithSidebarComponent} from './layout-with-sidebar/layout-with-sidebar.component';
import {LayoutNoSidebarComponent} from './layout-no-sidebar/layout-no-sidebar.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [
    LayoutWithSidebarComponent,
    LayoutNoSidebarComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
