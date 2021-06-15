import {Component} from '@angular/core';
import {Group} from '../../../interface/group';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {

  data: Group;

  constructor() {
    this.data = {
      id: 0,
      name: '',
      type: '',
      description: ''
    };
  }

}
