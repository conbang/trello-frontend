import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../interface/user';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {

  @Output()
  boardId: any = 0;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.loadUsers();
}

  ngOnInit() {
  }

  loadUsers(): void {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
    });
    // console.log('loadUser');
  }

  tagUsers(){


  }
}
