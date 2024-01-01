import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './userSide/home-page/home-page.component';
import { UserHeaderComponent } from './userSide/user-header/user-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxPComponent } from './userSide/ngrx-p/ngrx-p.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserHeaderComponent,
    NgrxPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
