import {Component} from '@angular/core';
import {GroupForm} from '../../../interface/groupForm';
import {GroupService} from '../../../service/group/group.service';
import {MatDialog} from '@angular/material';
import {AlertComponent} from '../../alert/alert.component';
import {Group} from '../../../interface/group';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {

  data: GroupForm;
  response: Group = {
    id: 0,
    name: '',
    type: '',
    description: ''
  };

  constructor(private groupService: GroupService,
              public dialog: MatDialog) {
    this.data = {
      id: 0,
      name: '',
      type: '',
      description: ''
    };
  }

  createGroup() {
    this.groupService.create(this.data).subscribe((group) => {
      console.log(group);
      this.response.id = group.id;
      this.response.name = group.name;
      this.response.type = group.type;
      this.response.description = group.description;
      this.groupService.getListGroup().push(this.response);
      this.dialog.open(AlertComponent, {
          minHeight: '80px',
          minWidth: '300px',
          data: {message: 'Create success!', success: 'check_circle_outline'}
        }
      );
      setTimeout(() => {
        this.dialog.closeAll();
      }, 1500);
    }, error => {
      console.log(error);
    });
  }
}
