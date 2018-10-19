import { Component, OnInit } from '@angular/core';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';
import { RulesService } from '../shared/rules.service';
import { Rules } from '../shared/rules.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[];
  rules: Rules;

  showRules = false;

  constructor(private topicService: TopicService, private rulesService: RulesService) { }

  ngOnInit() {
    this.getAllTopics();
    this.getRules();
  }

  getAllTopics(): void {
    this.topicService.getAllTopics().subscribe(r => this.topics = r);      
  }

  getRules(): void {
    this.rulesService.getRules().subscribe(r => this.rules = r);
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }
}
