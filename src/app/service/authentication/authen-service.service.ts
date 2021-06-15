import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Token} from '../../interface/token';
import {HttpClient} from '@angular/common/http';
import {User} from '../../interface/user';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  update = new EventEmitter<string>();

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Token {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const user: User = {
      userName: username,
      passWord: password
    };
    console.log(user);
    // tslint:disable-next-line:no-shadowed-variable
    return this.httpClient.post(API_URL + 'login', user).pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
