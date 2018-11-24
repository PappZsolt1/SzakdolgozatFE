import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import * as globals from '../../shared/globals';

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
  error = false;
  modalRef: BsModalRef;
  selectedId: number;

  inputTextMessage = globals.inputTextMessage;

  constructor(
    private modalService: BsModalService,
    private location: Location,
    private ageClassificationService: AgeClassificationService
    ) { }

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
  }

  cancelCreate() {
    this.create = false;
  }

  cancelEdit() {
    this.edit = false;
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

  deleteAgeClassification(id: number, template: TemplateRef<any>): void {
    this.selectedId = id;
    let removable = false;
    this.ageClassificationService.canBeDeleted(this.selectedId).subscribe(r => {
      removable = r;
      if (removable) {
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
      } else {
        this.error = true;
        setTimeout(() => { this.error = false; }, 5000);
      }
    });
  }

  confirm(): void {
    this.ageClassificationService.deleteAgeClassification(this.selectedId).subscribe(() => {
      this.getAllAgeClassifications(); if (this.ageClassification.id == this.selectedId) this.edit = false; });
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    this.location.back();
  }
}
