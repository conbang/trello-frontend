import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MediaFile} from '../../../interface/mediaFile';
import {Card} from '../../../interface/card';
import {Label} from '../../../interface/label';
import {User} from '../../../interface/user';
import {CardService} from '../../../service/card/card.service';
import {MediaFileService} from '../../../service/mediaFile/media-file.service';
import {LabelService} from '../../../service/label/label.service';
import {UserService} from '../../../service/user/user.service';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
@Input()
modalRef: BsModalRef;
  mediaFiles: MediaFile[];
  card: Card = {};
  labels: Label[] = [];
  users: User[] = [];
  // tslint:disable-next-line:variable-name
  card_id: any = 0;
  downloadURL: Observable<string>;
  url: string = '';
  constructor(private modalService: BsModalService,
              private cardService: CardService,
              private mediaFileService: MediaFileService,
              private labelService: LabelService,
              private userService: UserService,
              private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }

  @Output()
  isUpdate = new EventEmitter();
  update() {
    this.getCardById(this.card_id);
    this.getMediaFiles(this.card_id);
    this.getLabels(this.card_id);
    this.getUsers(this.card_id);
    this.isUpdate.emit(true);
  }
  getCardById(id: number) {
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    });
  }
  getMediaFiles(id: number) {
    this.mediaFileService.getMediaFilesByCardId(id).subscribe(result => {
      this.mediaFiles = result;
    });
  }
  getLabels(id: number) {
    this.labelService.getLabelsByCard(id).subscribe(labels =>{
      this.labels = labels;
    });
  }
  getUsers(id: number) {
    this.userService.getAppUserByCard(id).subscribe(users =>{
      this.users = users;
    });
  }

  onFileSelected(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `trelloFIle/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.url = url;
              this.createMediaFile();
            }
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log('Upload success');
      }
    });
  }
  createMediaFile() {
    let mediaFile: MediaFile = {
      link: this.url,
      card: this.card
    };
    this.mediaFileService.createMediaFile(mediaFile).subscribe(() => {
      this.update();
    });
  }
}
