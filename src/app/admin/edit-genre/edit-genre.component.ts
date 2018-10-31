import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';

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

  constructor(private location: Location, private genreService: GenreService) { }

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

  deleteGenre(id: number): void {
    let answer = confirm("Biztosan törli?");
    if (answer) {
      this.genreService.deleteGenre(id)
      .subscribe(() => { this.getAllGenres(); if(this.genre.id == id) this.edit = false; });
    }
  }

  goBack() {
    this.location.back();
  }
}
