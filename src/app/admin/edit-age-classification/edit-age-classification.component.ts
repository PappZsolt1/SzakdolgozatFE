import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';

@Component({
  selector: 'app-age-classification',
  templateUrl: './edit-age-classification.component.html',
  styleUrls: ['./edit-age-classification.component.css']
})
export class EditAgeClassificationComponent implements OnInit {

  ageClassifications: AgeClassification[];
  ageClassification: AgeClassification = { id: null, name: null };
  create = false;
  edit = false;
  removable = false;

  constructor(private location: Location, private ageClassificationService: AgeClassificationService) { }

  ngOnInit() {
    this.getAllAgeClassifications();
  }

  createNew() {
    this.create = true;
  }

  editExisting(id: number, name: string) {
    this.edit = true;
    this.ageClassification.id = id;
    this.ageClassification.name = name;
    this.canBeDeleted();
  }

  cancelCreate() {
    this.create = false;
  }

  cancelEdit() {
    this.edit = false;
    this.removable = false;
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  addAgeClassification(name: string): void {
    this.ageClassificationService.addAgeClassification(name).subscribe(() => { this.getAllAgeClassifications(); this.create = false; });
  }

  modifyAgeClassification(): void {
    this.ageClassificationService.modifyAgeClassification(this.ageClassification.id, this.ageClassification.name)
    .subscribe(() => { this.edit = false; this.getAllAgeClassifications(); });
  }

  deleteAgeClassification(id: number): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.ageClassificationService.deleteAgeClassification(id)
      .subscribe(() => {this.getAllAgeClassifications(); if(this.ageClassification.id == id) this.edit = false; });
    }
  }

  canBeDeleted(): void {
    this.ageClassificationService.canBeDeleted(this.ageClassification.id).subscribe(r => this.removable = r);
  }

  goBack() {
    this.location.back();
  }
}
