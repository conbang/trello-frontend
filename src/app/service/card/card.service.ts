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

  edit(card: Card): Observable<Card> {
    return this.httpClient.put<Card>(URL_API + 'cards/edit', card);
  }

  editCard(id: number, card: Card): Observable<any> {
    return this.httpClient.put(URL_API + 'edit/' + id, card);
  }

  findCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(URL_API + 'card' + id);
  }

  changePosition(cards: Card[]): Observable<any> {
    return this.httpClient.put<any>(URL_API + `cards/changePosition`, cards);
  }

  showAllCard(): Observable<any> {
    return this.httpClient.get<any>(URL_API + `cards`);
  }
}
