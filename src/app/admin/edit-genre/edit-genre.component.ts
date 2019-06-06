import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  genres: Genre[];
  genre: Genre = { id: null, name: null };
  create = false;
  edit = false;
  error = false;
  modalRef: BsModalRef;
  selectedId: number;

  inputTextMessage = globals.inputTextMessage;

  constructor(
    private modalService: BsModalService,
    private location: Location,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    this.getAllGenres();
  }

  createNew() {
    this.create = true;
  }

  editExisting(id: number, name: string) {
    this.edit = true;
    this.genre.id = id;
    this.genre.name = name;
  }

  cancelCreate() {
    this.create = false;
  }

  cancelEdit() {
    this.edit = false;
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }

  addGenre(name: string): void {
    this.genreService.addGenre(name).subscribe(() => { this.getAllGenres(); this.create = false; });
  }

  modifyGenre(): void {
    this.genreService.modifyGenre(this.genre.id, this.genre.name)
    .subscribe(() => { this.edit = false; this.getAllGenres(); });
  }

  deleteGenre(id: number, template: TemplateRef<any>): void {
    this.selectedId = id;
    let removable = false;
    this.genreService.canBeDeleted(this.selectedId).subscribe(r => {
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
    this.genreService.deleteGenre(this.selectedId).subscribe(() => {
      this.getAllGenres(); if (this.genre.id == this.selectedId) this.edit = false; });
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    this.location.back();
  }
}
