import {Board} from './board';
import {Card} from './card';

export interface List {
  id?: number;
  title?: string;
  position?: number;
  board?: Board;
  cards?: Card[];
}
