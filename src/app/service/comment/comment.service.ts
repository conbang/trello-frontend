import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const URL_API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  create(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(URL_API + 'comments', comment);
  }
}
