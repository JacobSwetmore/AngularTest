import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PunnyV3Repository} from './services/punnyV3.repository';
import { HomepageComponent } from './components/homepage/homepage.component';
import {PunnyV3Service} from './services/punny-v3.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [PunnyV3Repository, PunnyV3Service],
  exports: [HomepageComponent]
})
export class PunnyV3Module {

}
