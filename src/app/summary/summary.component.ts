import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { SelectWordAction } from '../actions';

@Component({
  selector: 'app-summary',
  template: `
  <div class="container">
  <md-card class="card" >
    <md-card-header>
      <md-card-title>TOP WORDS FROM SEARCH RESULTS</md-card-title>
      <md-card-subtitle>LISTED BY MOST REFERENCED</md-card-subtitle>
    </md-card-header>
    <md-card-content>
      <md-list dense>
        <h3 md-subheader></h3>
        <md-list-item
          appHighlight
          *ngFor="let stat of stats"
          (click)="onSelect(stat.word)" >
          <h5 md-line>{{stat.word.toUpperCase()}}</h5>
          <span class="fill-remaining-space"></span>
          <h5>{{stat.quantity}}</h5>
        </md-list-item>
      </md-list>
      <md-spinner *ngIf="!stats">
      </md-spinner>
    </md-card-content>
  </md-card>
  </div>
  `,
  styles: [`
  .container {
    display: position;
    width: 90%
  }
  .card {
    margin: 16px;
    top: 0;
  }

  .fill-remaining-space {
    flex: 1 1 auto;
  }
  `]
})
export class SummaryComponent implements OnInit {

  @Input('stats') stats;

  constructor(private router: Router,
              private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  onSelect(word: any) {
    this.dispatchWordSelected(word);
    this.router.navigate(['/sources', word]);
  }

  dispatchWordSelected(word: string) {
    this.store.dispatch(new SelectWordAction(word));
  }

}
