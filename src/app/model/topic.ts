import { Comment } from "@angular/compiler";

export class Topic {
    id: number;
    title: string;
    description: string;
    username: string;
    createDate: string;
    comments: Comment[];
}