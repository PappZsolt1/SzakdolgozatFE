import { Component, OnInit } from '@angular/core';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';
import { RulesService } from '../../shared/services/rules.service';
import { Rules } from '../../shared/models/rules.model';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

import { KeycloakService } from 'keycloak-angular';

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
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;
  showRules = false;

  canDo = this.keycloak.isUserInRole("Moderator") || this.keycloak.isUserInRole("RegisteredUser");

  constructor(
    private keycloak: KeycloakService,
    private topicService: TopicService,
    private rulesService: RulesService
    ) { }

  ngOnInit() {
    this.getTopics();
    this.getRules();
  }

  onSizeChaged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getTopics();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics(this.page, this.size).subscribe(r => {
      this.topics = r.results; this.total = r.total;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  getRules(): void {
    this.rulesService.getRules().subscribe(r => this.rules = r);
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }
}
