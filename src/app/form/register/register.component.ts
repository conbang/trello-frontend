import { Component, OnInit } from '@angular/core';
import { Login } from './../../interface/login';
import { LoginServiceService } from 'src/app/service/login/login-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedFile: File = null;

  downloadURL: Observable<string>;
  error1: boolean = false;
  error2: boolean = false;
  login: Login = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };
  constructor(private loginService: LoginServiceService) { }


  ngOnInit() { }

  registionUser() {
    this.loginService.createAppUser(this.login).subscribe(() => {
      alert('register success')
    }, e => {
      // this.error1 = e.error?.indexOf('username') >= 0;
      // this.error2 = e.error?.indexOf('email') >= 0 ? true : false;
    });
  }
}
