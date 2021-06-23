import {Component} from '@angular/core';
import {GroupForm} from '../../../interface/groupForm';
import {GroupService} from '../../../service/group/group.service';
import {MatDialog} from '@angular/material';
import {AlertComponent} from '../../alert/alert.component';
import {Group} from '../../../interface/group';
import {AuthenServiceService} from '../../../service/authentication/authen-service.service';

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
              public dialog: MatDialog,
              private authenSerice: AuthenServiceService) {
    this.data = {
      id: 0,
      name: '',
      type: '',
      description: ''
    };
  }

  createGroup() {
    this.groupService.create(this.data).subscribe((group) => {
      const currentUser = this.authenSerice.currentUserValue;
      const id = currentUser.id;
      if (currentUser && id) {
        this.groupService.getGroups(id).subscribe(groups => {
          const size = groups.length;
          const e = groups[size - 1];
          this.groupService.getListGroup().push(e);
        }, error => {
          console.log(error);
        });
      }

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
