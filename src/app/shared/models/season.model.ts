import { Episode } from "./episode.model";

export interface Season {
    id: number;
    number: number;
    episodes: Episode[];
}