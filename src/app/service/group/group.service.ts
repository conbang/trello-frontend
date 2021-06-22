import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../../interface/group';
import {GroupForm} from '../../interface/groupForm';
import {Board} from '../../interface/board';
import {GroupTagUser} from '../../interface/group-tag-user';
import {RoleUserGroup} from '../../interface/RoleUserGroup';
import {UserResponse} from '../../interface/user-response';
import {GroupTagUserDto} from '../../interface/group-tag-user-dto';

const API_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups: Group[];

  constructor(private httpClient: HttpClient) {
  }

  setGroups(groups: Group[]): void{
    this.groups = groups;
  }

  getListGroup(): Group[] {
    return this.groups;
  }

  getGroups(id: number): Observable<Group[]> {
    return this.httpClient.get<Group[]>(API_BACKEND + `groupTagUser/listgroup/${id}`);
  }

  create(group: GroupForm): Observable<Group> {
    return this.httpClient.post<Group>(API_BACKEND + 'group/create', group);
  }

  getAllUserByGroupId(id: number): Observable<GroupTagUser[]> {
    return this.httpClient.get<GroupTagUser[]>(API_BACKEND + 'groupTagUser/listUser/' + id);
  }

  setRoleUser(roleUserGroup: RoleUserGroup): Observable<GroupTagUser> {
    return this.httpClient.put<GroupTagUser>(API_BACKEND + 'group/editRoleUser', roleUserGroup);
  }

  deleteUser(groupId: number, userId: number): Observable<any> {
    return this.httpClient.delete(API_BACKEND + 'groupTagUser/deleteUser/' + groupId + '/' + userId);
  }

  getGroupUsers(boardId: number): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(API_BACKEND + `group/${boardId}/users`);
  }

  tagUser(groupTagUser: GroupTagUserDto): Observable<GroupTagUserDto> {
    return  this.httpClient.post<GroupTagUserDto>(API_BACKEND + 'groupTagUser/add', groupTagUser);
  }
}
