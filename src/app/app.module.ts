import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PunnyV3Module} from './modules/punnyV3/punnyV3.module';
import {CommonModule} from '@angular/common';
import {PunnyV3Service} from './modules/punnyV3/services/punny-v3.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, PunnyV3Module, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
