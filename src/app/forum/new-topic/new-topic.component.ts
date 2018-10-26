import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  topic: Topic = { id: null, title: null, description: null, createDate: null, comments: null};

  created = false;

  constructor(private topicService: TopicService, private router: Router) { }

  ngOnInit() {
  }

  addTopic(): void {
    this.topicService.addTopic(this.topic).subscribe(() => this.created = true);
  }

  goBack() {
    this.router.navigate(['/forum']);
  }
}
