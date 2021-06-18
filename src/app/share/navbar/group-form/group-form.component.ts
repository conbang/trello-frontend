import {Component, OnInit} from '@angular/core';
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
export class GroupFormComponent implements OnInit{
    ngOnInit(): void {
    }

  data: GroupForm;

  constructor(private groupService: GroupService,
              // private authenService: AuthenServiceService,
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
      this.dialog.open(AlertComponent);
      setTimeout(() => {
        this.dialog.closeAll();
      }, 1500);
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }
  // loadGourps(): void {
  //   console.log('goi ham load');
  //   const currentUser = this.authenService.currentUserValue;
  //   const id = currentUser.id;
  //   console.log('id = ',id);
  //   if (currentUser && id) {
  //     this.groupService.getGroups(id).subscribe(groups => {
  //       console.log('group = ', groups);
  //       this.groups = groups;
  //     }, error => {
  //       console.log(error);
  //     });
  //   }
  // }
}
