import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RulesService } from '../../shared/services/rules.service';
import { Rules } from '../../shared/models/rules.model';

@Component({
  selector: 'app-edit-rules',
  templateUrl: './edit-rules.component.html',
  styleUrls: ['./edit-rules.component.css']
})
export class EditRulesComponent implements OnInit {

  rules: Rules;
  saved = false;

  constructor(private location: Location, private rulesService: RulesService) { }

  ngOnInit() {
   this.getRules();
  }

  getRules():void {
    this.rulesService.getRules().subscribe(r => this.rules = r);
  }

  modifyRules():void {
    this.rulesService.modifyRules(this.rules.content).subscribe(() => this.saved = true);
  }

  goBack() {
    this.location.back();
  }
}
