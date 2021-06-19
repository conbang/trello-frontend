import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardCreateForm} from '../../interface/card-create-form';
import {Card} from '../../interface/card';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const URL_API = environment;

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {
  }

  create(card: CardCreateForm): Observable<Card> {
    return this.httpClient.post<Card>(URL_API + 'cards/create', card);
  }

  edit(card: CardCreateForm): Observable<Card> {
    return this.httpClient.post<Card>(URL_API + 'cards/', card);
  }
  editCard(id: number, card: Card): Observable<any> {
    return this.httpClient.put(URL_API + 'edit/' + id, card);
  }
  findCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(URL_API + 'card' + id);
  }
}
