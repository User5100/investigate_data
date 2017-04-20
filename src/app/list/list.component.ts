import { Component, OnInit,
         Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as action from '../actions';

@Component({
  selector: 'app-list',
  template: `
  <md-card>
    <md-card-header>
      <md-card-title>ARTICLES CONTAINING <b>{{ selectedWord.toUpperCase() }}</b></md-card-title>
      <md-card-subtitle>LISTED IN ORDER OF MOST CITED</md-card-subtitle>
    </md-card-header>
    <md-card-content>
      <md-list dense>
        <md-list-item
          appHighlight
          class="item"
          (click)="selectItem(mock.url)"
          *ngFor="let mock of mockArray">
          <p>{{ mock.title }}</p> <span class="fill-remaining-space"></span> <p>{{ mock.wordCount }}</p>
        </md-list-item>
      </md-list>

    </md-card-content>
  </md-card>
  `,
  styles: [`

  .fill-remaining-space {
    flex: 1 1 auto;
  }

  `]
})
export class ListComponent implements OnInit {

  @Input('selectedWord') selectedWord;
  @Input('mockArray') mockArray;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {

  }

  selectItem(url: string) {
    this.store.dispatch(new action.SelectArticleAction(url));
  }
}
