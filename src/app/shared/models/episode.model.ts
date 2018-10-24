import { Actor } from "./actor.model";
import { Comment } from "./comment.model";

export interface Episode {
    id: number;
    title: string;
    numberOfRatings: number;
    sumOfRatings: number;
    rating: number;
    releaseDate: string;
    eLength: string;
    actors: Actor[];
    comments: Comment[];
}