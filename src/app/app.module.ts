import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw1Component } from './hw1/hw1.component';
import { Hw2Component } from './hw2/hw2.component';

@NgModule({
  declarations: [
    AppComponent,
    Hw1Component,
    Hw2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
