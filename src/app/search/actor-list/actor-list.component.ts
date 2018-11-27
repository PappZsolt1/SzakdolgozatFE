import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  text: string;
  total: number;
  page = 1;
  size = 10;
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;

  constructor(
    private location: Location,
    private actorService: ActorService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.getResultActors();
  }

  onSizeChaged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getResultActors();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getResultActors();
  }

  getResultActors(): void {
    this.actorService.getResultActors(this.page, this.size, this.text).subscribe(r => {
      this.actors = r.results; this.total = r.total;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  goBack() {
    this.location.back();
  }
}
