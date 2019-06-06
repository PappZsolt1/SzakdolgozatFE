import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';
import * as globals from '../../shared/globals';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  topic: Topic = { id: null, title: null, description: null, createDate: null, username: null, comments: null };

  created = false;

  inputTextMessage = globals.inputTextMessage;
  textareaMessage = globals.textareaMessage;

  constructor(
    private keycloak: KeycloakService,
    private location: Location,
    private topicService: TopicService
    ) { }

  ngOnInit() {
  }

  addTopic(): void {
    this.topic.username = this.keycloak.getUsername();
    this.topicService.addTopic(this.topic).subscribe(() => this.created = true);
  }

  goBack() {
    this.location.back();
  }
}
