import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenServiceService} from '../../service/authentication/authen-service.service';
import {MatDialog} from '@angular/material';
import {BoardFormComponent} from './board-form/board-form.component';
import {Notification} from '../../interface/notification';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: Notification[] = [
    {
      id: 1,
      from: null,
      title: 'thanh',
      content: 'asdfasdf'
    },
    {
      id: 1,
      from: null,
      title: 'thanh',
      content: 'asdfasdf'
    }
  ];
  @Input() username = 'thanh';
  @Input() avatar = 'https://firebasestorage.googleapis.com/v0/b/fir-upload-file-7f971.appspot.com/o/3gqt8ojnhr7?alt=media&token=9ca25d77-b8b4-4f36-b927-9de2bb782eb7';
  title: string;

  constructor(private router: Router,
              private authenService: AuthenServiceService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
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
