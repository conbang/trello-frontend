import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Label} from '../../interface/label';
import {HttpClient} from '@angular/common/http';
import {CardLabel} from '../../interface/cardLabel';
const URL_API = environment;
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpClient: HttpClient) { }

  getLabelsByCard(card_id: number): Observable<Label[]> {
    return this.httpClient.get<Label[]>(URL_API + 'labels/card/' + card_id);
  }

  getListSelected(card_id:number): Observable<Label[]>{
    return this.httpClient.get<Label[]>(URL_API + 'labels/selected/' + card_id);
  }

  addLabelToCard(card_label: CardLabel): Observable <any> {
    return this.httpClient.post(URL_API + 'labels/addLabelToCard', card_label);
  }
}
