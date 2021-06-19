import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const URL_API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) {
  }

  getListByBoardId(id: number): Observable<any> {
    return this.httpClient.get(URL_API + `list/board/${id}`);
  }
}
