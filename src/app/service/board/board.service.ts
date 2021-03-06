import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../../interface/board';
import {List} from '../../interface/list';
import {UserResponse} from '../../interface/user-response';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private board: List[];

  addList(list: List) {
    this.board.push(list);
  }

  setList(lists: List[]) {
    this.board = lists;
  }

  getLists(): List[] {
    return this.board;
  }

  constructor(private httpClient: HttpClient) {
  }

  showAll(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_URL + 'board');
  }

  getBoardById(id: number): Observable<Board> {
    return this.httpClient.get<Board>(API_URL + `board/${id}`);
  }

  createBoard(board: Board): Observable<Board> {
    return this.httpClient.post<Board>(API_URL + 'board', board);
  }

  getBoardPrivate(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_URL + 'board/showAllBoardPrivate');
  }

  getBoardGroup(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_URL + 'board/showAllBoardGroup');
  }

  getBoardPublic(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_URL + 'board/showAllBoardPublic');
  }

  tagUser(listId: number[], boardId: number): Observable<UserResponse[]> {
    return this.httpClient.post<UserResponse[]>(API_URL + `board/${boardId}/tagUser`, listId);
  }
  getBoardByGroupId(id: number): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_URL + `board/list-board-in-group/${id}`);
  }
}
