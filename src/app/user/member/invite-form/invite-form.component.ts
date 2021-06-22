import {Component, Inject, Input, OnInit} from '@angular/core';
import {GroupTagUserDto} from '../../../interface/group-tag-user-dto';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../../../service/group/group.service';
import {List} from '../../../interface/list';
import {GroupTagUser} from '../../../interface/group-tag-user';
import {AlertComponent} from '../../../share/alert/alert.component';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {
  groupTagUserDto: GroupTagUserDto;
  error1 = false;
  error2 = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { groupTagUser: GroupTagUser },
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

  tagUser() {
    // this.activatedRoute.paramMap.subscribe(paraMap => {
    //     this.id = Number(paraMap.get('id'));
    //   }
    // );
    this.groupTagUserDto.groupId = this.data.groupTagUser.groupTrello.id;
    this.groupService.tagUser(this.groupTagUserDto).subscribe(() => {
      this.dialog.open(AlertComponent, {
        width: '420px',
        height: '210px',
        data: {message: 'Invite success!', success: 'check_circle_outline'}
      });
      setTimeout(() => {
        this.dialog.closeAll();
        this.router.navigate(['/home/groups/'+this.groupTagUserDto.groupId+'/members']);
      }, 2000);
    }, e => {
      this.error1 = e.error.indexOf('exist') >= 0;
      this.error2 = e.error.indexOf('already') >= 0;
    });
  }
}
