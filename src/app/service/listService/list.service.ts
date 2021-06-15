import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {List} from '../../interface/list';
import {Board} from '../../interface/board';
const URL_BACKEND = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class ListService {
  // @ts-ignore
  id: number;
  // @ts-ignore
  board: IBoard;
  // @ts-ignore
  lists: IList[];
  constructor(private httpClient: HttpClient) { }
  getListByBoardId(id: number): Observable<List[]>{
    return this.httpClient.get<List[]>(URL_BACKEND + "board/" + id);
  }
  createList(list: List): Observable<any>{
    return this.httpClient.post(URL_BACKEND + "createList", list);
  }
  editPositionList(lists: List[]): Observable<any>{
    return this.httpClient.put(URL_BACKEND + "editPositionList", lists);
  }
  getBoardById(id: number): Observable<Board> {
    return this.httpClient.get<Board>(URL_BACKEND+`board/findBoardById/` + id);

  }

  findListById(id:number): Observable<List>{
    return this.httpClient.get<List>(URL_BACKEND + "findList/"+ id);
  }
  editTitleList(list: List, id: number): Observable<List>{
    return this.httpClient.put(URL_BACKEND+"editTitleList/"+ id, list);
  }
}
