import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {List} from '../../interface/list';

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

  create(list: List): Observable<any> {
    return this.httpClient.post(URL_API + `list`, list);
  }

  changePosition(lists: List[]): Observable<any> {
    return this.httpClient.put(URL_API + `list/editPositionList`, lists);
  }
  changeTitle(list : List,id:number):Observable<any>{
    return this.httpClient.put(URL_API + `list/editTitleList/{id}${id}`,list);
  }
}
