import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterPipe } from './filter.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { LinksComponent } from './links/links.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterPipe,
    HighlightImportantDataDirective,
    DetailComponent,
    SearchComponent,
    NotfoundComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
