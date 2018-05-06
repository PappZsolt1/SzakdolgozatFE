import { Genre } from './genre';
import { AgeClassification } from './age-classification';

export class Movie {
    id: number;
    title: string;
    rating: number;
    budget: number;
    length: number;
    releaseYear: number;
    ageClassification: AgeClassification;
    genre: Genre;
    image: HTMLImageElement;
}