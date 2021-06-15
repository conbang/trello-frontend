import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import {ShareModule} from '../share/share.module';
import {UserRoutingModule} from './user-routing.module';
import { ListComponent } from './board/list/list.component';
import { CardComponent } from './board/card/card.component';
import { LabelComponent } from './board/label/label.component';



@NgModule({
  declarations: [HomepageComponent, BoardComponent, WorkspaceComponent, ListComponent, CardComponent, LabelComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ShareModule
    ]
})
export class UserModule { }
