import { PrivateMessage } from "./private-message";

export class Conversation {
    id: number;
    usernameA: string;
    usernameB: string;
    unreadMessages: number;
    privateMessages: PrivateMessage[];
}