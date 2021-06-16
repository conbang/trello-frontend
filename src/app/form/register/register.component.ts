import {Component} from '@angular/core';
import {Register} from '../../interface/register';
import {LoginServiceService} from 'src/app/service/login/login-service.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  error1 = false;
  error2 = false;
  login: Register = {
    id: 0,
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    phone: null,
    role: [],
  };

  constructor(private loginService: LoginServiceService,
              public dialog: MatDialog,
              private router: Router) {
  }

  register() {
    console.log(this.login);
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
