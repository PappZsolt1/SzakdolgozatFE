import { AgeClassification } from "./age-classification.model";
import { Genre } from "./genre.model";
import { Season } from "./season.model";

export interface Series {
    id: number;
    title: string;
    rating: number;
    releaseYear: number;
    ageClassification: AgeClassification;
    genre: Genre;
    image: HTMLImageElement;
    seasons: Season[];
}