import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthenServiceService} from '../../service/authentication/authen-service.service';
import {first} from 'rxjs/operators';
import {Login} from '../../interface/login';

const API_BACKEND = environment.api_url;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidden: true;
  login: Login = {
    username: '',
    password: '',
  };
  // @ts-ignore
  currentUser: IUserToken;
  hide = true;
  isLoginFailed = false;

  constructor(private authenService: AuthenServiceService,
              private router: Router) {
    this.authenService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.login);
    this.authenService.login(this.login.username, this.login.password).pipe(first()).subscribe(
      () => {
        setTimeout(() => {
          this.authenService.currentUserValue.token;
          this.router.navigate(['/home']);
        }, 1500);
      },
      error => {
        this.isLoginFailed = true;
      }
    );
  }


}
