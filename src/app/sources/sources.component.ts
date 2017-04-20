import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { DataService } from '../data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-sources',
  template: `
  <div class="container">

    <div class="card">
      <app-list
        [selectedWord] = " selectedWord$ | async "
        [mockArray]= " mockArray$ | async ">
      </app-list>
    </div>

    <div class="card">
      <app-detail *ngIf="article$ | async"
      [article]= " article$ | async "></app-detail>
    </div>

  </div>
  <button md-raised-button class="back-btn"
  (click)="navigateHome()">Back</button>
  `,
  styles: [`
  .container {
    display: position;
    justify-content: 'center';
  }

  .card {
    margin: 16px;
    flex: 0.5;
  }

  .back-btn {
    margin-left: 3%;
  }

  .fill-remaining-space {
    flex: 1 1 auto;
  }

  @media (min-width: 800px) {
    .container {
      display: flex;
    }
  }
  `]
})
export class SourcesComponent implements OnInit {

  selectedWord$: Observable<string>;
  selectedArticle$: Observable<string>;
  mockArray$: Observable<Array<any>>;
  article$: any;
  sortedListArticles: any;

  constructor(private router: Router,
              private dataService: DataService,
              private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private store: Store<fromRoot.State>) {

    iconRegistry.addSvgIcon(
      'link',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_link_black_24px.svg'));
  }

  ngOnInit() {

    this.selectedWord$ = this.store.select(fromRoot.getSelectedWord);
    this.selectedArticle$ = this.store.select(fromRoot.getSelectedArticle);

    this.mockArray$ = this.dataService.getMockData()
                        .switchMap(data => {

                          var _data = [];
                          data.map(article => {
                            var { summary, title, url, wordCount} = article;
                            let keys = Object.keys(article.wordCount);

                            keys.map(key => {
                              if(`/SOURCES/${key.toUpperCase()}` === this.router.url.toUpperCase()) {
                                _data.push({ summary, title, url, wordCount: wordCount[key] });
                              }
                            })
                          })

                          this.sortedListArticles = _data.sort((a: any, b: any) => {

                            if(a.wordCount < b.wordCount) {
                              return 1;
                            }

                            if(a.wordCount > b.wordCount) {
                              return -1;
                            }

                            return 0;
                          });

                          return Observable.of(this.sortedListArticles);
                        });

    this.store
        .select(fromRoot.getSelectedArticle)
        .subscribe((articleUrl: string) => {

          //Bring the user the top cited article by default
          if(!articleUrl) {
            this.mockArray$.subscribe(sortedArticles => {
              console.log(sortedArticles[0])
              this.article$ = Observable.of(sortedArticles[0]);
            });
          } else { //Otherwise get summary of article the user clicks on
            this.article$ = this.mockArray$
                              .switchMap(data => {
                                var _article;
                                data.map((article: any) => {
                                  if(article.url === articleUrl) {
                                    _article = article;
                                  }
                                })

                                return Observable.of(_article)
                              })

          }


        })
  } //End ngOnInit

  navigateHome() {
    this.router.navigateByUrl('/home');
  }
}
