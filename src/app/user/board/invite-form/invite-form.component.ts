import {Component, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../interface/user';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BoardService} from '../../../service/board/board.service';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {

  users: User[] = [];
  listId: number[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { users: User[], boardId: number },
    private userService: UserService,
    private boardService: BoardService) {
    this.users = this.userService.getTagUsers();
  }

  ngOnInit() {
  }


}
