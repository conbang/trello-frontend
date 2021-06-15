import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import {ShareModule} from '../share/share.module';
import {UserRoutingModule} from './user-routing.module';



@NgModule({
  declarations: [HomepageComponent, BoardComponent, WorkspaceComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ShareModule
    ]
})
export class UserModule { }
