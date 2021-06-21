import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Comment} from '../../interface/comment';
import {CommentResponse} from '../../interface/comment-response';

const URL_API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  create(comment: CommentResponse): Observable<CommentResponse> {
    return this.httpClient.post<CommentResponse>(URL_API + 'comments', comment);
  }
  getAllComment(cardId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(URL_API + 'comments/card/' + cardId);
  }
  createComment(comment: Comment): Observable<any> {
    return  this.httpClient.post<Comment>(URL_API + 'comments/create' , comment);
  }
}
