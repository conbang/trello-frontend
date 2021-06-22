import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Register} from 'src/app/interface/register';
import {Observable} from 'rxjs';
import {User} from 'src/app/interface/user';
import {CardUser} from 'src/app/interface/card-user';

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
  private tagUsers: User[];

  constructor(private httpClient: HttpClient) {
  }

  public setTagUsers(tagUsers: User[]) {
    this.tagUsers = tagUsers;
  }

  public getTagUsers() {
    return this.tagUsers;
  }

  editAppUser(log: Register, id: number): Observable<any> {
    return this.httpClient.put<Register>(API_URL + 'list/edit/' + id, log);
  }

  findUserById(id: number): Observable<Register> {
    return this.httpClient.get<Register>(API_URL + 'list/' + id);
  }

  getUserByBoardId(boardId: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + `boardTagUser/${boardId}/users`);
  }


  getAllUser(): Observable<any> {
    return this.httpClient.get(API_URL + 'list');
  }
}
