import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Actor } from '../../shared/models/actor.model';
import { ActorService } from '../../shared/services/actor.service';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor: Actor;
  type = "actor";

  canDo = this.keycloak.isUserInRole("Admin");

  constructor(
    private keycloak: KeycloakService,
    private route: ActivatedRoute,
    private location: Location,
    private actorService: ActorService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.actorService.getActor(+id).subscribe(r => this.actor = r);
  }

  goBack() {
    this.location.back();
  }
}
