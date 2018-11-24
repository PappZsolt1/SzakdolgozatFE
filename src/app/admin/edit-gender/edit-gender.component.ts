import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { GenderService } from '../../shared/services/gender.service';
import { Gender } from '../../shared/models/gender.model';
import * as globals from '../../shared/globals';

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
  error = false;
  modalRef: BsModalRef;
  selectedId: number;

  inputTextMessage = globals.inputTextMessage;

  constructor(
    private modalService: BsModalService,
    private location: Location,
    private genderService: GenderService
    ) { }

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

  deleteGender(id: number, template: TemplateRef<any>): void {
    this.selectedId = id;
    let removable = false;
    this.genderService.canBeDeleted(this.selectedId).subscribe(r => {
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
    this.genderService.deleteGender(this.selectedId).subscribe(() => {
      this.getAllGenders(); if (this.gender.id == this.selectedId) this.edit = false; });
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    this.location.back();
  }
}
