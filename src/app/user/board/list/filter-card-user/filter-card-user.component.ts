import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {User} from '../../../../interface/user';
import {Card} from '../../../../interface/card';
import {UserService} from '../../../../service/user/user.service';
import {CardService} from '../../../../service/cardService/card.service';
import {ActivatedRoute} from '@angular/router';
import {NoticficationService} from '../../../../service/notificationService/noticfication.service';

@Component({
  selector: 'app-filter-card-user',
  templateUrl: './filter-card-user.component.html',
  styleUrls: ['./filter-card-user.component.scss']
})
export class FilterCardUserComponent implements OnInit {
  // @ts-ignore
  modalRef: BsModalRef;
  listUser: User[] = [];
  listCard: Card[] = [];
  user_id: number = 0;
  @Input()
  board_id: number = 0;
  constructor(private modalService: BsModalService,
              private userService: UserService,
              private cardService: CardService,
              private activatedRoute: ActivatedRoute,
              private noticficationService: NoticficationService) { }

  ngOnInit(): void {
    this.getAllUserTag(this.board_id);
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
  getAllUserTag(board_id : number){
   this.noticficationService.getUsersByBoard(board_id).subscribe(data =>{
     this.listUser = data;
   })
  }
  getCardByUser(userId:number){
    this.cardService.getCardByUser(this.board_id,userId).subscribe( data =>{
      this.listCard = data;
    })
  }
}
