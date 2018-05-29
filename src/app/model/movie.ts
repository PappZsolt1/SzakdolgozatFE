import { Genre } from './genre';
import { AgeClassification } from './age-classification';
import { Actor } from './actor';
import { Comment } from './comment';

export class Movie {
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