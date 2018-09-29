import { Genre } from './genre.model';
import { AgeClassification } from './age-classification.model';
import { Actor } from './actor.model';
import { Comment } from './comment.model';

export interface Movie {
    id: number;
    title: string;
    numberOfRatings: number;
    sumOfRatings: number;
    rating: number;
    budget: number;
    length: number;
    releaseYear: number;
    ageClassification: AgeClassification;
    genre: Genre;
    image: HTMLImageElement;
    actors: Actor[];
    comments: Comment[];
}