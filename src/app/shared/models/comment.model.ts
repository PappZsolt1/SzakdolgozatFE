import { Movie } from "./movie.model";
import { Episode } from "./episode.model";
import { Actor } from "./actor.model";
import { Article } from "../../articles/shared/article.model";
import { Topic } from "../../forum/shared/topic.model";

export interface Comment {
    id: number;
    content: string;
    username: string;
    postDate: string;
    movie: Movie;
    episode: Episode;
    actor: Actor;
    article: Article;
    topic: Topic;
    moderated: boolean;
}