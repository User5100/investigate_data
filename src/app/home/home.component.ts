import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
import { Field } from '../models';

@Component({
  selector: 'app-home',
  template: `
    <app-summary [stats] = "stats" ></app-summary>
  `,
  styles: [``]
})
export class HomeComponent implements OnInit {

  fields: Observable<any>;
  stats: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.stats = this.dataService.getWordStats();
  }
}
