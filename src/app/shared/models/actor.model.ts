import { Gender } from "./gender.model";
import { Comment } from "./comment.model";
import { Movie } from "./movie.model";
import { Episode } from "./episode.model";

export interface Actor {
    id: number;
    name: string;
    birthDate: string;
    birthPlace: string;
    imageUrl: string;
    bio: string;    
    gender: Gender;
    comments: Comment[];
    movies: Movie[];
    episodes: Episode[];
}