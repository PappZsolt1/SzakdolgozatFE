import { Gender } from "./gender.model";
import { Comment } from "./comment.model";

export interface Actor {
    id: number;
    name: string;
    birthDate: string;
    birthPlace: string;
    photo: HTMLImageElement;
    bio: string;    
    gender: Gender;
    comments: Comment[];
}