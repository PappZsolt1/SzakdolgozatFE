import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import { GenderService } from '../../shared/services/gender.service';
import { Gender } from '../../shared/models/gender.model';
import { dateFormatter } from '../shared/date-formatter';
import { reverseDateFormatter } from '../shared/reverse-date-formatter';

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
  modify = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private actorService: ActorService,
    private genderService: GenderService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.actorService.getActor(id).subscribe(r => { this.actor = r;
        this.bDate = reverseDateFormatter(this.actor.birthDate);
        this.modify = true; this.getAllGenders(); });
    } else {
      this.getAllGenders();
    }
  }

  addActor(): void {
    this.actor.birthDate = dateFormatter(this.bDate);
    this.actorService.addActor(this.actor).subscribe(() => this.saved = true);
  }

  modifyActor(): void {
    this.actor.birthDate = dateFormatter(this.bDate);
    this.actorService.modifyActor(this.actor).subscribe(() => this.saved = true);
  }
  
  getAllGenders(): void {
    this.genderService.getAllGenders().subscribe(r => this.genders = r);
  }

  compareGenders(g1: Gender, g2: Gender): boolean {
    return g1 && g2 ? g1.id === g2.id : g1 === g2;
  }

  goBack() {
    this.location.back();
  }
}
