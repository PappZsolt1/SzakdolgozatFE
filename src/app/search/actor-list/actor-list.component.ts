import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';

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

  constructor(
    private location: Location,
    private actorService: ActorService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.actorService.getResultActors(this.page, this.size, this.text).subscribe(r => {
      this.actors = r.results; this.total = r.total; });
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.actorService.getResultActors(this.page, this.size, this.text).subscribe(r => {
      this.actors = r.results; this.total = r.total; });
  }

  goBack() {
    this.location.back();
  }
}
