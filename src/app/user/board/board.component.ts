import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InviteFormComponent} from '../board/invite-form/invite-form.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  privacy: `String`;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  showInviteForm(): void {
    this.dialog.open(InviteFormComponent);
  }

}
