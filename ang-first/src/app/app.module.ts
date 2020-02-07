import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { BowlerComponent } from './bowler/bowler.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailsComponent,
    BowlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
