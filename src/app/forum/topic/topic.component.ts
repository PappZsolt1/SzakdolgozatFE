import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;

  deleted = false;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private router: Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(+id).subscribe(r => this.topic = r);
  }

  deleteTopic(): void {
    this.deleted = true;
    this.topicService.deleteTopic(this.topic.id).subscribe();
  }

  goBack() {
    this.router.navigate(['/forum']);
  }
}
