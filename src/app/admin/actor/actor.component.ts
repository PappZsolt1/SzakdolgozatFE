import { Component, OnInit } from '@angular/core';

import { ActorService } from './actor.service';
import { Actor } from '../../model/actor';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
  providers: [ActorService]
})
export class ActorComponent implements OnInit {

  actor: Actor = { id: null, name: null, birthDate: null, birthPlace: null, bio: null, /*gender: null*/ };

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }

  addActor(): void {
    console.log(JSON.stringify(this.actor));
    this.actorService.addActor(this.actor).subscribe();
  }

  getActor(id: number): void {
    this.actorService.getActor(id).subscribe(r => this.actor = r);
  }

}
