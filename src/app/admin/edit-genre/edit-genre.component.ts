import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private genreService: GenreService) { }

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
      this.genreService.deleteGenre(id).subscribe(() => this.getAllGenres());
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
