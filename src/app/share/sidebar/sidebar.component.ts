import { Component, OnInit } from '@angular/core';
import {GroupFormComponent} from '../navbar/group-form/group-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    this.dialog.open(GroupFormComponent);
  }
}
