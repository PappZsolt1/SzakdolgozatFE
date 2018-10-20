import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConversationService } from '../shared/conversation.service';
import { Conversation } from '../shared/conversation.model';
import { PrivateMessagesService } from '../shared/private-message.service';
import { PrivateMessage } from '../shared/private-message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversation: Conversation;
  privateMessages: PrivateMessage[];

  constructor(
    private route: ActivatedRoute,
    private conversationService: ConversationService,
    private privateMessagesService: PrivateMessagesService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.conversationService.getConversation(+id).subscribe(r => this.conversation = r);
  }

}
