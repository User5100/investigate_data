import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  template: `
  <md-toolbar color="primary">
    <button md-icon-button
      routerLink="/home">
      <md-icon svgIcon="home">
    </md-icon></button>

    <span class="fill-remaining-space"></span>

    <button md-button><md-icon svgIcon="reorder"></md-icon></button>
  </md-toolbar>
  `,
  styles: [`
  .fill-remaining-space {
    flex: 1 1 auto;
  }
  `]
})
export class NavBarComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_home_white_24px.svg'));

    iconRegistry.addSvgIcon(
      'reorder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_reorder_white_24px.svg'));
  }

  ngOnInit() {
  }

}
