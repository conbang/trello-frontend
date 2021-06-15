import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../../interface/board';
import {environment} from '../../../environments/environment';
import {Tag_user_board} from '../../interface/TagUserBoard';
import {User} from '../../interface/user';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {
  }

  showALl(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board');
  }


  // getBoarById(id: number): Observable<any> {
  //   return this.httpClient.get<IBoard>(API_BACKEND + "board/findBoardById/" + id);
  // }
  findBoarById(id: number): Observable<any> {
    return this.httpClient.get<Board>(API_BACKEND + 'board/findBoardById/' + id);
  }

  getAllBoardByAppUser(id: number): Observable<Board[]> {
    // @ts-ignore
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/listAppBoard/' + id);
  }

  createBoard(board: Board): Observable<Board> {
    return this.httpClient.post<Board>(API_BACKEND + 'board/create', board);
  }

  getBoardTagUser(id: number): Observable<Board[]> {
    return this.httpClient.get<Board[]>(API_BACKEND + 'board/listBoardTagUser/' + id);
  }

  createTagUserBoard(tagUserBoard: Tag_user_board): Observable<Tag_user_board> {
    return this.httpClient.post<Tag_user_board>(API_BACKEND + 'boardAppUser/create', tagUserBoard);
  }

  showAllAppUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_BACKEND + 'list');
  }
  showAllTagUser(): Observable<Tag_user_board[]> {
    return this.httpClient.get<Tag_user_board[]>(API_BACKEND + 'tagUser');
  }
  // getListUserTag(board_id : number): Observable<IUser[]>{
  //   return this.httpClient.get<IUser[]>(API_BACKEND + "boardAppUser/list/" + board_id);
  // }

}
