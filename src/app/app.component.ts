import { Component } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {

  constructor(private dataService: DataService) { }

}
