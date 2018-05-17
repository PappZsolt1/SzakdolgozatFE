import { Component, OnInit } from '@angular/core';

import { ActorService } from './actor.service';
import { Actor } from '../model/actor';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor: Actor;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }

  addActor(actor: Actor): void {
    this.actorService.addActor(actor).subscribe();
  }

  getActor(id: number): void {
    this.actorService.getActor(id).subscribe(r => this.actor = r);
  }

}
