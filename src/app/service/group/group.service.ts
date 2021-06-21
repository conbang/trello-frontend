import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../../interface/group';
import {GroupForm} from '../../interface/groupForm';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Group;
  constructor(private httpClient: HttpClient) {  }

  getGroups(id: number): Observable<Group[]> {
    return this.httpClient.get<Group[]>(API_BACKEND + `group-tag-user/list-group/${id}`);
  }

  create(group: GroupForm): Observable<Group> {
    return this.httpClient.post<Group>(API_BACKEND + 'group/create', group);
  }
}
