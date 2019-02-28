import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Md5} from 'ts-md5';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
