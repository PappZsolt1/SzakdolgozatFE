import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { SearchShellComponent } from './search-shell/search-shell.component';

const searchRoutes: Routes = [
  { path: '', component: SearchShellComponent },
  { path: 'filter', component: SearchComponent },
  { path: 'result/:id', component: ResultComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
