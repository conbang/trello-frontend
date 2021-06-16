import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from 'src/app/interface/login';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const API_LOCAL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) {
  }

  loginAppUser(log: Login): Observable<Login> {
    return this.httpClient.post<Login>(API_LOCAL + 'login', log);
  }

  createAppUser(log: Login): Observable<Login> {
    return this.httpClient.post<Login>(API_LOCAL + 'register', log);
  }
}
