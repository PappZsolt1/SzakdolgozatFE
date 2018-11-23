import { Component, OnInit } from '@angular/core';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';
import { RulesService } from '../../shared/services/rules.service';
import { Rules } from '../../shared/models/rules.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[];
  rules: Rules;
  total: number;
  page = 1;
  size = 10;
  showRules = false;

  constructor(private topicService: TopicService, private rulesService: RulesService) { }

  ngOnInit() {
    this.getTopics();
    this.getRules();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics(this.page, this.size).subscribe(r => {
      this.topics = r.results; this.total = r.total; });
  }

  getRules(): void {
    this.rulesService.getRules().subscribe(r => this.rules = r);
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }
}
