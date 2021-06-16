import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../../interface/group';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent implements OnInit {

  @Input() group: Group;
  constructor() { }

  ngOnInit() {
  }

}
