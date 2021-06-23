import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {GroupTagUserDto} from '../../../interface/group-tag-user-dto';
import {GroupTagUser} from '../../../interface/group-tag-user';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../service/group/group.service';
import {AlertComponent} from '../../../share/alert/alert.component';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  groupTagUserDto: GroupTagUserDto;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { groupTagUser: GroupTagUser, userId: number },
              public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService,) {
    this.groupTagUserDto = {
      groupId: 0,
      email: '',
      roleUser: '',
    };
  }

  ngOnInit() {
  }

  deleteUser() {
    this.groupService.deleteUser(this.data.groupTagUser.groupTrello.id, this.data.userId).subscribe(() => {
      this.dialog.open(AlertComponent, {
        minHeight: '80px',
        minWidth: '300px',
        data: {message: 'Delete success!', success: 'check_circle_outline'}
      });
      setTimeout(() => {
        this.dialog.closeAll();
        this.router.navigate(['/home']);
      }, 2000);
    }, error => {
      console.log(error.error);
    });
  }

}
