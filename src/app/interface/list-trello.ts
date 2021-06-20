import {Board} from './board';

export interface ListTrello {
  id?: number;
  title?: string;
  position?: number;
  board?: Board;
}
