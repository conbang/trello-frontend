import {Component, OnInit} from '@angular/core';
import {GroupFormComponent} from '../navbar/group-form/group-form.component';
import {MatDialog} from '@angular/material';
import {Group} from '../../interface/group';
import {BoardFormComponent} from '../navbar/board-form/board-form.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  groups: Group[] = [
    {
      id: 1,
      name: 'c1220g1',
      type: 'private',
      description: '',
    },
    {
      id: 1,
      name: 'c1330g2',
      type: 'private',
      description: '',
    },
    {
      id: 1,
      name: 'c1220g1',
      type: 'private',
      description: '',
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(BoardFormComponent);
  }
}
