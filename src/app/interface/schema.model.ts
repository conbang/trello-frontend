export interface Tag {
    name: string;
    color?: string;
}
export interface Talk {
    title: string;
    tags?: Tag[];
    image?: string;
    issueType?: IssueType;
    content?: string;
}

export enum IssueType {
    Task = 'task',
    SubTask = 'sub-task',
    Bug = 'bug',
    Epic = 'epic',
    Story = 'story'
}

export interface Track {
    title: string;
    talks: Talk[];
    id: string;
}

export interface Board {
    title: string;
    tracks: Track[];
}
