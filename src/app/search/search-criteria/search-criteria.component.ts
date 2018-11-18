import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-search',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  categories: String[] = [ "Színész", "Film", "Sorozat" ];
  selectedCategory: string;
  searchText: string;

  inputTextMessage = globals.inputTextMessage;
  selectMessage = globals.selectMessage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    switch (this.selectedCategory) {
      case "Színész":
        this.router.navigate(["search/actor-list", { text: this.searchText }]);
        break;
      case "Film":
        this.router.navigate(["search/movie-list", { text: this.searchText }]);
        break;
      case "Sorozat":
        this.router.navigate(["search/series-list", { text: this.searchText }]);
        break;
      default:
        break;
    }
  }
}
