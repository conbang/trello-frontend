import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InviteFormComponent} from './invite-form/invite-form.component';
import {CardSearchByMemberComponent} from './card-search-by-member/card-search-by-member.component';

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

  showBoardMembers(): void {
    this.dialog.open(CardSearchByMemberComponent);
  }
}
