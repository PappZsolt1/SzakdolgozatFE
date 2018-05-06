import { AgeClassification } from "./age-classification";
import { Genre } from "./genre";

export class Series {
    id: number;
    title: string;
    rating: number;
    releaseYear: number;
    ageClassification: AgeClassification;
    genre: Genre;
    image: HTMLImageElement;
}