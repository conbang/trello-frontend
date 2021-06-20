import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardCreateForm} from '../../interface/card-create-form';
import {Card} from '../../interface/card';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const URL_API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {
  }

  create(card: CardCreateForm): Observable<Card> {
    return this.httpClient.post<Card>(URL_API + 'cards', card);
  }

  edit(card: CardCreateForm): Observable<Card> {
    return this.httpClient.put<Card>(URL_API + 'cards/', card);
  }
}
