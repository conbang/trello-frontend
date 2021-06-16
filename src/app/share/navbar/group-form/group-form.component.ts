import {Component} from '@angular/core';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {

  data: {
    name: string,
    type: string,
    description: string
  };

  constructor() {
  }

}
