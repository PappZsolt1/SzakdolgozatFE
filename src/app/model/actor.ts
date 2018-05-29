import { Gender } from "./gender";
import { Comment } from "./comment";

export class Actor {
    id: number;
    name: string;
    birthDate: String;
    birthPlace: string;
    bio: string;    
    gender: Gender;
    comments: Comment[];
}