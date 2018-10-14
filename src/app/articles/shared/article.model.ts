import { Comment } from "../../shared/models/comment.model";

export interface Article {
    id: number;
    title: string;
    content: string;
    //username: string;
    publishDate: string;
    published: boolean;
    saved: boolean;
    comments: Comment[];
}