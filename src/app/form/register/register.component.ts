import {Component, OnInit} from '@angular/core';
import {Login} from './../../interface/login';
import {LoginServiceService} from 'src/app/service/login/login-service.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedFile: File = null;

  downloadURL: Observable<string>;
  error1 = false;
  error2 = false;
  login: Login = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };

  constructor(private loginService: LoginServiceService,
              public dialog: MatDialog,
              private router: Router) {
  }


  ngOnInit() {
  }

  registionUser() {
    this.loginService.createAppUser(this.login).subscribe(() => {
      const successDialog = this.dialog.open(DialogComponent);
      setTimeout(() => {
        this.dialog.closeAll();
        this.router.navigate(['login']);
      }, 2000);
    }, e => {
      this.error1 = e.error.indexOf('username') >= 0 ? true : false;
      this.error2 = e.error.indexOf('email') >= 0 ? true : false;
    });
  }
}
