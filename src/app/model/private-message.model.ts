export interface PrivateMessage {
    id: number;
    content: string;
    unread: boolean;
    sendingDate: string;
    sender: string;
    addressee: string;
}