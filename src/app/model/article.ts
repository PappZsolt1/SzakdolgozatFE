import { Comment } from "./comment";

export class Article {
    id: number;
    title: string;
    content: string;
    username: string;
    publishDate: string;
    published: boolean;
    saved: boolean;
    comments: Comment[];
}