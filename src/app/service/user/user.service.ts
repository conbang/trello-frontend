import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Register} from 'src/app/interface/register';
import {Observable} from 'rxjs';
import {User} from 'src/app/interface/user';
import {CardUser} from 'src/app/interface/card-user';

const API_USER = environment.api_url;

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

  constructor(private httpClient: HttpClient) {
  }

  editAppUser(log: Register, id: number): Observable<any> {
    return this.httpClient.put<Register>(API_USER + 'list/edit/' + id, log);
  }

  findUserById(id: number): Observable<Register> {
    return this.httpClient.get<Register>(API_USER + 'list/' + id);
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
    return this.httpClient.get(API_USER + 'user');
  }
}
