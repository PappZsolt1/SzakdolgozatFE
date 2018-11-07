import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchShellComponent } from './search-shell/search-shell.component';

const searchRoutes: Routes = [
  {
    path: '', component: SearchShellComponent,
    children: [
      { path: '', component: SearchCriteriaComponent },
    ]
  }
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
