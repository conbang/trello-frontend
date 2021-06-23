import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthenServiceService} from '../../service/authentication/authen-service.service';
import {GroupService} from '../../service/group/group.service';
import {Group} from '../../interface/group';
import {GroupFormComponent} from '../navbar/group-form/group-form.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  groups: Group[] = [];

  constructor(public dialog: MatDialog,
              private authenService: AuthenServiceService,
              private groupService: GroupService) {
    this.loadGourps();
  }

  ngOnInit() {
  }

  loadGourps(): void {
    const currentUser = this.authenService.currentUserValue;
    const id = currentUser.id;
    if (currentUser && id) {
      this.groupService.getGroups(id).subscribe(groups => {
        this.groups = groups;
        this.groupService.setGroups(groups);
      }, error => {
        console.log(error);
      });
    }
  }

  openDialog(): void {
    this.dialog.open(GroupFormComponent,{
      minWidth: '400px',
    });
  }

}
