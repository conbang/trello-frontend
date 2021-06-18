import {List} from './list';

export interface CardCreateForm {
  title: string;
  content: string;
  listTrello: List;
}
