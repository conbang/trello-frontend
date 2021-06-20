import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {AuthenServiceService} from '../../../service/authentication/authen-service.service';
import {CardService} from '../../../service/card/card.service';
import {Card} from '../../../interface/card';
import {User} from '../../../interface/user';
import {CardUser} from '../../../interface/card-user';

@Component({
  selector: 'app-add-member-for-card',
  templateUrl: './add-member-for-card.component.html',
  styleUrls: ['./add-member-for-card.component.scss']
})
export class AddMemberForCardComponent implements OnInit {
  @Input()
  card_id: number = 0;
  appUser_id: any = 'selected';
  users: User[] = [];
  card_user : CardUser ={
    card:{},
    appUser:{}
  };
  card: Card ={};

  constructor(private userService: UserService,
              private authenService: AuthenServiceService,
              private cardService: CardService) { }

  ngOnInit(): void {
    this.getAppUserSelected(this.card_id);
    this.getCardById(this.card_id);
  }
  getAppUserSelected(id: number){
    this.userService.getListSelected(id).subscribe(users =>{
      this.users = users;
    })
  }
  getCardById(id: number) {
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    })
  }
  @Output()
  isAddUser = new EventEmitter();
  createAppUser(){
    // @ts-ignore
    this.card_user.card.id = this.card_id;
    // @ts-ignore
    this.card_user.appUser.id = +this.appUser_id;
    this.userService.addAppUserToCard(this.card_user).subscribe(() => {
      this.isAddUser.emit(true);
      this.getAppUserSelected(this.card_id);
      this.appUser_id = 'selected';
    });
  }
}
