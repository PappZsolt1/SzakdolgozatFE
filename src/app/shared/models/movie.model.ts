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
    mLength: string;
    releaseYear: number;
    ageClassification: AgeClassification;
    genre: Genre;
    imageUrl: string;
    actors: Actor[];
    comments: Comment[];
}