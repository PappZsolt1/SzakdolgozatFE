import { Actor } from "./actor";
import { Comment } from "./comment";

export class Episode {
    id: number;
    title: string;
    numberOfRatings: number;
    sumOfRatings: number;
    rating: number;
    releaseDate: string;
    length: number;
    actors: Actor[];
    comments: Comment[];
}