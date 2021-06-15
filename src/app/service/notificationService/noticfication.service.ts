import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {AuthenService} from '../authenServie/authen.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {User} from '../../interface/user';
import {ShareModule} from '../../share/share.module';

const URL_BACKEND = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class NoticficationService {
  webSocketEndPoint: string = URL_BACKEND + 'ws';
  topic: string = '/topic/notice';
  stompClient: any;
  headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authenService.currentUserValue.accessToken);

  constructor(private authenService: AuthenService,
              private httpClient: HttpClient) { }
  _connect(shareModule: ShareModule) {
    console.log(this.headers);
    console.log('Initialize WebSocket Connection');
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect(_this.headers, function (frame: any) {

      _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
        console.log('pt được gọi')
        shareModule.getConnect();
        // _this.onMessageReceived(sdkEvent);
      });
    });
  };
  createNotification(notification: any) {
    console.log('pr send duoc goi');
    this.stompClient.send("/app/notice",{}, JSON.stringify(notification));
  }
  getNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(URL_BACKEND + "notification");
  }
  getUsersByBoard(board_id: number): Observable<User[]> {
    return this.httpClient.get<User[]>(URL_BACKEND + "notification/users/" + board_id);
  }
  deleteNotificationByUser(): Observable<any>{
    return this.httpClient.delete(URL_BACKEND + "notification")
  }
  getListNoticeUser(users: User[]): User[]{
    for (let i = 0; i < users.length; i++) {
      if (this.authenService.currentUserValue.id == users[i].id) users.splice(i,1);
    }
    return users;
  }
}
