import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MemberDialogComponent} from './member-dialog/member-dialog.component';
import {GroupService} from '../../service/group/group.service';
import {GroupTagUser} from '../../interface/group-tag-user';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleUserGroup} from '../../interface/RoleUserGroup';

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
  groupTagUser: GroupTagUser[] = [
  ];
  id = 0;
  roleUserGroup: RoleUserGroup = {
    groupId: null,
    userId: null,
    roleUser: '',
  };

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private groupService: GroupService) {}

  member: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(MemberDialogComponent, {
      width: '250px',
      data: {name: this.name, member: this.member}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.member = result;
    });
  }

  getAllUserGroup(id: number) {
    this.groupService.getAllUserByGroupId(id).subscribe(groupTagUser => {
      this.groupTagUser = groupTagUser;
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
    this.groupService.setRoleUser(this.roleUserGroup).subscribe();
  }

  deleteUser(userId: number) {
    this.groupService.deleteUser(this.id, userId).subscribe(() => {
      // this.router.navigateByUrl('/home/groups/'+6+'/members');
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error.error);
    });
  }
}
