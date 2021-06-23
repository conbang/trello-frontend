import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenServiceService} from '../../service/authentication/authen-service.service';
import {MatDialog} from '@angular/material';
import {BoardFormComponent} from './board-form/board-form.component';
import {Notification} from '../../interface/notification';
import {Token} from '../../interface/token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: Notification[] = [
  ];

  @Input() username = '';
  @Input() avatar = '';
  title: string;
  user: Token;
  userId: number;

  constructor(private router: Router,
              private authenService: AuthenServiceService,
              public dialog: MatDialog) {
    this.loadInfoUser();
  }

  ngOnInit() {
  }

  loadInfoUser() {
    const user = this.authenService.currentUserValue;
    this.avatar = user.avatar;
    this.username = user.username;
    this.userId = user.id;
  }

  logout() {
    this.authenService.logout();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 1000);
  }

  openDialog(): void {
    this.dialog.open(BoardFormComponent);
  }

}
