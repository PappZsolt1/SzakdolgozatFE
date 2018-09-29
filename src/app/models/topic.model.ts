import { Comment } from "@angular/compiler";

export interface Topic {
    id: number;
    title: string;
    description: string;
    username: string;
    createDate: string;
    comments: Comment[];
}