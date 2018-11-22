import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  type = "topic";
  deleted = false;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id).subscribe(r => this.topic = r);
  }

  deleteTopic(): void {
    let answer = confirm("Biztosan törli? A téma összes hozzászólása is törölve lesz!");
    if (answer) {
      this.topicService.deleteTopic(this.topic.id).subscribe(() => this.deleted = true);
    }
  }

  goBack() {
    this.location.back();
  }
}
