import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../../interface/group';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) {
  }

  getGroups(id: number): Observable<Group[]> {
    return this.httpClient.get<Group[]>(API_BACKEND + `groupTagUser/listgroup/${id}`);
  }
}
