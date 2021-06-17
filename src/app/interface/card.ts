import {Label} from './Label';
import {List} from './list';

export interface Card {
	id?: number;
	title?: string;
	content?: string;
	position?: number;
	list?: List;
	image?: string;
	label: Label;
}
