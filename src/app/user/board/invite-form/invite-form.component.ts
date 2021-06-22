import {Component, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../interface/user';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BoardService} from '../../../service/board/board.service';
import {Group} from '../../../interface/group';
import {GroupService} from '../../../service/group/group.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
    private boardService: BoardService,
    private groupService: GroupService,
    private route: ActivatedRoute) {
    this.route.paramMap
      .subscribe(async (params: ParamMap) => {
          // tslint:disable-next-line:radix
          const id = parseInt(params.get('id'));
          this.groupService.getGroupUsers(id).subscribe();
        }
      );
  }

  ngOnInit() {
  }


}
