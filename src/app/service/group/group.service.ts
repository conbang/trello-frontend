import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../../interface/group';
import {GroupForm} from '../../interface/groupForm';
import {Board} from '../../interface/board';
import {GroupTagUser} from '../../interface/group-tag-user';
import {RoleUserGroup} from '../../interface/RoleUserGroup';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Group;
  constructor(private httpClient: HttpClient) {
  }

  getGroups(id: number): Observable<Group[]> {
    return this.httpClient.get<Group[]>(API_BACKEND + `groupTagUser/listgroup/${id}`);
  }

  create(group: GroupForm): Observable<Group> {
    return this.httpClient.post<Group>(API_BACKEND + 'group/create', group);
  }

  getAllUserByGroupId(id: number): Observable<GroupTagUser[]> {
    return this.httpClient.get<GroupTagUser[]>(API_BACKEND + 'groupTagUser/listUser/'+id);
  }

  setRoleUser(roleUserGroup: RoleUserGroup): Observable<GroupTagUser> {
    return this.httpClient.put<GroupTagUser>(API_BACKEND + 'group/editRoleUser', roleUserGroup);
  }

  deleteUser(groupId: number, userId: number): Observable<any> {
    return this.httpClient.delete(API_BACKEND + 'groupTagUser/deleteUser/' + groupId +'/' + userId);
  }
}
