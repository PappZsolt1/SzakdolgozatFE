import { Component, OnInit } from '@angular/core';

import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';

@Component({
  selector: 'app-age-classification',
  templateUrl: './edit-age-classification.component.html',
  styleUrls: ['./edit-age-classification.component.css']
})
export class EditAgeClassificationComponent implements OnInit {

  ageClassifications: AgeClassification[];
  create = false;
  edit = false;

  constructor(private ageClassificationService: AgeClassificationService) { }

  ngOnInit() {
    this.getAllAgeClassifications();
  }

  createNew() {
    this.create = true;
  }

  editExisting() {
    this.edit = true;
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  addAgeClassification(name: string): void {
    this.ageClassificationService.addAgeClassification(name).subscribe(() => { this.getAllAgeClassifications(); this.create = false; });
  }

  modifyAgeClassification(id: number, name: string): void {
    this.ageClassificationService.modifyAgeClassification(id, name).subscribe(() => this.edit = false);
  }

  deleteAgeClassification(id: number): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.ageClassificationService.deleteAgeClassification(id).subscribe(() => this.getAllAgeClassifications());
    }
  }
}
