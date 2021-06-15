import { Component, OnInit } from '@angular/core';
import {Group} from '../../../interface/group';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

  data: Group;
  constructor() {
    this.data = {
      id: 0,
      name: '',
      type: '',
      description: ''
    };
  }

  ngOnInit() {
  }

}
