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

  constructor(
    private location: Location,
    private actorService: ActorService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let text = this.route.snapshot.paramMap.get("text");
    this.actorService.getResultActors(text).subscribe(r => this.actors = r);
  }

  goBack() {
    this.location.back();
  }
}
