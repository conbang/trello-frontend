import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../../interface/board';
import {List} from '../../interface/list';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private board: List[] = require('data.json');

  setLists(list: List) {
    this.board.push(list);
  }

  getLists(): List[] {
    return this.board;
  }

  constructor(private httpClient: HttpClient) {
  }

  showAll(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board');
  }

  getBoardById(id: number): Observable<Board> {
    return this.httpClient.get<Board>(API_BACKEND + `board/${id}`);
  }

  createBoard(board: Board): Observable<Board> {
    return this.httpClient.post<Board>(API_BACKEND + 'board', board);
  }

  getBoardPrivate(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/showAllBoardPrivate');
  }

  getBoardGroup(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/showAllBoardGroup');
  }

  getBoardPublic(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/showAllBoardPublic');
  }
}
