import { Component, OnInit } from '@angular/core';

import { ConversationService } from '../shared/conversation.service';
import { Conversation } from '../shared/conversation.model';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {

  conversations: Conversation[];

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    this.getUserConversations();
  }
  
  getUserConversations(): void {
    this.conversationService.getUserConversations().subscribe(r => this.conversations = r);
  }
}
