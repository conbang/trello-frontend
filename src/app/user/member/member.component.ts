import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GroupService} from '../../service/group/group.service';
import {GroupTagUser} from '../../interface/group-tag-user';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleUserGroup} from '../../interface/RoleUserGroup';
import {AlertComponent} from '../../share/alert/alert.component';
import {AuthenServiceService} from '../../service/authentication/authen-service.service';
import {InviteFormComponent} from './invite-form/invite-form.component';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},

];

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  groupTagUser: GroupTagUser[] = [];
  id = 0;
  roleUserGroup: RoleUserGroup = {
    groupId: null,
    userId: null,
    roleUser: '',
  };
  isAdmin = false;
  userCurrentId = 0;
  listGroupTemp: GroupTagUser[] = [];

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService,
              private authenService: AuthenServiceService) {
  }

  member: string;
  name: string;

  openDialog(groupTagUser: GroupTagUser): void {
    const dialogRef = this.dialog.open(InviteFormComponent, {
      minWidth: '440px',
      minHeight: '300px',
      data: {groupTagUser: groupTagUser, groups: this.groupTagUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.member = result;
    });
  }

  confirmDelete(groupTagUser: GroupTagUser, userId: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        groupTagUser: groupTagUser,
        userId: userId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.member = result;
    });
  }

  getAllUserGroup(id: number) {
    this.groupService.getAllUserByGroupId(id).subscribe(groupTagUser => {
      this.groupTagUser = groupTagUser;
      this.listGroupTemp = groupTagUser;
      for (let i = 0; i < groupTagUser.length; i++) {
        if (groupTagUser[i].user.id == this.authenService.currentUserValue.id) {
          this.userCurrentId = this.authenService.currentUserValue.id;
          if (groupTagUser[i].roleUser == 'ROLE_ADMIN') {
            this.isAdmin = true;
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
        this.id = Number(paraMap.get('id'));
        this.getAllUserGroup(this.id);
      }
    );
  }

  setRoleUser(userId: number, roleUser: string) {
    this.roleUserGroup.groupId = this.id;
    this.roleUserGroup.userId = userId;
    this.roleUserGroup.roleUser = roleUser;
    this.groupService.setRoleUser(this.roleUserGroup).subscribe(() => {
      this.dialog.open(AlertComponent, {
        minHeight: '80px',
        minWidth: '300px',
        data: {message: 'Update success!', success: 'check_circle_outline'}
      });
      setTimeout(() => {
        this.dialog.closeAll();
        // this.router.navigate(['/home']);
      }, 1000);
    }, error => {
      console.log(error.error);
    });
  }

  deleteUser(userId: number) {
    this.groupService.deleteUser(this.id, userId).subscribe(() => {
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
    // (() => {
    //   // this.router.navigateByUrl('/home/groups/'+6+'/members');
    //   this.router.navigateByUrl('/home');
    // }, error => {
    //   console.log(error.error);
    // });
  }

  search(value: string) {
    let listUser = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listGroupTemp.length; i++) {
      if (this.listGroupTemp[i].user.userName.toLowerCase().includes(value.toLowerCase())) {
        listUser.push(this.listGroupTemp[i]);
      }
    }
    this.groupTagUser = listUser;
  }
}
