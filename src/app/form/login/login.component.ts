import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Login} from '../../interface/login';
import {first} from 'rxjs/operators';
import {AuthenService} from '../../service/authenServie/authen.service';

const API_BACKEND = environment.api_url;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };
  // @ts-ignore
  currentUser: IUserToken;
  hide = true;
  isLoginFailed = false;

  constructor(private authenService: AuthenService,
              private router: Router) {
    this.authenService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.authenService.login(this.login.userName, this.login.passWord).pipe(first()).subscribe(
      () => {
        this.authenService.currentUserValue.accessToken;
        this.router.navigate(['/home']);
      },
      error => {
        this.isLoginFailed = true;
      }
    );
  }


}
