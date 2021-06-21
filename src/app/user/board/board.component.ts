import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InviteFormComponent} from '../board/invite-form/invite-form.component';
import {ToolsComponent} from './tools/tools.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  privacy: `String`;
  showFiller = false;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  showInviteForm(): void {
    this.dialog.open(InviteFormComponent);
  }

  showTools(): void {
    this.dialog.open(ToolsComponent);
  }
}
