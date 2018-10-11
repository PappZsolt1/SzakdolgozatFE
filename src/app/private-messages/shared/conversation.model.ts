import { PrivateMessage } from "./private-message.model";

export interface Conversation {
    id: number;
    usernameA: string;
    usernameB: string;
    unreadMessages: number;
    privateMessages: PrivateMessage[];
}