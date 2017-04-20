import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
  <md-card class>
    <md-card-header>
      <md-card-title>{{article.title.toUpperCase()}}</md-card-title>
      <md-card-subtitle>SUMMARY</md-card-subtitle>
    </md-card-header>
    <md-card-content class="content">
      <p>{{article.summary}}</p>
    </md-card-content>
    <md-card-actions>
      <button md-button
      class="btn"
      (click)="navigateToLink()">
      LINK
      </button>
    </md-card-actions>
  </md-card>
  `,
  styles: [`
  .content {
    padding-left: 20px;
  }
  `]
})
export class DetailComponent implements OnInit {

  @Input('article') article;

  constructor() { }

  ngOnInit() { }

  navigateToLink() {
   location.href = this.article.url;
  }

}
