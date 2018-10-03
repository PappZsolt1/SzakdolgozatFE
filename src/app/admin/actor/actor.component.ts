import { Component, OnInit } from '@angular/core';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
  providers: [ActorService]
})
export class ActorComponent implements OnInit {

  actor: Actor = { id: null, name: null, birthDate: null, birthPlace: null, bio: null, gender: null, comments: null };

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }

  addActor(): void {
    this.actorService.addActor(this.actor).subscribe();
  }

  getActor(id: number): void {
    this.actorService.getActor(id).subscribe(r => this.actor = r);
  }

}
