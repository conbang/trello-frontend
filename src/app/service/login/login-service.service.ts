import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from 'src/app/interface/register';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const API_LOCAL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) {
  }

  loginAppUser(log: Register): Observable<Register> {
    return this.httpClient.post<Register>(API_LOCAL + 'login', log);
  }

  createAppUser(log: Register): Observable<Register> {
    return this.httpClient.post<Register>(API_LOCAL + 'register', log);
  }
}
