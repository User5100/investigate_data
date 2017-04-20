import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdIconModule,
         MdButtonModule, MdCardModule,
         MdProgressSpinnerModule, MdListModule,
         MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SummaryComponent } from './summary/summary.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ListComponent,
    NavBarComponent,
    HighlightDirective,
    HomeComponent,
    SourcesComponent,
    DetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdListModule,
    MdGridListModule,
    StoreModule.provideStore(reducer),
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
