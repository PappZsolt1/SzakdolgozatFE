import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import { GenderService } from '../../shared/services/gender.service';
import { Gender } from '../../shared/models/gender.model';
import { dateFormatter } from '../shared/date-formatter';

@Component({
  selector: 'app-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  actor: Actor = { id: null, name: null, photo: null, birthDate: null, birthPlace: null, bio: null, gender: null, comments: null };

  genders: Gender[];
  bDate: string;
  saved = false;

  constructor(
    private location: Location,
    private actorService: ActorService,
    private genderService: GenderService
    ) { }

  ngOnInit() {
    this.getAllGenders();
  }

  addActor(): void {
    this.actor.birthDate = dateFormatter(this.bDate);
    this.actor.name = this.actor.name.trim();
    this.actor.birthPlace = this.actor.birthPlace.trim();
    this.actor.bio = this.actor.bio.trim();
    this.actorService.addActor(this.actor).subscribe(() => this.saved = true);
  }

  modifyActor(): void {
    this.actor.name = this.actor.name.trim();
    this.actor.birthPlace = this.actor.birthPlace.trim();
    this.actor.bio = this.actor.bio.trim();
    this.actorService.modifyActor(this.actor).subscribe();
  }

  getActor(id: number): void {
    this.actorService.getActor(id).subscribe(r => this.actor = r);
  }

  getAllGenders(): void {
    this.genderService.getAllGenders().subscribe(r => this.genders = r);
  }

  goBack() {
    this.location.back();
  }
}
