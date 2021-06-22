import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupForm} from '../../../interface/groupForm';
import {HomepageComponent} from '../../../user/homepage/homepage.component';
import {BoardService} from '../../../service/board/board.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent implements OnInit {

  @Input() group: GroupForm;


  constructor() {
  }

  ngOnInit() {
  }





}

