import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Register} from 'src/app/interface/register';
import {Observable} from 'rxjs';
import {User} from 'src/app/interface/user';
import {CardUser} from 'src/app/interface/card-user';
import {UserUpdate} from '../../interface/user-update';

const API_USER = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUpdateDto: UserUpdate = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: null,
    role: [],
    avatar: '',
    oldPassWord: '',
    newPassWord: '',
  };

  constructor(private httpClient: HttpClient) {
  }

  editAppUser(userUpdateDto: UserUpdate, id: number): Observable<any> {
    return this.httpClient.put<UserUpdate>(API_USER + 'user/' + id, userUpdateDto);
  }

  findUserById(id: number): Observable<UserUpdate> {
    return this.httpClient.get<UserUpdate>(API_USER + 'user/' + id);
  }

  getListSelected(card_id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(API_USER + 'card/tagUser/selected/' + card_id);
  }

  getAppUserByCard(card_id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(API_USER + 'card/tagUser/' + card_id);
  }

  addAppUserToCard(iCardUser: CardUser): Observable<any> {
    return this.httpClient.post(API_USER + 'card/tagUser/addAppUserToCard', iCardUser);
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get(API_USER + 'list');
  }
}
