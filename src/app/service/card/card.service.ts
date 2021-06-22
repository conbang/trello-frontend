import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardCreateForm} from '../../interface/card-create-form';
import {Card} from '../../interface/card';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserResponse} from '../../interface/user-response';

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
    return this.httpClient.get<Card>(URL_API + 'cards' + id);
  }

  changePosition(cards: Card[]): Observable<any> {
    return this.httpClient.put<any>(URL_API + `cards/changePosition`, cards);
  }

  showAllCard(): Observable<any> {
    return this.httpClient.get<any>(URL_API + `cards`);
  }

  tagUser(usernames: string[], cardId: number): Observable<UserResponse[]> {
    return this.httpClient.post<UserResponse[]>(URL_API + `cardTagUser/${cardId}/tagUser`, usernames);
  }
}
