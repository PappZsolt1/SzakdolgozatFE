import { Gender } from "./gender.model";
import { Comment } from "./comment.model";

export interface Actor {
    id: number;
    name: string;
    birthDate: String;
    birthPlace: string;
    bio: string;    
    gender: Gender;
    comments: Comment[];
}