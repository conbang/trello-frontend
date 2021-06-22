import {Component, OnInit, TemplateRef} from '@angular/core';
import {Card} from '../../../interface/card';
import {BsModalService} from 'ngx-bootstrap/modal';
import {CardService} from '../../../service/card/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  input = '';
  list: Card[] = [];
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private cardService: CardService) { }

  ngOnInit(): void {
    // this.cardService.showAllCard().subscribe(result => {
    //   this.list = result;
    //   console.log(this.list);
    // });
  }

  searchCardByContentOrTitle() {
    if (this.input === '') {
      this.ngOnInit();
    } else {
      this.list = this.list.filter(res => {
        return res.title.toLocaleLowerCase().match(this.input.toLocaleLowerCase())
          || res.content.toLocaleLowerCase().match(this.input.toLocaleLowerCase());
      });
    }
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
}
