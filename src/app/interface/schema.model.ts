export interface Tag {
    name: string;
    color?: string;
}
export interface Card {
  id: number;
    text: string;
    tags?: Tag[];
    image?: string;
    label?: Label;
}

export enum Label {
    High = 'high',
    Medium = 'medium',
    Low = 'low',
    Epic = 'epic',
    Story = 'story'
}

export interface List {
  id: string;
    title: string;
    cards: Card[];
}

export interface Board {
    title: string;
    list: List[];
}
