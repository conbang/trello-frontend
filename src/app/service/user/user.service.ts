import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Register} from 'src/app/interface/register';
import {Observable} from 'rxjs';
import {User} from 'src/app/interface/user';
import {CardUser} from 'src/app/interface/card-user';
import {UserUpdate} from '../../interface/user-update';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  log: Register = {
    id: 0,
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };
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
  private tagUsers: User[];

  constructor(private httpClient: HttpClient) {
  }

  public setTagUsers(tagUsers: User[]) {
    this.tagUsers = tagUsers;
  }

  public getTagUsers() {
    return this.tagUsers;
  }

  editAppUser(userUpdateDto: UserUpdate, id: number): Observable<any> {
    return this.httpClient.put<UserUpdate>(API_URL + 'user/' + id, userUpdateDto);
  }

  findUserById(id: number): Observable<UserUpdate> {
    return this.httpClient.get<UserUpdate>(API_URL + 'user/' + id);
  }

  getListSelected(card_id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + 'card/tagUser/selected/' + card_id);
  }

  getUserByBoardId(boardId: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + `boardTagUser/${boardId}/users`);
  }


  getAllUser(): Observable<any> {
    return this.httpClient.get(API_URL + 'list');
  }
}
