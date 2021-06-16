import {Component, Input, OnInit} from '@angular/core';
import {GroupForm} from '../../../interface/groupForm';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent implements OnInit {

  @Input() group: GroupForm;
  constructor() { }

  ngOnInit() {
  }

}
