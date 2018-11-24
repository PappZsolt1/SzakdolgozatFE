import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SeriesService } from '../../shared/services/series.service';
import { Series } from '../../shared/models/series.model';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.css']
})
export class EditSeriesComponent implements OnInit {

  series: Series = { id: null, rating: null, title: null, releaseYear: null, coverPicture: null, ageClassification: null, genre: null, seasons: null }
  ageClassifications: AgeClassification[];
  genres: Genre[];
  saved = false;
  modify = false;
  error = false;
  deleted = false;
  modalRef: BsModalRef;

  inputTextMessage = globals.inputTextMessage;
  releaseYearMessage = globals.releaseYearMessage;
  selecetMessage = globals.selectMessage;

  constructor(
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute,
    private seriesService: SeriesService,
    private ageClassificationService: AgeClassificationService,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.seriesService.getSeries(id).subscribe(r => { this.series = r;
      this.modify = true; this.getAllGenres(); this.getAllAgeClassifications();
      });
    } else {
      this.getAllAgeClassifications();
      this.getAllGenres();
    }
  }

  addSeries(): void {
    this.seriesService.addSeries(this.series).subscribe(() => this.saved = true);
  }

  modifySeries(): void {
    this.seriesService.modifySeries(this.series).subscribe(() => this.saved = true);
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }

  compareGenres(g1: Genre, g2: Genre): boolean {
    return g1 && g2 ? g1.id === g2.id : g1 === g2;
  }

  compareAgeClassifications(a1: AgeClassification, a2: AgeClassification): boolean {
    return a1 && a2 ? a1.id === a2.id : a1 === a2;
  }

  deleteSeries(template: TemplateRef<any>): void {
    let removable = false;
    this.seriesService.canBeDeleted(this.series.id).subscribe(r => {
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
    this.seriesService.deleteSeries(this.series.id).subscribe(() => this.deleted = true);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    if (!this.deleted) {
      this.location.back();
    } else {
      window.history.go(-2);
    }
  }
}
