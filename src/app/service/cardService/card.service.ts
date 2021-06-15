import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {Card} from '../../interface/card';
const URL_BACKEND = environment.api_url + 'cards/';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }
  findCardsByListId(id: number): Observable<Card[]> {
    return this.httpClient.get<Card[]>(URL_BACKEND + "list/" + id);
  }
  changePositionCard(cards: Card[]): Observable<any> {
    return this.httpClient.put(URL_BACKEND + "changePosition", cards);
  }
  editCard(id: number, card: Card): Observable<any> {
    return this.httpClient.put(URL_BACKEND + "edit/" + id, card);
  }
  findCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(URL_BACKEND + id);
  }
  createCard(card: Card): Observable<any>{
    return this.httpClient.post(URL_BACKEND + "create",card);
  }
  showAllCard(): Observable<any> {
    return this.httpClient.get(URL_BACKEND);
  }
  getCardByLabel(id:number, labelId: number): Observable<any> {
    return this.httpClient.get(URL_BACKEND + 'label/' + id + '?labelId=' + labelId);
  }
  getCardByUser(id:number, userId: number): Observable<any>{
    return this.httpClient.get(URL_BACKEND+"search/"+id+"?userId="+userId);
  }
}
