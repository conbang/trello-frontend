import { Injectable } from '@angular/core';
import {MediaFile} from '../../interface/mediaFile';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
const URL_API = environment;
@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  constructor(private httpClient: HttpClient) { }
  getMediaFilesByCardId(id: number): Observable<MediaFile[]> {
    return this.httpClient.get<MediaFile[]>( URL_API + 'mediafile/findByCard/' + id);
  }

  createMediaFile(mediaFile: MediaFile): Observable<any> {
    return this.httpClient.post(URL_API + 'mediafile/create', mediaFile);
  }
}
