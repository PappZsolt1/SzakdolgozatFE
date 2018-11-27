import { Comment } from "../../shared/models/comment.model";

export interface Topic {
    id: number;
    title: string;
    description: string;
    username: string;
    createDate: string;
    comments: Comment[];
}