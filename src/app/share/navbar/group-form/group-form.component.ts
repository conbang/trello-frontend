import {Component} from '@angular/core';
import {GroupForm} from '../../../interface/groupForm';
import {GroupService} from '../../../service/group/group.service';
import {MatDialog} from '@angular/material';
import {AlertComponent} from '../../alert/alert.component';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {

  data: GroupForm;

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
      this.dialog.open(AlertComponent, {
          width: '400px',
          height: '200px',
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
