import { Component, OnInit } from '@angular/core';

import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import { GenderService } from '../../shared/services/gender.service';
import { Gender } from '../../shared/models/gender.model';

@Component({
  selector: 'app-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
  providers: [ActorService, GenderService]
})
export class EditActorComponent implements OnInit {

  actor: Actor = { id: null, name: null, birthDate: null, birthPlace: null, bio: null, gender: null, comments: null };

  genders: Gender[];
  bDate: string;

  constructor(private actorService: ActorService, private genderService: GenderService) { }

  ngOnInit() {
    this.getAllGenders();
  }

  dateFormatter(bDate: string): string {
    let slash = bDate.indexOf("-");
    return bDate.substring(0, slash) + ". " + bDate.substr(slash + 1, 2) + ". " + bDate.substr(slash + 4, 2) + ".";
  }

  addActor(): void {
    this.actor.birthDate = this.dateFormatter(this.bDate);
    this.actorService.addActor(this.actor).subscribe();
  }

  modifyActor(): void {
    this.actorService.modifyActor(this.actor).subscribe();
  }

  getActor(id: number): void {
    this.actorService.getActor(id).subscribe(r => this.actor = r);
  }

  getAllGenders(): void {
    this.genderService.getAllGenders().subscribe(r => this.genders = r);
  }  
}
