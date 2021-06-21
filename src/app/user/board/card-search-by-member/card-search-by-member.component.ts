import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../interface/user';

@Component({
  selector: 'app-card-search-by-member',
  templateUrl: './card-search-by-member.component.html',
  styleUrls: ['./card-search-by-member.component.css']
})
export class CardSearchByMemberComponent implements OnInit {

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
}}
