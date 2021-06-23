import {Component, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../interface/user';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BoardService} from '../../../service/board/board.service';
import {Group} from '../../../interface/group';
import {GroupService} from '../../../service/group/group.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserResponse} from '../../../interface/user-response';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {

  users: User[];
  listId: number[];
  userInBoards: UserResponse[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { boardId: number },
    private boardService: BoardService,
    private groupService: GroupService,
    private userService: UserService,
    private route: ActivatedRoute) {
    this.userInBoards = this.userService.getTagUsers();
    this.groupService.getGroupUsers(data.boardId).subscribe((users) => {
      this.users = users.filter((e) => {
        return this.userInBoards.indexOf(e);
      });
    });
  }

  ngOnInit() {
  }

  // tagUser() {
  //   this.listId = this.listId.map(id => parseInt(id));
  //   this.boardService.tagUser(this.listId, this.data.boardId).subscribe((users) => {
  //     console.log(users);
  //   });
  // }

}
