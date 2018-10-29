import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GenderService } from '../../shared/services/gender.service';
import { Gender } from '../../shared/models/gender.model';

@Component({
  selector: 'app-gender',
  templateUrl: './edit-gender.component.html',
  styleUrls: ['./edit-gender.component.css']
})
export class EditGenderComponent implements OnInit {

  genders: Gender[];
  gender: Gender = { id: null, name: null };
  create = false;
  edit = false;

  constructor(private router: Router, private genderService: GenderService) { }

  ngOnInit() {
    this.getAllGenders();
  }

  createNew() {
    this.create = true;
  }

  editExisting(id: number, name: string) {
    this.edit = true;
    this.gender.id = id;
    this.gender.name = name;
  }

  cancelCreate() {
    this.create = false;
  }

  cancelEdit() {
    this.edit = false;
  }

  getAllGenders(): void {
    this.genderService.getAllGenders().subscribe(r => this.genders = r);
  }

  addGender(name: string): void {
    this.genderService.addGender(name).subscribe(() => { this.getAllGenders(); this.create = false; });
  }

  modifyGender(): void {
    this.genderService.modifyGender(this.gender.id, this.gender.name)
    .subscribe(() => { this.edit = false; this.getAllGenders(); });
  }

  deleteGender(id: number): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.genderService.deleteGender(id).subscribe(() => this.getAllGenders());
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
